import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import banner from '../assets/imgs/instant_short_term_loan.jpg';
import ShortLoanImage from '../assets/imgs/Instant-Short-Term-Loans.jpg';
import banner2 from '../assets/imgs/instant-personal-loans-funds-mama.jpg';

import * as COLORS from '../assets/utils/Constants';
import SimpleProcessComponent from '../components/miscellaneous/SimpleProcessComponent';
import FAQ from '../components/miscellaneous/FAQ';
import EligibilityAndDocuments from '../components/miscellaneous/EligibilityAndDocuments';

const ContactSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    background: `url(${banner}) no-repeat center center`,
    backgroundSize: 'cover',
    color: '#fff',
    textAlign: 'center',
    padding: '50px 0',
    marginTop: '100px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
}));
const ContactBanner = styled(Box)({
    color: '#fff',
    textAlign: 'left',
    fontSize: '50px',
    fontWeight: 'bold'
});
const Thumbnail = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: 'black',
    backgroundColor: COLORS.lightGray,
    fontWeight: 'bold'
}));


const ShortLoan = () => {
    const faqData = [
        {
            question: "What is a Non-Banking Financial Company (NBFC)?",
            answer: "A short-term loan is an unsecured personal loan. If you have a requirement for a small amount of money for any purpose, FundsMama offers short-term loans of Rs 5000 to Rs 1,00,000 for limited periods up to 1 year."
        },
        {
            question: "How do I apply for a short-term loan?",
            answer: "To apply for a short-term loan, you need to fill out the online application form on our website, provide the necessary documentation, and wait for approval."
        },
        {
            question: "What are the eligibility criteria for a short-term loan?",
            answer: "To be eligible for a short-term loan, you must be an Indian citizen, a salaried professional, and have a monthly take-home salary of at least INR 10,000/-."
        }
    ];


    return (
        <>
            <ContactSection>
                <Container>
                    <ContactBanner>
                        Fast, Secure, And Paperless <br></br>Instant Personal Loans For Any <br></br>Requirement
                    </ContactBanner>
                </Container>
            </ContactSection>
            <Box sx={{ paddingY: 4 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={7}>
                            <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: COLORS.darkBlue }}>
                                Instant Short Term Loans
                            </Typography>
                            <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue }} />
                            <Typography paragraph sx={{ textAlign: 'justify', color: COLORS.darkBlue, marginBottom: '10px', lineHeight: '1.8' }}>
                                If you need an infusion of cash urgently for an unforeseen emergency or to make up shortage of funds,or even to buy a snazzy gadget, taking short-term loans is an excellent choice. At FundsMama, you have the flexibility to avail of instant short-term loans ranging from Rs. 5000 to Rs. 1,00,000. Our short-term loans help smooth over turbulent times and keep you financially stable over limited periods of up to 1 year.
                            </Typography>
                            <Typography paragraph sx={{ textAlign: 'justify', color: COLORS.darkBlue, marginBottom: '10px', lineHeight: '1.8' }}>
                                Paying EMIs for short-term loans are more affordable and easier to manage than long-term loans. While the EMIs may be higher than loans with long tenures, you actually incur less interest on your overall paymentsince the repayment period is quite short. So, if you have a regular income and good credit hygiene, short-term loans are definitely more beneficial.
                            </Typography>
                        </Grid>
                        <Grid item md={5}>
                            <img src={ShortLoanImage} width="100%" height="auto" className="img-responsive" alt="Why Choose Us" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: COLORS.lightGray, paddingY: 4 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={6}>
                            <img src={banner2} width="100%" height="auto" className="img-responsive" alt="Vision & Mission" />
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: COLORS.darkBlue }}>
                                The FundsMama Edge
                            </Typography>
                            <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue }} />
                            <Typography variant="paragraph" sx={{ color: COLORS.darkBlue, lineHeight: '1.6' }}>
                                FundsMama is the ideal choice for all your personal loan requirements. We have perfected our loan disbursal mechanism with countless hours of fine-tuning our processes, building our proprietary underwriting algorithm for efficient and accurate loan estimates and having the right people in place who understand your requirements and work tirelessly to ensure that you never have to suffer due to a lack of money.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box >
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
                <Typography variant="h4" align="center">The main features of our services are:</Typography>
                <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue }} />
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <Thumbnail>Multipurpose, collateral-free loans: Our personal loans can be used for any purpose and they are unsecured loans</Thumbnail>
                    </Grid>
                    <Grid item md={6}>
                        <Thumbnail>Lowest possible interest rates: We offer the most competitive interest rates, keeping your requirements in mind</Thumbnail>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <Thumbnail>Minimal documentation: You need to provide just basic documents for processing your loan.</Thumbnail>
                    </Grid>
                    <Grid item md={6}>
                        <Thumbnail>Completely paperless process: The entire process is fully online and does not require any printouts or photocopies of original documents.</Thumbnail>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <Thumbnail>Higher disbursal amounts: We take several parameters into account to ensure that you get the highest possible loan to meet your requirements.</Thumbnail>
                    </Grid>
                    <Grid item md={6}>
                        <Thumbnail>Instantaneous approval and disbursal: Our loan approval and disbursal proceduresare lightning fast, ensuring that you do not face any delays in meeting your financial obligations.</Thumbnail>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <Thumbnail>Flexible repayment options: We offer smooth and flexible repayment options that will allow you to repay your loan in easy instalments.</Thumbnail>
                    </Grid>
                    <Grid item md={6}>
                        <Thumbnail>Higher loan tenure: You can choose from a wide repayment tenure that will place the least burden on your monthly expenditure.</Thumbnail>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <Thumbnail>Transparent and hassle-free process: We provide complete information on our loan process and charges thus empowering you to take informed decisions.</Thumbnail>
                    </Grid>
                    <Grid item md={6}>
                        <Thumbnail>Dedicated online support: Our dedicated support services offer you full assistance on your loan-related queries as well as advice on any top-up that you might require.</Thumbnail>
                    </Grid>
                </Grid>
            </Container>
            <SimpleProcessComponent />
            <EligibilityAndDocuments />
            {/*Customer Review*/}
            <FAQ faqs={faqData} />
        </>
    )
}

export default ShortLoan