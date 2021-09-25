import React from 'react';
import {
    Box,
    Collapse,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';

const TableCollapsibleView = (props) => {
    const { open, subColumns, row, rowIndex } = props;
    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                <Collapse in={open === rowIndex} timeout='auto' unmountOnExit>
                    <Box margin={1}>
                        <Typography variant='h6' gutterBottom component='div'>
                            <b>Parts Details</b>
                        </Typography>
                        <Table size='small' aria-label='purchases'>
                            <TableHead>
                                <TableRow>
                                    {subColumns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                            }}
                                        >
                                            <b>{column.label}</b>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row?.part_details.map((part) => {
                                    return (
                                        <TableRow>
                                            {subColumns.map((column) => {
                                                const value = part[column.id];
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
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Box>
                    <Box margin={1}>
                        <Typography variant='h6' gutterBottom component='div'>
                            <b>Remarks</b>
                        </Typography>
                        <Typography style={{ marginLeft: 18 }}>{row.remarks}</Typography>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    );
};

export default TableCollapsibleView;
