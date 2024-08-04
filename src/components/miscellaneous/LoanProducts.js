import React from 'react';
import Slider from 'react-slick';
import { Container, Grid, Typography, Divider, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/imgs/emergency-loan.png';
import img2 from '../../assets/imgs/Short-Term-Loan.png';
import img3 from '../../assets/imgs/shopping-loan.png';
import img4 from '../../assets/imgs/travel-loan.png';
import img5 from '../../assets/imgs/Vehicle-Loan.png';
import img6 from '../../assets/imgs/House-Renovation-Loan.png';
import img7 from '../../assets/imgs/Education-Loan.png';
import img8 from '../../assets/imgs/Credit-Card-Repayment-Loan.png';
import img9 from '../../assets/imgs/Wedding-Loan.png';
import * as COLORS from '../../assets/utils/Constants';

const loanProducts = [
    {
        imgSrc: img1,
        title: 'Medical Emergency Loan',
        description: 'Health disasters can strike anytime and anywhere...',
    },
    {
        imgSrc: img2,
        title: 'Short Term Loan',
        description: "Need a small amount of cash to meet out-of-pocket expenses...",
    },
    {
        imgSrc: img3,
        title: 'Shopping Loan',
        description: "Need to refurbish your home with new furniture...",
    },
    {
        imgSrc: img4,
        title: 'Travel Loan',
        description: "Want to go on that long-delayed vacation or dream honeymoon...",
    },
    {
        imgSrc: img5,
        title: 'Vehicle Loan (2/4-wheelers)',
        description: "Thinking of getting a new car, motorcycle, or even an e-vehicle...",
    },
    {
        imgSrc: img6,
        title: 'House Renovation Loan',
        description: "Time to spruce up your home? Get FundsMama's instant...",
    },
    {
        imgSrc: img7,
        title: 'Education Loan',
        description: "Attaining a quality higher education degree from a reputable university...",
    },
    {
        imgSrc: img8,
        title: 'Credit Card Repayment Loan',
        description: "Is that credit card outstanding amount giving you headaches...",
    },
    {
        imgSrc: img9,
        title: 'Wedding Loan',
        description: "No matter how much you plan, weddings can quickly go off budget...",
    },
];

const LoanProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ background: '#f0f4f8', padding: '40px 0' }}>
            <Container>
                <Grid container justifyContent="center" textAlign="center">
                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: COLORS.darkBlue }}>
                            Products
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ color: '#555' }}>
                            Fulfil Your Dreams and Get Complete Peace of <br></br>Mind with FundsMama's Instant Personal and Short-term Loans
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Divider sx={{ bgcolor: COLORS.darkBlue, height: 4, width: '20%', mx: 'auto' }} />
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" sx={{ mt: 4 }}>
                    <Grid item xs={12}>
                        <Slider {...settings}>
                            {loanProducts.map((product, index) => (
                                <Box key={index} sx={{ px: 2 }}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderRadius: 2,
                                            marginX: '10px'
                                        }}
                                    >
                                        <img
                                            src={product.imgSrc}
                                            alt={product.title}
                                            loading="lazy"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                bgcolor: 'rgba(0, 0, 0, 0.5)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                opacity: 0,
                                                transition: 'opacity 0.5s',
                                                '&:hover': {
                                                    opacity: 1,
                                                },
                                            }}
                                        >
                                            <Typography variant="h5" sx={{ color: '#fff' }}>
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#fff', mt: 2, px: 2, textAlign: 'center' }}>
                                                {product.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LoanProducts;
