import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    formControl: {
        minWidth: 120,
    },
});

const PartAccordion = (props) => {
    const { index } = props;
    const classes = useStyles();
    const [partStatus, setPartStatus] = useState();
    return (
        <Accordion style={{ marginTop: 15 }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
                style={{ backgroundColor: '#e6e6e6' }}
            >
                <Typography variant='h6'>Part {index + 1}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#f7f7f7' }}>
                <Box>
                    <Box className={classes.fullWidthBox}>
                        <TextField
                            style={{ marginLeft: 10 }}
                            className={classes.textFieldInput}
                            label='Part Name'
                            variant='standard'
                        />
                        <TextField
                            className={classes.textFieldInput}
                            label='Quantity'
                            variant='standard'
                        />
                        <TextField
                            className={classes.textFieldInput}
                            label='Total Amount'
                            variant='standard'
                        />
                    </Box>
                    <Box className={classes.fullWidthBox}>
                        <TextField
                            style={{ marginLeft: 10 }}
                            className={classes.textFieldInput}
                            label='Assigned To'
                            variant='standard'
                        />
                        <TextField
                            className={classes.textFieldInput}
                            label='Vendor Name'
                            variant='standard'
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={partStatus}
                                onChange={(e) => setPartStatus(e.target.value)}
                                className={classes.formControl}
                            >
                                <MenuItem value='Initiated'>Initiated</MenuItem>
                                <MenuItem value='Dispatched'>Dispatched</MenuItem>
                                <MenuItem value='Delivered'>Delivered</MenuItem>
                            </Select>
                        </FormControl>
                        {partStatus && (
                            <TextField
                                className={classes.textFieldInput}
                                label={`${partStatus} Date`}
                                variant='standard'
                            />
                        )}
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};
export default PartAccordion;
