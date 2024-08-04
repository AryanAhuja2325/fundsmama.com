import React from 'react'
import { Container, Grid, Typography, Box, Link, Button } from '@mui/material'
import { styled } from '@mui/system';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../assets/imgs/funds_mama_banner.jpg';
import banner2 from '../assets/imgs/funds_mama_banner1.jpg';
import banner3 from '../assets/imgs/funds_mama_banner2.jpg';
import banner4 from '../assets/imgs/about-us.jpg';
import app from '../assets/imgs/mobile-aap.png';
import download from '../assets/imgs/google-play2.png';
import * as COLORS from '../assets/utils/Constants';
import SimpleProcessComponent from '../components/miscellaneous/SimpleProcessComponent';
import EligibilityAndDocumentsTabs from '../components/miscellaneous/EligibilityAndDocuments';
import FAQ from '../components/miscellaneous/FAQ';
import HappyCustomer from '../components/miscellaneous/HappyCustomer';
import EMICalculator from '../components/miscellaneous/EMICalculator';
import Review from '../components/miscellaneous/Review';
import LoanProducts from '../components/miscellaneous/LoanProducts';

const StyledCarousel = styled(Carousel)({
    width: '100%',
    height: 'auto',
    '& img': {
        width: '100%',
        height: 'auto',
    }
});

const Home = () => {
    const faqData = [
        {
            "question": "Will I get a personal loan if my CIBIL score is low?",
            "answer": "Having a low CIBIL score does not automatically preclude you from getting a loan, but it will affect the amount of loan that you can avail and the loan structure that you will get. Having a good CIBIL score allows you the opportunity to get higher loan amounts with better interest rates."
        },
        {
            "question": "What is a loan top-up and how do I get one?",
            "answer": "A loan top-up is an additional loan over and above your existing loan. You can apply for a loan top-up after completing 6 successful EMI payments. To find out more about loan top-ups, call our dedicated customer care number."
        },
        {
            "question": "How do I select my loan tenure?",
            "answer": "Selecting your loan tenure is a balancing act. If you select a low tenure, your EMIs will be higher, but you will pay less interest. If you select a longer tenure, your EMIs will be lower but you will end up paying more interest. You should carefully select your tenure based on your monthly financial outflow. Talk to our experts to get a better understanding."
        },
        {
            "question": "How much time will it take to get a loan from FundsMama?",
            "answer": "FundsMama's loan disbursal process is among the fastest in the industry. From the time of application, it will take us up to 24 hours to evaluate your eligibility and approve your loan. Post approval, it will take us up to 36 hours to disburse your loan amount."
        },
        {
            "question": "Can I find out my EMI without applying for a loan?",
            "answer": "You can visit our website or download our app and use our free EMI calculator, which will give you details about your EMI."
        },
        {
            "question": "How do I apply for a medical emergency loan?",
            "answer": "Applying for a medical emergency loan from FundsMama is a fast and easy process. Just visit our website or download our app and fill in the details in the online form with your name, phone number, email id, etc. as well as your salary details and expected loan amount."
        },
        {
            "question": "Are there any restrictions on use of Medical Emergency Loans?",
            "answer": "No, there are no restrictions. FundsMama's Medical Emergency Loans can be used for any medical purpose including hospitalization expenses, medicines and post-hospitalization expenses."
        },
        {
            "question": "Can I use a travel loan for international destinations?",
            "answer": "Yes, you can. FundsMama's Travel Loans can be used for travel to any domestic or international destination. Our Travel loans can be used for travel bookings, hotel accommodation and sightseeing expenses."
        }
    ]

    const reviewsData = [
        {
            name: 'Rajat Singh',
            review: 'Taking a personal loan from FundsMama has been a great experience! When they said I would get the money within 24 hours I was sceptical, but they kept their word. The whole process was just a breeze and they explained everything so well. I am definitely coming back the next time I need a loan.'
        },
        {
            name: 'Abhijit Sarkar',
            review: 'FundsMama has the simplest and fastest process I have ever seen. I needed a loan urgently to cover my wife\'s medical bills and their team ensured that I got the best deal with a comfortable repayment option. Thanks guys!'
        },
        {
            name: 'Shalini Bose',
            review: 'I find the whole loan process confusing and tiresome. But the way the FundsMama people explained everything to me patiently with examples, I have no more doubts.'
        }
    ];


    return (
        <>
            <StyledCarousel
                infiniteLoop
                autoPlay
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                swipeable={true}
                emulateTouch={true}
            >
                <div
                    unselectable="on"
                    onselectstart="return false;"
                    onmousedown="return false;"
                    style={{ userSelect: 'none' }}
                >
                    <img src={banner1} alt="Banner 1" />
                </div>
                <div>
                    <img src={banner2} alt="Banner 2" />
                </div>
                <div>
                    <img src={banner3} alt="Banner 3" />
                </div>
            </StyledCarousel>
            <Box sx={{ backgroundColor: COLORS.white, paddingY: 4, marginTop: '30px', display: 'flex', alignItems: 'center' }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={6}>
                            <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: COLORS.darkBlue }}>
                                About Loan
                            </Typography>
                            <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue }} />
                            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                                FundsMama's extensive range of fast, easy and affordable online personal loans makes life stress-free and more enjoyable for our borrowers and adds value to those precious moments that would otherwise be difficult for them to manage or achieve. Personal loans are unsecured financial instruments that help borrowers tide over difficult times or give them the freedom to purchase products and services that may not be covered by a monthly salary. Loans are only useful when they are available at the right time and for the right occasion.
                            </Typography>
                            <a href="/aboutus"><Button sx={{ marginTop: '20px', color: COLORS.white, backgroundColor: COLORS.lightYellowOrange, }}>Read More ...</Button></a>
                        </Grid>
                        <Grid item md={6}>
                            <Box
                                component="img"
                                src={banner4}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    border: 1,
                                    borderColor: COLORS.darkBlue,
                                    padding: '8px',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
                <HappyCustomer />
            </Box>
            <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
                <LoanProducts />
            </Box>
            <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
                <EMICalculator />
            </Box>
            <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
                <SimpleProcessComponent isWhite={true} />
            </Box>
            <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
                <EligibilityAndDocumentsTabs isFeatureVisible={true} />
            </Box>
            <Box sx={{ backgroundColor: COLORS.white, paddingY: 4 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={6}>
                            <img src={app} width="100%" height="auto" className="img-responsive" alt="Vision & Mission" />
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                                Download<br />FundsMama App
                            </Typography>
                            <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue }} />
                            <Typography variant="body1">
                                Download the FundsMama app today for superfast personal loans on your mobile device. Available on both Play Store and App Store.
                            </Typography>
                            <a href="https://play.google.com/store/apps/details?id=com.fundsmama.personalloan" target='_blank'><img src={download} style={{ marginTop: '10px' }} /></a>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Review data={reviewsData} />
            <FAQ faqs={faqData} />
        </>
    )
}

export default Home
