import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import banner from '../assets/imgs/funds_mama_banner2.jpg';
import instantLoanImage from '../assets/imgs/Instant-Personal.jpg';
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

    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },

    '& > *': {
        position: 'relative',
        zIndex: 2,
    }
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


const InstantLoan = () => {
    const faqData = [
        {
            question: 'How do I get an online personal loan from FundsMama?',
            answer: 'Getting an online personal loan from FundsMama is very easy. Just visit our website or download the FundsMama app, fill out an online form with a few details and submit it. Thereafter, you will get an email requesting for documents, which you can scan and submit through email. Then, we evaluate your application and then give you a call to discuss the loan structure and repayment terms. Then, if all the parameters are satisfied, we disburse the loan within 24-36 hours.'
        },
        {
            question: 'How are loan amounts decided and how do I get the maximum loan amount?',
            answer: 'We have an efficient loan underwriting system that checks various criteria for your loan worthiness, including your CIBIL score, monthly salary, existing loans, etc., while deciding your loan amount. Depending upon your salary and your credit history, you can receive up to 80% of your salary.'
        },
        {
            question: 'How and when can I repay my personal loan?',
            answer: 'We have a flexible loan repayment system where you can choose the duration of your tenure from 12-60 months. You can repay your loan in fixed equated monthly instalments (EMI), which will be auto-debited from your salary account on a fixed date every month. To activate the auto-debit facility, we will take an e-mandate from you at the time of disbursal of your loan.'
        },
        {
            question: 'What rate of interest will be charged?',
            answer: 'The rate of interest that you will be charged will depend on the type of loan that you take. For a personal loan, the rate of interest ranges between X% and Y%, while for a short-term loan, it can vary between X% and Y%. Our processes are transparent and you will get complete information on the loan structure at the time of application.'
        },
        {
            question: 'Can I prepay my existing personal loan?',
            answer: 'Yes, prepayment or foreclosure of your personal loan is possible without any charges, provided you complete the payment of the first 6 EMIs. Some charges will be applicable if you choose to foreclose your loan before 6 months from date of disbursement.'
        },
        {
            question: 'How do I know if I am eligible for a personal loan?',
            answer: '• Should be Indian Citizens\n• Must be salaried professionals\n• Must have a monthly take home salary of at least INR 10,000/-\n• Should have a regular credit of salary to a bank account\n• Age should be within 21 to 55 years\n• Loans up to 80% of your salary'
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
                                Instant Personal Loans
                            </Typography>
                            <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: COLORS.darkBlue }} />
                            <Typography paragraph sx={{ textAlign: 'justify', color: COLORS.darkBlue, marginBottom: '10px', lineHeight: '1.8' }}>
                                We all need an infusion of cash from time to time to meet various needs that go above and beyond our salaries or fixed incomes. You may need money for unplanned expenses such as a medical emergency or you may be planning to buy a vehicle, renovate your house, go on a family vacation, meet wedding expenses, or purchase high-end household items or electronic gadgets.
                            </Typography>
                            <Typography paragraph sx={{ textAlign: 'justify', color: COLORS.darkBlue, marginBottom: '10px', lineHeight: '1.8' }}>
                                Traditionally, most people faced with such situations, approach their family or friends, or even consider breaking a fixed deposit. More recently, it has become more convenient to use credit cards, which can end up being prohibitively expensive due to extremely high interest rates and additional/hidden charges. Many take personal loans from their banks, which can be a difficult, time-consuming and stressful process involving tons of paperwork, phone calls and multiple visits to your branch.
                            </Typography>
                            <Typography paragraph sx={{ textAlign: 'justify', color: COLORS.darkBlue, marginBottom: '10px', lineHeight: '1.8' }}>
                                With FundsMama, step into the future of online financial borrowing with fast, hassle-free and completely paperless instant personal loans, all from the comfort of your homes.
                            </Typography>
                        </Grid>
                        <Grid item md={5}>
                            <img src={instantLoanImage} width="100%" height="auto" className="img-responsive" alt="Why Choose Us" />
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

export default InstantLoan