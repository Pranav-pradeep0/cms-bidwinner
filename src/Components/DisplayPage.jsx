import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import BidWinnerAbout from './About/BidWinnerAbout';
import BidWinnerInsights from './Insights/BidWinnerInsights';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const DisplayPage = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabLabels = [
        "About Bidwinner",
        'Contact Us',
        'Pricing Plans',
        'Insights'
    ];

    const tabs = tabLabels.map((label, index) => (
        <Tab
            key={index}
            label={label}
            style={{
                background: value === index ? 'linear-gradient(95.67deg, #4776E6 0%, #7B54E9 95.18%)' : 'transparent',
                color: value === index ? 'white' : 'inherit',
                borderRadius: '10px',
                paddingInline: '30px',
                margin: '20px',
                width: 'max-content',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
            }}
            {...a11yProps(index)}
        />
    ));

    return (
        <Box>
            <Box sx={{ width: '100%' }}>
                <Box sx={{  }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                        sx={{
                            borderRight: 1, borderColor: 'divider',
                            '& .MuiTabs-indicator': {
                                display: 'none',
                            },
                            paddingTop: '30px',
                        }}
                    >
                        {tabs}
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <BidWinnerAbout></BidWinnerAbout>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <BidWinnerInsights></BidWinnerInsights>
                </CustomTabPanel>
            </Box>
        </Box>
    )
}

export default DisplayPage