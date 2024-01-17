import React, { useState } from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const data = [
    {
        id: 1,
        title: 'Lizard',
        description:
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
        imageUrl: 'https://i.postimg.cc/G3TQ2CvW/Rectangle-179.png',
    },
];

const Popular = () => {
    const initialDisplayLength = 80;
    const [displayLength, setDisplayLength] = useState({});

    const handleReadMore = (id) => {
        setDisplayLength((prevDisplayLength) => ({
            ...prevDisplayLength,
            [id]: prevDisplayLength[id] === initialDisplayLength ? 'full' : initialDisplayLength,
        }));
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Insights</Typography>
                <Button variant="contained" sx={{ background: 'linear-gradient(95.67deg, #4776E6 0%, #7B54E9 95.18%)', display:'flex', gap:'10px' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H8.5V13.5C8.5 13.6326 8.44732 13.7598 8.35355 13.8536C8.25979 13.9473 8.13261 14 8 14C7.86739 14 7.74021 13.9473 7.64645 13.8536C7.55268 13.7598 7.5 13.6326 7.5 13.5V8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H7.5V2.5C7.5 2.36739 7.55268 2.24021 7.64645 2.14645C7.74021 2.05268 7.86739 2 8 2C8.13261 2 8.25979 2.05268 8.35355 2.14645C8.44732 2.24021 8.5 2.36739 8.5 2.5V7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8Z" fill="white" />
                    </svg>
                    Add New
                </Button>
            </Box>

            <Box sx={{ marginBlock: '40px' }}>
                {data.map((item) => (
                    <Card key={item.id} sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="320"
                                sx={{ width: '400px', position: 'relative' }}
                                image={item.imageUrl}
                                alt={item.title}
                            />
                            <Box sx={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: '10px' }}>
                                <Button variant='outlined' sx={{ borderColor: 'rgba(0, 0, 0, 0.2)', backgroundColor: 'whitesmoke', minWidth:'initial', padding:'5px'  }} aria-label="edit">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.4">
                                            <path d="M17.7586 5.73214L14.268 2.24073C14.1519 2.12463 14.0141 2.03253 13.8624 1.96969C13.7107 1.90685 13.5482 1.87451 13.384 1.87451C13.2198 1.87451 13.0572 1.90685 12.9056 1.96969C12.7539 2.03253 12.6161 2.12463 12.5 2.24073L2.86641 11.8751C2.74983 11.9908 2.65741 12.1284 2.59451 12.2801C2.5316 12.4318 2.49948 12.5945 2.50001 12.7587V16.2501C2.50001 16.5816 2.6317 16.8996 2.86612 17.134C3.10054 17.3684 3.41849 17.5001 3.75001 17.5001H7.24141C7.40563 17.5006 7.56831 17.4685 7.71999 17.4056C7.87168 17.3427 8.00935 17.2503 8.12501 17.1337L17.7586 7.5001C17.8747 7.38403 17.9668 7.24622 18.0296 7.09454C18.0925 6.94286 18.1248 6.7803 18.1248 6.61612C18.1248 6.45194 18.0925 6.28937 18.0296 6.1377C17.9668 5.98602 17.8747 5.84821 17.7586 5.73214ZM15 8.49073L11.5086 5.0001L13.3836 3.1251L16.875 6.61573L15 8.49073Z" fill="black" />
                                        </g>
                                    </svg>
                                </Button>
                                <Button variant='outlined' sx={{ borderColor: 'rgba(0, 0, 0, 0.2)', backgroundColor: 'whitesmoke',minWidth:'initial', padding:'5px' }} aria-label="delete">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.4">
                                            <path d="M17.5 4.375C17.5 4.54076 17.4342 4.69973 17.3169 4.81694C17.1997 4.93415 17.0408 5 16.875 5H16.25V16.25C16.25 16.5815 16.1183 16.8995 15.8839 17.1339C15.6495 17.3683 15.3315 17.5 15 17.5H5C4.66848 17.5 4.35054 17.3683 4.11612 17.1339C3.8817 16.8995 3.75 16.5815 3.75 16.25V5H3.125C2.95924 5 2.80027 4.93415 2.68306 4.81694C2.56585 4.69973 2.5 4.54076 2.5 4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H16.875C17.0408 3.75 17.1997 3.81585 17.3169 3.93306C17.4342 4.05027 17.5 4.20924 17.5 4.375ZM6.875 2.5H13.125C13.2908 2.5 13.4497 2.43415 13.5669 2.31694C13.6842 2.19973 13.75 2.04076 13.75 1.875C13.75 1.70924 13.6842 1.55027 13.5669 1.43306C13.4497 1.31585 13.2908 1.25 13.125 1.25H6.875C6.70924 1.25 6.55027 1.31585 6.43306 1.43306C6.31585 1.55027 6.25 1.70924 6.25 1.875C6.25 2.04076 6.31585 2.19973 6.43306 2.31694C6.55027 2.43415 6.70924 2.5 6.875 2.5Z" fill="black" />
                                        </g>
                                    </svg>
                                </Button>
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {displayLength[item.id] === 'full' ? (
                                        <>
                                            {item.description}
                                            <Button onClick={() => handleReadMore(item.id)} sx={{color:'black'}}>
                                                Read Less
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            {item.description.slice(0, initialDisplayLength)}{' '}
                                            {item.description.length > initialDisplayLength && (
                                                <Button onClick={() => handleReadMore(item.id)} sx={{color:'black'}}>
                                                    Read More
                                                </Button>
                                            )}
                                        </>
                                    )}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Popular;
