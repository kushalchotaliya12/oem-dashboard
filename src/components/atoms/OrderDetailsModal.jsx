import { DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const OrderDetailsModal = (props) => {
    const { subColumns, row } = props;
    return (
        <>
            <DialogTitle>
                <b>Parts Details</b>
            </DialogTitle>
            <DialogContent>
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
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
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
            </DialogContent>
            <DialogTitle>
                <b>Remarks</b>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{row.remarks}</DialogContentText>
            </DialogContent>
        </>
    );
};

export default OrderDetailsModal;
