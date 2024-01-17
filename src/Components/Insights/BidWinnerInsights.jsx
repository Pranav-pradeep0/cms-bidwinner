import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react'
import Popular from './SubInsights/Popular';

const BidWinnerInsights = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Popular" value="1" />
                            <Tab label="Engineering" value="2" />
                            <Tab label="Estimation" value="3" />
                            <Tab label="Electrical" value="4" />
                            <Tab label="Marketing" value="5" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><Popular></Popular></TabPanel>
                    <TabPanel value="2">Engineering</TabPanel>
                    <TabPanel value="3">Estimation</TabPanel>
                    <TabPanel value="4">Electrical</TabPanel>
                    <TabPanel value="5">Marketing</TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default BidWinnerInsights