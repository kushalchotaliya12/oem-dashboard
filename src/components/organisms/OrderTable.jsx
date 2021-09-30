import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import orderTableData from '../../api/convertcsv';
import { Dialog } from '@material-ui/core';
import OrderDetailsModal from '../atoms/OrderDetailsModal';

const columns = [
    { id: 'id', label: 'Id', minWidth: 70, align: 'center' },
    { id: 'customer_name', label: 'Customer Name', minWidth: 170 },
    { id: 'segment', label: 'Segment', minWidth: 100 },
    {
        id: 'purchase_order_no',
        label: 'PO Number',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'purchase_order_date',
        label: 'PO Date',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'payment_status',
        label: 'Payment Status',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'status',
        label: 'Order Status',
        minWidth: 100,
        align: 'center',
    },
];

const subColumns = [
    { id: 'pending_part_name', label: 'Pending Part Name', minWidth: 170 },
    { id: 'qty', label: 'Qty', minWidth: 50, align: 'center' },
    { id: 'amount', label: 'Amount', minWidth: 100, align: 'center' },
    { id: 'delivery_date', label: 'Delivery', minWidth: 150, align: 'center' },
    { id: 'engineer_initials', label: 'Assigned', minWidth: 100, align: 'center' },
    { id: 'vendor_name', label: 'Vendor', minWidth: 100, align: 'center' },
    { id: 'part_status', label: 'Part Status', minWidth: 100, align: 'center' },
];

const rows = orderTableData;

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 640,
    },
});

const OrderTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(12);
    const [open, setOpen] = React.useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const toggleRow = (rowIndex) => {
        if (open === rowIndex) {
            setOpen('');
        } else {
            setOpen(rowIndex);
        }
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            {/* <TableCell /> */}
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    <b>{column.label}</b>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <>
                                        <TableRow
                                            hover
                                            role='checkbox'
                                            tabIndex={-1}
                                            key={row.id}
                                            onClick={() => toggleRow(index)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {/* <TableCell>
                                                <IconButton
                                                    aria-label='expand row'
                                                    size='small'
                                                    onClick={() => toggleRow(index)}
                                                >
                                                    {open === index ? (
                                                        <KeyboardArrowUpIcon />
                                                    ) : (
                                                        <KeyboardArrowDownIcon />
                                                    )}
                                                </IconButton>
                                            </TableCell> */}
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <>
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        >
                                                            {column.format &&
                                                            typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    </>
                                                );
                                            })}
                                        </TableRow>
                                        {/* <TableCollapsibleView
                                            open={open}
                                            subColumns={subColumns}
                                            row={row}
                                            rowIndex={index}
                                        /> */}
                                        <Dialog
                                            open={open === index}
                                            onClose={() => toggleRow(index)}
                                            maxWidth='md'
                                        >
                                            <OrderDetailsModal subColumns={subColumns} row={row} />
                                        </Dialog>
                                    </>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default OrderTable;
