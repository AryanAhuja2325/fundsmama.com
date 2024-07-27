import React, { useState, useEffect } from 'react';
import {
    Container, Grid, Typography, TextField, Button, makeStyles,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#e06714',
        padding: theme.spacing(7, 0),
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    content: {
        padding: theme.spacing(6, 0, 12),
        position: 'relative',
    },
    formControl: {
        backgroundColor: '#fff',
    },
    submitButton: {
        backgroundColor: '#f88b37',
        margin: theme.spacing(2, 0),
    },
    otpForm: {
        display: 'none',
    },
}));

const RepayLoan = () => {
    const classes = useStyles();
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [formAction, setFormAction] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setShowOtpForm(true);
    };

    const handleRepayButtonClick = () => {
        setFormAction('loan_repay.php');
    };

    const handleOtpButtonClick = () => {
        setFormAction('otp_verify.php');
    };

    useEffect(() => {
        // Remove 'active' class from all nav items and add it to 'repay'
        const navItems = document.querySelectorAll(".nav li");
        navItems.forEach(item => item.classList.remove("active"));
        document.getElementById('repay')?.classList.add('active');
    }, []);

    const handlePayNowViewClick = () => {
        document.getElementById("phonepay").style.display = "block";
        document.getElementById("ccavenue").style.display = "block";
    };

    const handlePhonePayClick = () => {
        setFormAction('phonePayRequestHandler.php');
    };

    const handleCcAvenueClick = () => {
        setFormAction('ccAvenue.php');
    };

    return (
        <>
            <div className={classes.header}>
                Repay your loan and interest amount through the following bank or QR Code
            </div>

            <Container id="apply">
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <Typography variant="h6">
                            Repay your loan and interest amount through the following bank or QR Code
                        </Typography>
                    </Grid>
                    <Grid item md={1}>
                        &nbsp;
                    </Grid>
                    <Grid item md={4}>
                        <div>
                            <Typography variant="h6">Repay Loan</Typography>
                            <hr />
                        </div>

                        <form id="formData" autoComplete="off" action={formAction} method="post" encType="multipart/form-data" acceptCharset="utf-8">
                            <input type="hidden" name="gpsLocation" id="gpsLocation" />

                            <TextField
                                label="Lender"
                                value="FUNDS MAMA"
                                className={classes.formControl}
                                fullWidth
                                disabled
                                margin="normal"
                            />

                            <TextField
                                label="Loan/CIF Number"
                                name="loanid"
                                id="loanid"
                                className={classes.formControl}
                                placeholder="Ex: DMI0001234567"
                                fullWidth
                                margin="normal"
                            />

                            <Button
                                type="submit"
                                id="repaybutton"
                                variant="contained"
                                color="primary"
                                className={classes.submitButton}
                                onClick={handleFormSubmit}
                            >
                                Get Payable Amount
                            </Button>
                        </form>

                        {showOtpForm && (
                            <form id="formDataotp" autoComplete="off" action="otp_verify.php" method="post" acceptCharset="utf-8" className={classes.otpForm}>
                                <TextField
                                    label="Confirmation code"
                                    name="otpval"
                                    id="otpval"
                                    className={classes.formControl}
                                    placeholder="Ex: 123456"
                                    fullWidth
                                    margin="normal"
                                />
                                <input type="hidden" name="leadid" id="leadid" className={classes.formControl} />

                                <Button
                                    type="submit"
                                    id="otpbutton"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submitButton}
                                    onClick={handleOtpButtonClick}
                                >
                                    Verify OTP
                                </Button>
                            </form>
                        )}
                    </Grid>
                </Grid>
            </Container>

            <div className={classes.content}>
                <Container>
                    <Grid container spacing={3}>
                        <form id="formDatapay" autoComplete="off" action={formAction} method="post" acceptCharset="utf-8" className={classes.otpForm}>
                            <Grid item md={12}>
                                <Typography variant="h6">Customer Id</Typography>
                                <TextField
                                    name=""
                                    id="custidd"
                                    className={classes.formControl}
                                    fullWidth
                                    disabled
                                    margin="normal"
                                />
                                <Typography variant="h6">Loan No</Typography>
                                <TextField
                                    name=""
                                    id="lonidd"
                                    className={classes.formControl}
                                    fullWidth
                                    disabled
                                    margin="normal"
                                />
                                <Typography variant="h6">First Name</Typography>
                                <TextField
                                    name=""
                                    id="firstnamm"
                                    className={classes.formControl}
                                    fullWidth
                                    disabled
                                    margin="normal"
                                />
                                <Typography variant="h6">Loan Recommended</Typography>
                                <TextField
                                    name=""
                                    id="loanrecommendd"
                                    className={classes.formControl}
                                    fullWidth
                                    disabled
                                    margin="normal"
                                />
                                <Typography variant="h6">Disbursal Date</Typography>
                                <TextField
                                    name=""
                                    id="disdtt"
                                    className={classes.formControl}
                                    fullWidth
                                    disabled
                                    margin="normal"
                                />
                                <Typography variant="h6">ROI</Typography>
                                <TextField
                                    name=""
                                    id="loanroii"
                                    className={classes.formControl}
                                    fullWidth
                                    disabled
                                    margin="normal"
                                />
                                <Typography variant="h6">Repayment Amount</Typography>
                                <TextField
                                    name=""
                                    id="repayamtt"
                                    className={classes.formControl}
                                    fullWidth
                                    disabled
                                    margin="normal"
                                />
                                <Typography variant="h6">Repayment Date</Typography>
                                <TextField
                                    name=""
                                    id="repaydtt"
                                    className={classes.formControl}
                                    fullWidth
                                    disabled
                                    margin="normal"
                                />
                                <Typography variant="h6">Loan Outstanding Amount</Typography>
                                <TextField
                                    name=""
                                    id="outstandamtt"
                                    className={classes.formControl}
                                    fullWidth
                                    disabled
                                    margin="normal"
                                />
                                <Typography variant="h6">Pay Amount</Typography>
                                <TextField
                                    name="payamt"
                                    id="payamt"
                                    className={classes.formControl}
                                    fullWidth
                                    margin="normal"
                                    type="number"
                                    inputProps={{ min: 1 }}
                                />
                                <input type="hidden" name="leadid" id="leadid2" className={classes.formControl} />
                                <input type="hidden" name="custid" id="custid" className={classes.formControl} />
                                <input type="hidden" name="lonid" id="lonid" className={classes.formControl} />
                                <input type="hidden" name="firstnam" id="firstnam" className={classes.formControl} />
                                <input type="hidden" name="loanrecommend" id="loanrecommend" className={classes.formControl} />
                                <input type="hidden" name="disdt" id="disdt" className={classes.formControl} />
                                <input type="hidden" name="loanroi" id="loanroi" className={classes.formControl} />
                                <input type="hidden" name="repayamt" id="repayamt" className={classes.formControl} />
                                <input type="hidden" name="repaydt" id="repaydt" className={classes.formControl} />
                                <input type="hidden" name="outstandamt" id="outstandamt" className={classes.formControl} />
                                <input type="hidden" name="sanction_name" id="sanction_name" className={classes.formControl} />
                                <input type="hidden" name="collection_executive_name" id="collection_executive_name" className={classes.formControl} />

                                <Button
                                    type="submit"
                                    id="ccavenue"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submitButton}
                                    onClick={handleCcAvenueClick}
                                >
                                    Pay
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default RepayLoan;
