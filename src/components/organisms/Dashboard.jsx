import { Box } from '@material-ui/core';
import React from 'react';
import BarChart from '../atoms/Dashboard/BarChart';

const Dashboard = () => {
    return (
        <Box style={{ height: 500 }}>
            <h1>Dashboard</h1>
            <BarChart />
        </Box>
    );
};

export default Dashboard;
