import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AboutArticles from './AboutArticles'
import styled from '@emotion/styled';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const BidWinnerAbout = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [orderNum, setOrderNum] = useState('1');

    const handleChange = (event) => {
        setOrderNum(event.target.value);
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>About BidWinner</Typography>
                <Button variant="contained" sx={{ background: 'linear-gradient(95.67deg, #4776E6 0%, #7B54E9 95.18%)', display: 'flex', gap: '10px' }} onClick={handleOpen}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H8.5V13.5C8.5 13.6326 8.44732 13.7598 8.35355 13.8536C8.25979 13.9473 8.13261 14 8 14C7.86739 14 7.74021 13.9473 7.64645 13.8536C7.55268 13.7598 7.5 13.6326 7.5 13.5V8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H7.5V2.5C7.5 2.36739 7.55268 2.24021 7.64645 2.14645C7.74021 2.05268 7.86739 2 8 2C8.13261 2 8.25979 2.05268 8.35355 2.14645C8.44732 2.24021 8.5 2.36739 8.5 2.5V7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8Z" fill="white" />
                    </svg>
                    Add New
                </Button>
            </Box>
            <AboutArticles></AboutArticles>

            <Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{...style, borderRadius:'10px'}}>
                        <Typography sx={{ fontWeight: '600', fontSize: '24px', textAlign: 'center' }}>Add Content</Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '16px', paddingLeft: '3px' }}>Title</Typography>
                                <TextField size="small" id="outlined-basic" variant="outlined" fullWidth placeholder='Premium Plan' />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '16px', paddingLeft: '3px' }}>Subtitle</Typography>
                                <TextField size="small" id="outlined-basic" variant="outlined" fullWidth placeholder='Subtitle....' />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '16px', paddingLeft: '3px' }}>Description</Typography>
                                <TextField size="large" multiline rows={6} id="outlined-basic" variant="outlined" fullWidth placeholder='Desc...' />
                            </Box>

                            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ width: '48%', display: 'grid', gap: '10px' }}>
                                    <Typography>Image</Typography>
                                    <Button component="label" variant="outlined" sx={{ borderColor: '#ACACAC', width: '100%' }}
                                        startIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H8.5V13.5C8.5 13.6326 8.44732 13.7598 8.35355 13.8536C8.25979 13.9473 8.13261 14 8 14C7.86739 14 7.74021 13.9473 7.64645 13.8536C7.55268 13.7598 7.5 13.6326 7.5 13.5V8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H7.5V2.5C7.5 2.36739 7.55268 2.24021 7.64645 2.14645C7.74021 2.05268 7.86739 2 8 2C8.13261 2 8.25979 2.05268 8.35355 2.14645C8.44732 2.24021 8.5 2.36739 8.5 2.5V7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8Z" fill="#1976d2" />
                                        </svg>}>
                                        Add Image
                                        <VisuallyHiddenInput type="file" />
                                    </Button>
                                </Box>

                                <Box sx={{ width: '48%', display: 'grid', gap: '10px' }}>
                                    <Typography>Display Order</Typography>
                                    <FormControl size='small' fullWidth>
                                        <Select
                                            id="demo-simple-select"
                                            value={orderNum}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>

                            <Box sx={{display:'flex', gap:'20px', justifyContent:'center', marginTop:'30px', marginBottom:'20px'}}>
                                <Button variant='outlined' sx={{width:'168px',  height:'42px', borderRadius:'10px'}} onClick={handleClose}>Discard</Button>
                                <Button variant='contained' sx={{width:'168px', height:'42px', borderRadius:'10px'}}>Save</Button>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            </Box>

        </Box>
    )
}

export default BidWinnerAbout