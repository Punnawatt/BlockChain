


import React from 'react';
import { Card, CardContent, Typography, Button, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import StatusButton from './StatusButton';

const CustomCard = () => {
    return (
        <Card 
            variant="outlined" 
            sx={{
                // display: 'flex',
                // flexDirection: 'row',
                // alignItems: 'center',
                // borderColor: '#b30000', // Red border
                // padding: 2,
                // maxWidth: 400,
                // backgroundColor: '#fbe9e7', // Light background color
                // boxShadow: '3px 3px 5px #4e342e',
                display: 'flex',
                flexDirection: 'row',
                height: 150,
                width: 1000,
                margin: 10,
                boxShadow: '8px 8px #472F05',
                backgroundColor: '#F3DDD1',
                borderRadius: 0,
                border: '3px solid #472F05',
                //position: 'relative',
            }}
        >
            {/* Left Column */}
            <CardContent sx={{ padding: 0, flex: 1 }}>
                <Box display="flex" flexDirection="column" gap={1} alignItems="flex-start">
                    <Typography  fontSize={25} sx={{ color: '#1e90ff' }}>Problem Name</Typography>
                    <Typography  fontSize={20} sx={{ color: '#1e90ff' }}>Create By : 0x...</Typography>
                    <Typography  fontSize={20} sx={{ color: '#1e90ff' }}>Staked amount : 8888 eth</Typography>
                    
                    <Typography fontSize={20}
                        component="a"
                        href="https://youtube.com" // External link
                        
                        rel="noopener noreferrer" // Security attributes
                        sx={{ color: '#1e90ff', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                        Testcase
                    </Typography>
                </Box>
            </CardContent>

            {/* Divider */}
            {/* <Divider orientation="vertical" flexItem 
            sx={{ borderColor: '#b30000', marginLeft: 2, marginRight: 15 }} /> */}

            {/* Right Column */}
            <Box display="flex" flexDirection="row" gap={1}>
                <DeleteButton></DeleteButton>
                <StatusButton></StatusButton>
                
            </Box>

        </Card>
    );
};

export default CustomCard;
