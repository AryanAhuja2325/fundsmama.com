import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Typography,
    Slider,
    Button,
    Paper,
    Divider,
    Box
} from '@mui/material';
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
        <div style={{ background: '#f0f4f8', padding: '40px 0' }}>
            <Container>
                <Grid container >
                    <Grid item xs={12}>
                        <Typography variant="h3" align="left" gutterBottom color={COLORS.darkBlue} sx={{ fontWeight: 'bold' }}>
                            EMI Calculator
                        </Typography>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Calculate Your Personal Loan EMI Here!
                        </Typography>
                        <Divider style={{ margin: '20px 0', width: '20%', height: '4px', backgroundColor: COLORS.darkBlue }} />
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={2} sx={{ padding: '30px', backgroundColor: COLORS.darkBlue, color: COLORS.white, borderRadius: '40px' }}>
                            <Typography variant="h6">Loan Amount</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body2">5,000</Typography>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: 'right' }}>
                                    <Typography variant="body2">1L</Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{ paddingX: '30px', backgroundColor: COLORS.white, borderRadius: '40px  ' }}>
                                <Slider
                                    value={loanAmount}
                                    min={5000}
                                    max={100000}
                                    step={5000}
                                    onChange={handleLoanAmountChange}
                                    valueLabelDisplay="auto"
                                    sx={{
                                        color: COLORS.yellowOrange,
                                        '& .MuiSlider-thumb': {
                                            backgroundColor: COLORS.black,
                                            width: 20,
                                            height: 20,
                                            borderRadius: 0,
                                            '&:hover, &.Mui-focusVisible': {
                                                boxShadow: 'inherit',
                                            },
                                        },
                                        '& .MuiSlider-track': {
                                            backgroundColor: COLORS.yellowOrange,
                                        },
                                    }}
                                />
                            </Box>
                            <Typography variant="body2" align="right">{loanAmount}</Typography>

                            <Typography variant="h6" style={{ marginTop: '20px' }}>Loan Tenure (Days)</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body2">1</Typography>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: 'right' }}>
                                    <Typography variant="body2">90</Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{ paddingX: '30px', backgroundColor: COLORS.white, borderRadius: '40px  ' }}>
                                <Slider
                                    value={loanTenure}
                                    min={1}
                                    max={90}
                                    onChange={handleLoanTenureChange}
                                    valueLabelDisplay="auto"
                                    sx={{
                                        color: COLORS.yellowOrange,
                                        '& .MuiSlider-thumb': {
                                            backgroundColor: COLORS.black,
                                            width: 20,
                                            height: 20,
                                            borderRadius: 0,
                                            '&:hover, &.Mui-focusVisible': {
                                                boxShadow: 'inherit',
                                            },
                                        },
                                        '& .MuiSlider-track': {
                                            backgroundColor: COLORS.yellowOrange,
                                        },
                                    }}
                                />
                            </Box>
                            <Typography variant="body2" align="right">{loanTenure}</Typography>

                            <Typography variant="h6" style={{ marginTop: '20px' }}>Interest Rate</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body2">1.0%</Typography>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: 'right' }}>
                                    <Typography variant="body2">1.5%</Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{ paddingX: '30px', backgroundColor: COLORS.white, borderRadius: '40px  ' }}>
                                <Slider
                                    value={interestRate}
                                    min={1}
                                    max={1.5}
                                    step={0.1}
                                    onChange={handleInterestRateChange}
                                    valueLabelDisplay="auto"
                                    sx={{
                                        color: COLORS.yellowOrange,
                                        '& .MuiSlider-thumb': {
                                            backgroundColor: COLORS.black,
                                            width: 20,
                                            height: 20,
                                            borderRadius: 0,
                                            '&:hover, &.Mui-focusVisible': {
                                                boxShadow: 'inherit',
                                            },
                                        },
                                        '& .MuiSlider-track': {
                                            backgroundColor: COLORS.yellowOrange,
                                        },
                                    }}
                                />
                            </Box>
                            <Typography variant="body2" align="right">{interestRate}%</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '30px', textAlign: 'center', backgroundColor: COLORS.yellow, borderRadius: '40px', border: 1, borderColor: COLORS.darkBlue, display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h4" color={COLORS.darkBlue} fontWeight={'bold'}>Loan Amount</Typography>
                            <Box sx={{ marginTop: '20px', backgroundColor: COLORS.darkBlue, display: 'flex', justifyContent: 'center', alignSelf: 'center', width: '50%' }}>
                                <Typography variant="h4" color={COLORS.white} text>
                                    <strong>{loanAmount}</strong>
                                </Typography>
                            </Box>
                            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                <Grid item xs={6}>
                                    <Typography variant="h6">Loan Tenure</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6">{loanTenure} Days</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6">Total Amount</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6">
                                        <strong>₹{totalAmount.toFixed(2)}</strong>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginTop: '20px', padding: '10px 20px' }}
                                onClick={() => alert('Apply Now!')}
                                sx={{ backgroundColor: COLORS.darkBlue, width: '50%', alignSelf: 'center' }}
                            >
                                Apply Now
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default EMICalculator;
