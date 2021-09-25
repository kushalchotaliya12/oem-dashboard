import React from 'react';
import { Box, Card, makeStyles, TextField, Typography } from '@material-ui/core';
import CustomerDetails from '../../atoms/New-order/CustomerDetails';

const useStyles = makeStyles({
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    fullWidthBox: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 10,
    },
    textFieldInput: {
        margin: '0 40px 0 40px',
    },
});

const OrderDetails = () => {
    const classes = useStyles();
    return (
        <Card style={{ padding: 15 }}>
            <CustomerDetails />
            <Box style={{ marginTop: 25 }}>
                <Typography variant='h6'>
                    <b>Order</b>
                </Typography>

                <Box className={classes.fullWidthBox}>
                    <TextField
                        style={{ marginLeft: 10, width: 350 }}
                        className={classes.textFieldInput}
                        label='PO Number'
                        variant='standard'
                    />
                    <TextField
                        className={classes.textFieldInput}
                        label='PO Date'
                        variant='standard'
                    />
                </Box>
                <Box className={classes.fullWidthBox}>
                    <TextField
                        style={{ marginLeft: 10 }}
                        className={classes.textFieldInput}
                        label='Payment Status'
                        variant='standard'
                    />
                    <TextField
                        className={classes.textFieldInput}
                        label='Order Status'
                        variant='standard'
                    />
                </Box>
            </Box>
        </Card>
    );
};
export default OrderDetails;
