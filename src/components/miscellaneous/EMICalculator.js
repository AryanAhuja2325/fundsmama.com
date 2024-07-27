import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Typography,
    Slider,
    Button,
    Paper,
    Box,
    Card,
    CardContent,
    Divider,
} from '@mui/material';
import { AccessTime, Percent } from '@mui/icons-material';
import * as COLORS from '../../assets/utils/Constants';

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(5000);
    const [loanTenure, setLoanTenure] = useState(90);
    const [interestRate, setInterestRate] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleLoanAmountChange = (event, newValue) => {
        setLoanAmount(newValue);
    };

    const handleLoanTenureChange = (event, newValue) => {
        setLoanTenure(newValue);
    };

    const handleInterestRateChange = (event, newValue) => {
        setInterestRate(newValue);
    };

    const calculateEMI = () => {
        const si = (loanAmount * loanTenure * interestRate) / 100;
        const total = loanAmount + si;
        setTotalAmount(total);
    };

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, loanTenure, interestRate]);

    return (
        <Container maxWidth="md" sx={{ padding: '40px 0' }}>
            <Typography variant="h3" sx={{ color: COLORS.darkBlue, textAlign: 'center', mb: 2 }}>
                EMI Calculator
            </Typography>
            <Typography variant="subtitle1" sx={{ color: COLORS.darkBlue, textAlign: 'center', mb: 4 }}>
                Calculate Your Personal Loan EMI Here!
            </Typography>
            <Divider sx={{ marginBottom: 4, width: '20%', margin: '0 auto', height: 5, backgroundColor: COLORS.darkBlue }} />

            <Card>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <Box mb={3}>
                                <Typography variant="h6">Loan Amount</Typography>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <Typography variant="body2">5,000</Typography>
                                    </Grid>
                                    <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                        <Typography variant="body2">1L</Typography>
                                    </Grid>
                                </Grid>
                                <Slider
                                    value={loanAmount}
                                    min={5000}
                                    max={100000}
                                    step={5000}
                                    onChange={handleLoanAmountChange}
                                    valueLabelDisplay="on"
                                    valueLabelFormat={(value) => `₹${value}`}
                                    sx={{ color: COLORS.darkBlue }}
                                />
                            </Box>

                            <Box mb={3}>
                                <Typography variant="h6">
                                    <AccessTime sx={{ verticalAlign: 'middle', marginRight: 1 }} /> Loan Tenure (Days)
                                </Typography>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <Typography variant="body2">1</Typography>
                                    </Grid>
                                    <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                        <Typography variant="body2">90</Typography>
                                    </Grid>
                                </Grid>
                                <Slider
                                    value={loanTenure}
                                    min={1}
                                    max={90}
                                    onChange={handleLoanTenureChange}
                                    valueLabelDisplay="on"
                                    sx={{ color: COLORS.darkBlue }}
                                />
                            </Box>

                            <Box mb={3}>
                                <Typography variant="h6">
                                    <Percent sx={{ verticalAlign: 'middle', marginRight: 1 }} /> Interest Rate
                                </Typography>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <Typography variant="body2">1.0%</Typography>
                                    </Grid>
                                    <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                        <Typography variant="body2">1.5%</Typography>
                                    </Grid>
                                </Grid>
                                <Slider
                                    value={interestRate}
                                    min={1}
                                    max={1.5}
                                    step={0.1}
                                    onChange={handleInterestRateChange}
                                    valueLabelDisplay="on"
                                    sx={{ color: COLORS.darkBlue }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                                <Typography variant="body2" gutterBottom>
                                    Loan Amount
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    ₹{loanAmount}
                                </Typography>
                                <Divider sx={{ margin: '20px 0' }} />
                                <Typography variant="body2">Loan Tenure</Typography>
                                <Typography variant="body2">{loanTenure} Days</Typography>
                                <Divider sx={{ margin: '20px 0' }} />
                                <Typography variant="h5">Total Amount</Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                    ₹{totalAmount.toFixed(2)}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ marginTop: 3, width: '100%', '&:hover': { backgroundColor: COLORS.black } }}
                                    onClick={() => alert('Apply Now!')}
                                >
                                    Apply Now
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default EMICalculator;
