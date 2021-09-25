import { Box, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';

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

const CustomerDetails = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant='h6'>
                <b>Customer Details</b>
            </Typography>
            <Box className={classes.fullWidthBox}>
                <TextField
                    style={{ marginLeft: 10 }}
                    className={classes.textFieldInput}
                    label='Customer Name'
                    variant='standard'
                />
                <TextField className={classes.textFieldInput} label='Segment' variant='standard' />
                <TextField className={classes.textFieldInput} label='Location' variant='standard' />
            </Box>
        </Box>
    );
};

export default CustomerDetails;
