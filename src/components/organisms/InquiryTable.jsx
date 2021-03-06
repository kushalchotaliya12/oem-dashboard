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
import { IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import inquiryTableData from '../../api/inquiryTableData';
import InquiryTableCollapseView from '../atoms/InquiryTableCollapseView';

const columns = [
    { id: 'id', label: 'Id', minWidth: 50 },
    { id: 'company_name', label: 'Company Name', minWidth: 170 },
    { id: 'inquiry_description', label: 'Equipments', minWidth: 100 },
    {
        id: 'contact_person',
        label: 'Contact Person',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'location',
        label: 'Location',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'offer_value',
        label: 'Offer Value',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 100,
        align: 'center',
    },
];

const rows = inquiryTableData;

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 640,
    },
});

const InquiryTable = () => {
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
                            <TableCell />
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
                                            <TableCell>
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
                                            </TableCell>
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
                                        <InquiryTableCollapseView
                                            open={open}
                                            row={row}
                                            rowIndex={index}
                                        />
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

export default InquiryTable;
