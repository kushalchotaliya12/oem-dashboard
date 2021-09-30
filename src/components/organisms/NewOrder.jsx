import { Box, Button, Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import OrderDetails from '../molecules/New-order/OrderDetails';
import PartsDetails from '../molecules/New-order/PartsDetails';

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
const NewOrder = () => {
    const classes = useStyles();
    const handleGenerateOrder = () => {
        console.log('Generate Order');
    };

    return (
        <Box>
            <Box>
                <Typography className={classes.sectionTitle} color='primary'>
                    Order Details
                </Typography>
                <OrderDetails />
            </Box>
            <Box style={{ marginTop: 15 }}>
                <Typography className={classes.sectionTitle} color='primary'>
                    Parts Details
                </Typography>
                <Card style={{ padding: 15 }}>
                    <PartsDetails />
                </Card>
            </Box>
            <Box style={{ marginTop: 15, width: '100%' }}>
                <Button
                    variant='contained'
                    color='primary'
                    style={{ marginTop: 20, fontWeight: 'bold', fontSize: 16 }}
                    onClick={handleGenerateOrder}
                >
                    Generate Order
                </Button>
            </Box>
        </Box>
    );
};

export default NewOrder;
