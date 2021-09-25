import React from 'react';
import { Box, Collapse, TableCell, TableRow, Typography } from '@material-ui/core';

const InquiryTableCollapseView = (props) => {
    const { open, subColumns, row, rowIndex } = props;
    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                <Collapse in={open === rowIndex} timeout='auto' unmountOnExit>
                    <Box margin={1}>
                        <Typography variant='h6' gutterBottom component='div'>
                            <b>Other Details</b>
                        </Typography>
                        <Box
                            style={{ display: 'flex', justifyContent: 'space-around', margin: 10 }}
                        >
                            <Box>
                                <Typography>
                                    <b>Offer Value:</b> {row.offer_value}
                                </Typography>
                                <Typography>
                                    <b>Purchase Price:</b> {row.purchase_price}
                                </Typography>
                                <Typography>
                                    <b>Margin:</b> {row.margin}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    <b>Offer Date:</b> {row.offer_date}
                                </Typography>
                                <Typography>
                                    <b>Offer No:</b> {row.offer_no}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    <b>Total Quantity:</b> {row.total_quantity}
                                </Typography>
                                <Typography>
                                    <b>Order Value:</b> {row.order_value}
                                </Typography>
                                <Typography>
                                    <b>Order Date:</b> {row.order_date}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    <b>Inquiry By:</b> {row.inquiry_by}
                                </Typography>
                                <Typography>
                                    <b>Generated By:</b> {row.inquiry_generated_by}
                                </Typography>
                                <Typography>
                                    <b>Offer Submitted By:</b> {row.offer_submitted_by}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box margin={1}>
                        <Typography variant='h6' gutterBottom component='div'>
                            <b>Remarks</b>
                        </Typography>
                        <Typography style={{ marginLeft: 18, fontSize: 14 }}>
                            {row.remarks}
                        </Typography>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    );
};

export default InquiryTableCollapseView;
