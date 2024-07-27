import React from 'react';
import {
    Container, Grid, Typography, Box, Link, Divider
} from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import * as COLORS from '../../assets/utils/Constants';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Footer = () => {
    return (
        <div>
            <Box sx={{ backgroundColor: COLORS.darkBlue, color: COLORS.white, paddingY: 4 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={4}>
                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                Navigation
                            </Typography>
                            <Divider sx={{ borderColor: 'gray', marginBottom: 2, width: '10%', borderWidth: 2 }} />
                            <Link href="/index" color="inherit" sx={{ display: 'flex', marginBottom: 1, textDecoration: 'none' }}>
                                <ChevronRightIcon />Home
                            </Link>
                            <Link href="/aboutus" color="inherit" sx={{ display: 'flex', marginBottom: 1, textDecoration: 'none' }}>
                                <ChevronRightIcon /> About Us
                            </Link>
                            <Link href="/faq" color="inherit" sx={{ display: 'flex', marginBottom: 1, textDecoration: 'none' }}>
                                <ChevronRightIcon /> FAQ
                            </Link>
                            <Link href="/contactus" color="inherit" sx={{ display: 'flex', marginBottom: 1, textDecoration: 'none' }}>
                                <ChevronRightIcon /> Contact Us
                            </Link>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                Products
                            </Typography>
                            <Divider sx={{ borderColor: 'gray', marginBottom: 2, width: '10%', borderWidth: 2 }} />
                            <Link href="/instant_loan" color="inherit" sx={{ display: 'flex', marginBottom: 1, textDecoration: 'none' }}>
                                <ChevronRightIcon /> Instant Personal Loans
                            </Link>
                            <Link href="/short_loan" color="inherit" sx={{ display: 'flex', marginBottom: 1, textDecoration: 'none' }}>
                                <ChevronRightIcon /> Instant Short Term Loans
                            </Link>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                Contact Us
                            </Typography>
                            <Divider sx={{ borderColor: 'gray', marginBottom: 2, width: '10%', borderWidth: 2 }} />
                            <Typography sx={{ marginBottom: 1 }}>
                                <LocationOn /> 106, First Floor, Surya Kiran Building, 19 Kasturba Gandhi Marg, New Delhi - 110001
                            </Typography>
                            <Link href="tel:+919711711026" color="inherit" sx={{ display: 'flex', marginBottom: 1, textDecoration: 'none' }}>
                                <Phone /> +91-9711711026
                            </Link>
                            <Link href="mailto:info@fundsmama.com" color="inherit" sx={{ textDecoration: 'none' }}>
                                <Email /> info@fundsmama.com
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: COLORS.white, paddingY: 6, textAlign: 'center', color: COLORS.darkBlue }} >
                <Container>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        A Unit Of Girdhar Finlease Private Limited
                        <br /> GRIEVANCE REDRESSAL CELL
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: 2 }}>
                        We strictly adhere to the RBI directives and have an efficient grievance redressal team to look into and resolve all types of grievances. We always strive for responsible lending, we only offer loans that we know will be easy for you to repay, and we charge ethical fees. We never believe in high pressure or forced recovery methods of any kind. But if you have a complaint, we take it seriously and solve the problem within 5-7 working days.
                    </Typography>
                    <Typography variant="body1" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={"center"}>
                        Call us at: <Phone sx={{ marginX: '5px' }} /> +91-9711-711-026&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Email us at: <Email sx={{ marginX: '5px' }} /> <a href="mailto:grievance@fundsmama.com">grievance@fundsmama.com</a>
                    </Typography>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: COLORS.darkBlue, color: COLORS.white, paddingY: 1, textAlign: 'center' }}>
                <Container>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                        <strong>Copyright 2023 FUNDSMAMA.COM - All Rights Reserved</strong>
                        <Link href="/T&C.php" color="inherit" sx={{ marginX: 1 }}>
                            Terms and Conditions
                        </Link>|
                        <Link href="/privacy_policy.php" color="inherit" sx={{ marginX: 1 }}>
                            Privacy Policy
                        </Link>
                    </Typography>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;
