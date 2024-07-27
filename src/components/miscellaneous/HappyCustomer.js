import React from 'react';
import { Box, Container, Typography, Grid, LinearProgress } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/imgs/5-l.png';
import img2 from '../../assets/imgs/creadit-icon.png';
import * as COLORS from '../../assets/utils/Constants';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const HappyCustomer = () => {
    const testimonials = [
        {
            title: 'Our Top 3 Loans',
            loans: [
                { name: 'Emergency Loan', progress: 100, color: 'error' },
                { name: 'Shopping Loan', progress: 80, color: 'warning' },
                { name: 'Travel Loan', progress: 60, color: 'success' }
            ],
            bgColor: COLORS.darkBlue
        },
        {
            title: 'Application Download',
            downloads: '10k +',
            image: img1,
            bgColor: '#ff5733'
        },
        {
            title: 'Happiness Rating',
            rating: 4.5,
            bgColor: COLORS.black
        },
        {
            title: 'Minimal Documentation',
            image: img2,
            bgColor: COLORS.yellowOrange
        }
    ];


    return (
        <Box className="funds-mama-happy-customer" sx={{ bgcolor: COLORS.yellow, padding: '20px 0' }}>
            <Container>
                <Carousel showArrows={true} showThumbs={false} showIndicators={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                    <Grid container spacing={2} sx={{ padding: 2 }}>
                        {testimonials.map((testimonial, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
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
                                    backgroundColor: testimonial.bgColor
                                }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, color: COLORS.white }}>
                                        {testimonial.title}
                                    </Typography>
                                    {testimonial.loans && (
                                        <Box sx={{ marginBottom: 2 }}>
                                            {testimonial.loans.map((loan, idx) => (
                                                <Box key={idx} sx={{ marginBottom: 1 }}>
                                                    <Typography variant="body2">{loan.name}</Typography>
                                                    <LinearProgress variant="determinate" value={loan.progress} color={loan.color} sx={{ borderRadius: 1 }} />
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                    {testimonial.downloads && (
                                        <Box sx={{ marginBottom: 2 }}>
                                            <Typography variant="h6">{testimonial.downloads}</Typography>
                                            <img src={testimonial.image} width="160" height="70" alt="funds-mama-l" style={{}} />
                                        </Box>
                                    )}
                                    {testimonial.rating && (
                                        <Box sx={{ marginBottom: 2 }}>
                                            <Typography variant="h6">{testimonial.rating}</Typography>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarHalfIcon />
                                            </Box>
                                        </Box>
                                    )}
                                    {testimonial.image && (
                                        <Box sx={{ marginBottom: 2 }}>
                                            <img src={testimonial.image} width="153" height="79" alt="credit" />
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Carousel>
            </Container>
        </Box>
    );
};

export default HappyCustomer;
