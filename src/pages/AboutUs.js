import React, { useState } from 'react';
import {
    Container, Grid, Typography, Box, useMediaQuery, useTheme
} from '@mui/material';
import aboutImage from '../assets/imgs/about-image.jpg';
import whyChooseUs from '../assets/imgs/why-choose-us.jpg';
import vision from '../assets/imgs/vision.jpg';
import aboutBanner from '../assets/imgs/about-banner.jpg';
import * as COLORS from '../assets/utils/Constants';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SimpleProcessComponent from '../components/miscellaneous/SimpleProcessComponent';
import FAQ from '../components/miscellaneous/FAQ';
import Review from '../components/miscellaneous/Review';

const AboutUs = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [expanded, setExpanded] = useState(false);
    const reviewsData = [
        {
            name: 'Tarun Solanki',
            review: 'Amazing service! Their loan disbursal system is so fast and simple and I got exactly the amount that I wanted. It is the most enjoyable experience I have had with a finance company.',
        },
        {
            name: 'Leena Nair',
            review: 'Applying for a loan on FundsMama\'s app is a breeze. The app is very well designed and easy to use. Their loan approval system is also very efficient. I will be recommending you guys to all my friends and family.',
        },
        {
            name: 'Mayank Shah',
            review: 'Thanks to FundsMama\'s great loan service, I was finally able to redecorate my home in time for Diwali. My advice to all personal loan-seekers: close your eyes and trust FundsMama; you won\'t regret it.',
        }
    ];


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqData = [
        {
            question: 'Why should I take a loan from FundsMama?',
            answer: 'FundsMama offers multipurpose, collateral-free personal loans at the lowest possible interest rates. Our loans evaluation process is completely online, paperless and requires minimal documentation. We provide fast approval and disbursal of loans with flexible repayment options. We offer higher loan amounts with higher repayment tenures. Our entire process is completely transparent and hassle-free and we provide dedicated customer support.'
        },
        {
            question: 'How do I find out more about FundsMama\'s loans?',
            answer: 'If you wish to learn more about our products and services, you can call our dedicated customer care number +91-9711711026 or write to us at info@fundsmama.com. We will be more than happy to assist you with any information pertaining to our loans.'
        },
        {
            question: 'Are FundsMama\'s services available in my city?',
            answer: 'FundsMama\'s services are currently available in all major towns and cities of Delhi NCR, Rajasthan, Madhya Pradesh, Gujarat, Maharashtra, West Bengal, Andhra Pradesh, Telangana, Tamil Nadu and Karnataka. We are in the process of expanding our operations so keep checking our website for updates.'
        }
    ];

    return (
        <>
            <Box sx={{
                backgroundImage: `url(${aboutBanner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '470px',
                display: 'flex',
                alignItems: 'flex-end',
                marginTop: '100px',
                paddingBottom: 4,
                color: COLORS.white,
                textAlign: isSmallScreen ? 'center' : 'left',
            }}>
                <Container>
                    <Grid container>
                        <Grid item md={8}>
                            <Typography variant={isSmallScreen ? 'h5' : 'h3'} sx={{ fontSize: isSmallScreen ? '24px' : '58px', fontWeight: 'bold' }}>
                                We are not just in the business of lending money; <br />We are in the business of making desires come true
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ paddingY: 4 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={7}>
                            <Typography variant="h4" sx={{ color: COLORS.darkBlue, marginBottom: 2, fontWeight: 'bold' }}>
                                About FundsMama
                            </Typography>
                            <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue }} />
                            <Typography variant="body1" sx={{ textAlign: 'justify', marginBottom: 2 }}>
                                FundsMama is a leading non-banking financial company (NBFC) providing personal finance solutions for a range of immediate financial requirements. We have partnered with leading banks and lenders to create a dedicated pool of wealth that addresses the supplementary monetary needs of salaried professionals in India. We are a fast-growing company providing our services across Delhi NCR, Rajasthan, Madhya Pradesh, Gujarat, Maharashtra, West Bengal, Andhra Pradesh, Telangana, Tamil Nadu and Karnataka. We have ambitious plans to expand our operations to more locations across the country.
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                                FundsMama is run by a team of consummate financial professionals with over 01 years of experience in providing value-based, technology-driven financial services to countless individuals and helping them to overcome all kinds of financial situations.
                            </Typography>
                        </Grid>
                        <Grid item md={5}>
                            <img src={aboutImage} width="100%" height="auto" className="img-responsive" alt="About FundsMama" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: COLORS.yellow, paddingY: 4 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={6}>
                            <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                                Why Choose Us
                            </Typography>
                            <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue }} />
                            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                                FundsMama is a highly reputable name in the personal financial services domain with years of experience in providing quality financial services to salaried professionals. Our reputation is built on countless successful disbursements and satisfied customers. We have among the fastest, most accurate and totally transparent loan approval mechanisms in the industry and our processes are completely online and paperless with minimal documentation. We have a team of talented, knowledgeable professionals who are adept at dealing with customers with patience, thoughtfulness and respect. Our loan repayment options are flexible and do not put a huge dent in our customers' finances.
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <img src={whyChooseUs} width="100%" height="auto" className="img-responsive" alt="Why Choose Us" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: COLORS.lightYellowOrange, paddingY: 4 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={6}>
                            <img src={vision} width="100%" height="auto" className="img-responsive" alt="Vision & Mission" />
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                                Our Vision & Mission
                            </Typography>
                            <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue }} />
                            <Typography variant="body1">
                                <strong>Vision:</strong> Our vision is to provide fast, reliable and efficient personal and short-term loans to the largest section of salaried professionals across the length and breadth of the country through sustainable and transparent lending practices.
                            </Typography>
                            <Typography variant="body1">
                                <strong>Mission:</strong> We aim to create a pool of wealth and resources that will bridge the divide between high-income earners and low-income earners by providing valuable and timely financial assistance that will ensure that no dream is too big to achieve.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <SimpleProcessComponent />
            <Review data={reviewsData} />
            <FAQ faqs={faqData} />
        </>
    );
}

export default AboutUs;
