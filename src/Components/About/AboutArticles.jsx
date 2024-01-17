import { Box, Button, Card, CardContent, CardMedia, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const AboutArticles = () => {

    const initialData = [
        {
            id: 1,
            title: 'About Us',
            subTitle: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet consectetur. Amet nunc luctus ut varius condimentum porttitor consequat cursus. Commodo hac quis orci id diam auctor. Ligula turpis faucibus nulla nibh imperdiet. Purus proin duis leo cras feugiat.',
            image: 'https://i.postimg.cc/gjZZvysp/Rectangle-147.png'
        },
    ];

    const [data, setData] = useState(initialData);

    const [editingItem, setEditingItem] = useState(null);

    const handleEdit = (id) => {
        setEditingItem(id);
    };

    const handleRemove = (id) => {
        setData((prevData) => prevData.filter(item => item.id !== id));
    };

    const handleSave = (id) => {
        setEditingItem(null);
    };

    const handleCancel = () => {
        setEditingItem(null);
    };

    const handleInputChange = (id, field, value) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    return (
        <Box>
            <Box>
                {data.map(item => (
                    <Card key={item.id} sx={{ display: 'flex', padding: '10px', boxShadow: 'none', marginTop: '30px' }}>
                        <Typography sx={{ marginBlock: 'auto', paddingInline: '10px' }}>{item.id}</Typography>
                        <CardMedia
                            component="img"
                            height="186"
                            sx={{ width: '260px' }}
                            image={item.image}
                        />
                        <CardContent sx={{ display: 'flex', gap: '20px', }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Typography sx={{ fontWeight: '400', fontSize: '16px', color: 'rgba(0, 0, 0, 1)', opacity: '40%' }}>Title:</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '16px', color: 'rgba(0, 0, 0, 1)', opacity: '40%' }}>SubTitle:</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '16px', color: 'rgba(0, 0, 0, 1)', opacity: '40%' }}>Description:</Typography>
                            </Box>

                            {editingItem === item.id ? (
                                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', width: '100%' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '1100px' }}>
                                        <TextField
                                            fullWidth
                                            sx={{}}
                                            size='small'
                                            value={item.title}
                                            onChange={(e) => handleInputChange(item.id, 'title', e.target.value)}
                                        />
                                        <TextField
                                            fullWidth
                                            size='small'
                                            value={item.subTitle}
                                            onChange={(e) => handleInputChange(item.id, 'subTitle', e.target.value)}
                                        />
                                        <TextField
                                            size='small'
                                            fullWidth
                                            value={item.description}
                                            onChange={(e) => handleInputChange(item.id, 'description', e.target.value)}
                                        />
                                    </Box>
                                    <Box sx={{ marginBlock: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <Button variant="contained" onClick={() => handleSave(item.id)}>
                                            Save
                                        </Button>
                                        <Button variant="outlined" onClick={handleCancel}>
                                            Cancel
                                        </Button>
                                    </Box>
                                </Box>

                            ) : (
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <Typography sx={{ fontWeight: '300', fontSize: '16px'}}>{item.title}</Typography>
                                    <Typography sx={{ fontWeight: '300', fontSize: '16px'}}>{item.subTitle}</Typography>
                                    <Typography sx={{ fontWeight: '300', fontSize: '16px'}}>{item.description}</Typography>
                                </Box>
                            )}

                        </CardContent>
                        <Box sx={{ ml: 'auto', mb: 'auto', display: 'flex', gap: '10px' }}>
                            <Button variant='outlined' sx={{ borderColor: 'rgba(0, 0, 0, 0.2)', minWidth: 'initial', padding: '5px' }} aria-label="edit" onClick={() => handleEdit(item.id)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path d="M17.7586 5.73214L14.268 2.24073C14.1519 2.12463 14.0141 2.03253 13.8624 1.96969C13.7107 1.90685 13.5482 1.87451 13.384 1.87451C13.2198 1.87451 13.0572 1.90685 12.9056 1.96969C12.7539 2.03253 12.6161 2.12463 12.5 2.24073L2.86641 11.8751C2.74983 11.9908 2.65741 12.1284 2.59451 12.2801C2.5316 12.4318 2.49948 12.5945 2.50001 12.7587V16.2501C2.50001 16.5816 2.6317 16.8996 2.86612 17.134C3.10054 17.3684 3.41849 17.5001 3.75001 17.5001H7.24141C7.40563 17.5006 7.56831 17.4685 7.71999 17.4056C7.87168 17.3427 8.00935 17.2503 8.12501 17.1337L17.7586 7.5001C17.8747 7.38403 17.9668 7.24622 18.0296 7.09454C18.0925 6.94286 18.1248 6.7803 18.1248 6.61612C18.1248 6.45194 18.0925 6.28937 18.0296 6.1377C17.9668 5.98602 17.8747 5.84821 17.7586 5.73214ZM15 8.49073L11.5086 5.0001L13.3836 3.1251L16.875 6.61573L15 8.49073Z" fill="black" />
                                    </g>
                                </svg>
                            </Button>
                            <Button variant='outlined' sx={{ borderColor: 'rgba(0, 0, 0, 0.2)', minWidth: 'initial', padding: '5px' }} aria-label="delete" onClick={() => handleRemove(item.id)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path d="M17.5 4.375C17.5 4.54076 17.4342 4.69973 17.3169 4.81694C17.1997 4.93415 17.0408 5 16.875 5H16.25V16.25C16.25 16.5815 16.1183 16.8995 15.8839 17.1339C15.6495 17.3683 15.3315 17.5 15 17.5H5C4.66848 17.5 4.35054 17.3683 4.11612 17.1339C3.8817 16.8995 3.75 16.5815 3.75 16.25V5H3.125C2.95924 5 2.80027 4.93415 2.68306 4.81694C2.56585 4.69973 2.5 4.54076 2.5 4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H16.875C17.0408 3.75 17.1997 3.81585 17.3169 3.93306C17.4342 4.05027 17.5 4.20924 17.5 4.375ZM6.875 2.5H13.125C13.2908 2.5 13.4497 2.43415 13.5669 2.31694C13.6842 2.19973 13.75 2.04076 13.75 1.875C13.75 1.70924 13.6842 1.55027 13.5669 1.43306C13.4497 1.31585 13.2908 1.25 13.125 1.25H6.875C6.70924 1.25 6.55027 1.31585 6.43306 1.43306C6.31585 1.55027 6.25 1.70924 6.25 1.875C6.25 2.04076 6.31585 2.19973 6.43306 2.31694C6.55027 2.43415 6.70924 2.5 6.875 2.5Z" fill="black" />
                                    </g>
                                </svg>
                            </Button>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default AboutArticles