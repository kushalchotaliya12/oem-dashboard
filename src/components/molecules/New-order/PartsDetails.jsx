import { Box, Button } from '@material-ui/core';
import React, { useState } from 'react';
import PartAccordion from '../../atoms/New-order/PartAccordion';
import AddIcon from '@material-ui/icons/Add';

const PartsDetails = () => {
    const [partsCount, setPartsCount] = useState(1);

    return (
        <Box>
            {[...Array(partsCount)].map((_, index) => {
                return <PartAccordion index={index} />;
            })}
            <Button
                variant='outlined'
                color='primary'
                style={{ marginTop: 20, fontWeight: 'bold' }}
                startIcon={<AddIcon />}
                onClick={() => setPartsCount(partsCount + 1)}
            >
                Add New Part
            </Button>
        </Box>
    );
};

export default PartsDetails;
