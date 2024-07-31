import React from 'react';
import { Box, Container, Typography, Grid, LinearProgress } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/imgs/5-l.png';
import img2 from '../../assets/imgs/creadit-icon.png';
import * as COLORS from '../../assets/utils/Constants';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const HappyCustomer = () => {
    return (
        <Box className="funds-mama-happy-customer" sx={{ bgcolor: COLORS.yellow, padding: '20px 0' }}>
            <Container>
                <Carousel showArrows={true} showThumbs={false} showIndicators={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                    <Grid container spacing={2} sx={{ padding: 2 }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{
                                bgcolor: 'white',
                                borderRadius: 2,
                                boxShadow: 2,
                                padding: 3,
                                textAlign: 'center',
                                height: '100%',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 4
                                },
                                backgroundColor: COLORS.darkBlue
                            }}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, color: COLORS.white }}>
                                    Our Top 3 Loans
                                </Typography>
                                <Box sx={{ marginBottom: 2, color: COLORS.white }}>
                                    <Box sx={{ marginBottom: 1 }}>
                                        <Typography sx={{ fontSize: '24px' }}>Emergency Loan</Typography>
                                        <LinearProgress variant="determinate" value={100} color="error" sx={{ borderRadius: 1, height: '18px' }} />
                                    </Box>
                                    <Box sx={{ marginBottom: 1 }}>
                                        <Typography sx={{ fontSize: '24px' }}>Shopping Loan</Typography>
                                        <LinearProgress variant="determinate" value={80} color="warning" sx={{ borderRadius: 1, height: '18px' }} />
                                    </Box>
                                    <Box sx={{ marginBottom: 1 }}>
                                        <Typography sx={{ fontSize: '24px' }}>Travel Loan</Typography>
                                        <LinearProgress variant="determinate" value={60} color="success" sx={{ borderRadius: 1, height: '18px' }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{
                                borderRadius: 2,
                                boxShadow: 2,
                                padding: 3,
                                textAlign: 'center',
                                height: '100%',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 4
                                },
                                backgroundColor: "#BF8F00",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: COLORS.white }}>
                                    Application Download
                                </Typography>
                                <Typography variant="h2" sx={{ color: COLORS.white, fontWeight: 'bold' }}>10k +</Typography>
                                <img src={img1} width="160" height="70" alt="funds-mama-l" />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{
                                bgcolor: 'white',
                                borderRadius: 2,
                                boxShadow: 2,
                                padding: 3,
                                textAlign: 'center',
                                height: '100%',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 4
                                },
                                backgroundColor: COLORS.black
                            }}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, color: COLORS.white }}>
                                    Happiness Rating
                                </Typography>
                                <Box sx={{ marginBottom: 2 }}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <StarIcon sx={{ color: '#ffd700', width: '50px', height: '50px' }} />
                                        <StarIcon sx={{ color: '#ffd700', width: '50px', height: '50px' }} />
                                        <StarIcon sx={{ color: '#ffd700', width: '50px', height: '50px' }} />
                                        <StarIcon sx={{ color: '#ffd700', width: '50px', height: '50px' }} />
                                        <StarHalfIcon sx={{ color: '#ffd700', width: '50px', height: '50px' }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{
                                bgcolor: 'white',
                                borderRadius: 2,
                                boxShadow: 2,
                                paddingY: 3,
                                textAlign: 'center',
                                height: '100%',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 4
                                },
                                backgroundColor: COLORS.yellowOrange,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, color: COLORS.white }}>
                                    Minimal Documentation
                                </Typography>
                                <Box sx={{ marginBottom: 2, alignSelf: 'center' }}>
                                    <img src={img2} width="auto" height="auto" alt="credit" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Carousel>
            </Container>
        </Box >
    );
};

export default HappyCustomer;
