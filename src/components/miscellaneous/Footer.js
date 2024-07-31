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
