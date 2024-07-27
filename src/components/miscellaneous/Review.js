import React from 'react';
import { Box, Container, Typography, Divider, Avatar } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import aboutTestimonials from '../../assets/imgs/about-testimonials.jpg';
import * as COLORS from '../../assets/utils/Constants';

const Review = ({ data }) => {
    const BGCOLORS = ['orange', 'purple', 'gray', 'green', 'coral'];
    return (
        <Box
            sx={{
                backgroundColor: '#333',
                paddingY: 4,
                color: '#fff',
                backgroundImage: `url(${aboutTestimonials})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Container>
                <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center' }}>
                    Trusted By <br /> Our Customers
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                    <Divider sx={{ borderColor: '#fff', width: '10%', borderWidth: 2 }} />
                </Box>
                <Carousel
                    infiniteLoop
                    autoPlay
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    swipeable={true}
                    emulateTouch={true}
                >
                    {data.map((dt, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: 6,
                                bgcolor: COLORS.darkBlue,
                                borderRadius: "40px",
                                margin: 1
                            }}
                        >
                            <Avatar
                                src={AccountCircleIcon}
                                alt={dt.name}
                                sx={{ width: 60, height: 60, marginBottom: 2, backgroundColor: BGCOLORS[Math.floor(Math.random() * BGCOLORS.length)] }}
                            />
                            <Typography variant="h4" sx={{ marginBottom: 1, color: COLORS.white }}>
                                {dt.name}
                            </Typography>
                            <Box sx={{ padding: 3, border: 1, borderRadius: '20px' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', color: COLORS.white }}>
                                    "{dt.review}"
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
};

export default Review;
