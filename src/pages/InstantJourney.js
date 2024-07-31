import React, { useState, useEffect } from 'react';
import {
    TextField, Button, Select, MenuItem, InputLabel,
    FormControl, RadioGroup, FormControlLabel, Radio, Grid,
    Typography, Snackbar, Alert
} from '@mui/material';
import './InstantJourney.css';
import { Box, styled, Container, height } from '@mui/system';
import banner from '../assets/imgs/apply-banner.jpg';
import banner2 from '../assets/imgs/image_form.jpg';
import * as COLORS from '../assets/utils/Constants';
import axios from 'axios';
const baseUrl = "https://tech.girdharfin.cloud/";


const Banner = styled(Box)({
    marginTop: '100px',
    backgroundImage: `url(${banner})`,
    height: '400px'
})

const customTextFieldStyle = {
    borderColor: COLORS.yellowOrange,
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: COLORS.yellowOrange,
        },
        '&:hover fieldset': {
            borderColor: COLORS.yellowOrange,
        },
        '&.Mui-focused fieldset': {
            borderColor: COLORS.yellowOrange,
        },
    },
};

const customeButton = {
    marginTop: '30px',
    width: '100%',
    backgroundColor: COLORS.yellowOrange,
    borderRadius: '20px',
    height: '40px',
    ':hover': {
        backgroundColor: COLORS.darkBlue
    }
}

const customSelect = {
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS.yellowOrange,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS.yellowOrange,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS.yellowOrange,
    },
};

const InstantJourney = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formValues, setFormValues] = useState({
        mobileEmail: '',
        otp: '',
        fullName: '',
        gender: '',
        dob: '',
        email: '',
        kycPan: '',
        aadhaar: '',
        residence1: '',
        residence2: '',
        residence3: '',
        landmark: '',
        state: '',
        city: '',
        pincode: '',
        employmentType: '',
        employerName: '',
        monthlySalary: '',
        paymentMethod: '',
        lastSalaryAmount: '',
        lastSalaryDate: '',
        beneficiaryName: '',
        ifsc: '',
        bankName: '',
        accountType: '',
        accountNumber: '',
        confirmAccountNumber: '',
        documentType: '',
        password: '',
        loanAmount: '',
        loanDays: '',
        loanPurpose: ''
    });
    const [errors, setErrors] = useState({});

    const nextStep = () => {
        const newErrors = validateFields(currentStep);
        if (Object.keys(newErrors).length === 0) {
            setCurrentStep((prev) => prev + 1);
            setErrors({});
        } else {
            setErrors(newErrors);
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const validateFields = (step) => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        const aadhaarRegex = /^[2-9]{1}[0-9]{11}$/;
        const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
        const accountNumberRegex = /^[0-9]{9,18}$/;

        switch (step) {
            case 0:
                if (!formValues.mobileEmail) newErrors.mobileEmail = 'Mobile/Email ID is required.';
                break;
            case 1:
                if (!formValues.otp) newErrors.otp = 'OTP is required.';
                break;
            case 2:
                if (!formValues.fullName) newErrors.fullName = 'Full Name is required.';
                if (!formValues.gender) newErrors.gender = 'Gender is required.';
                if (!formValues.dob) newErrors.dob = 'Date of Birth is required.';
                if (!formValues.email || !emailRegex.test(formValues.email)) {
                    newErrors.email = 'Valid Email is required.';
                }
                break;
            case 3:
                if (!formValues.kycPan || !panRegex.test(formValues.kycPan)) {
                    newErrors.kycPan = 'Valid KYC PAN Number is required.';
                }
                if (!formValues.aadhaar || !aadhaarRegex.test(formValues.aadhaar)) {
                    newErrors.aadhaar = 'Valid Aadhaar Number is required.';
                }
                break;
            case 4:
                if (!formValues.residence1) newErrors.residence1 = 'Residence Line 1 is required.';
                if (!formValues.city) newErrors.city = 'City is required.';
                if (!formValues.state) newErrors.state = 'State is required.';
                if (!formValues.pincode) newErrors.pincode = 'Pincode is required.';
                break;
            case 5:
                if (!formValues.employmentType) newErrors.employmentType = 'Employment Type is required.';
                if (!formValues.employerName) newErrors.employerName = 'Employer Name is required.';
                if (!formValues.monthlySalary) newErrors.monthlySalary = 'Monthly Salary is required.';
                if (!formValues.paymentMethod) newErrors.paymentMethod = 'Payment Method is required.';
                if (!formValues.lastSalaryAmount) newErrors.lastSalaryAmount = 'Last Received Salary Amount is required.';
                if (!formValues.lastSalaryDate) newErrors.lastSalaryDate = 'Last Received Salary Date is required.';
                break;
            case 6:
                if (!formValues.beneficiaryName) newErrors.beneficiaryName = 'Beneficiary Name is required.';
                if (!formValues.ifsc || !ifscRegex.test(formValues.ifsc)) {
                    newErrors.ifsc = 'Valid IFSC is required.';
                }
                if (!formValues.bankName) newErrors.bankName = 'Bank Name is required.';
                if (!formValues.accountType) newErrors.accountType = 'Account Type is required.';
                if (!formValues.accountNumber || !accountNumberRegex.test(formValues.accountNumber)) {
                    newErrors.accountNumber = 'Valid Account Number is required.';
                }
                if (formValues.accountNumber !== formValues.confirmAccountNumber) {
                    newErrors.confirmAccountNumber = 'Account Numbers do not match.';
                }
                break;
            case 7:
                if (!formValues.documentType) newErrors.documentType = 'Document Type is required.';
                if (!formValues.password) newErrors.password = 'Password is required.';
                break;
            case 8:
                if (!formValues.loanAmount) newErrors.loanAmount = 'Desired Loan Amount is required.';
                if (!formValues.loanDays) newErrors.loanDays = 'Days are required.';
                if (!formValues.loanPurpose) newErrors.loanPurpose = 'Purpose of Loan is required.';
                break;
            default:
                break;
        }
        return newErrors;
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <EnterMobileEmail nextStep={nextStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 1:
                return <EnterOTP nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 2:
                return <PersonalDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 3:
                return <KYCDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 4:
                return <ResidenceDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 5:
                return <EmployerDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 6:
                return <BankDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 7:
                return <UploadDocuments nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 8:
                return <LoanDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            default:
                return <EnterMobileEmail nextStep={nextStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
        }
    };

    return (
        <>
            <Banner />
            <Box sx={{ backgroundColor: COLORS.white, paddingY: 4 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={6}>
                            <img src={banner2} width="100%" height="auto" className="img-responsive" alt="Vision & Mission" />
                        </Grid>
                        <Grid item md={6}>
                            <form>
                                {renderStep()}
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

const EnterMobileEmail = ({ nextStep, formValues, setFormValues, errors }) => (
    <div>
        <h3 style={{ textAlign: 'center' }}>Enter Your Registered Mobile/Email Id Number</h3>
        <TextField
            label="Enter Mobile/Email Id Number"
            fullWidth
            variant="outlined"
            value={formValues.mobileEmail}
            onChange={(e) => setFormValues({ ...formValues, mobileEmail: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.mobileEmail}
            helperText={errors.mobileEmail}
        />
        <Typography sx={{ marginTop: '20px', fontSize: '12px', textAlign: 'center', color: COLORS.darkBlue }}>
            By clicking on SUBMIT, I authorize FUNDSMAMA & its representatives to Call, SMS or communicate via WhatsApp regarding my application. This consent overrides any registration for DNC / NDNC.
            <br />I confirm I am in India, I am a major and a resident of India.
            <br />  And I have read and I accept site Privacy Policy. <a className="link" href='/t&c'>Terms of Use & Privacy Policy</a>
        </Typography>
        <Button variant="contained" onClick={nextStep} sx={customeButton}>Get OTP</Button>
    </div>
);

const EnterOTP = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {
    const [timer, setTimer] = useState(10);
    const [canResend, setCanResend] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    useEffect(() => {
        let interval = null;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleResendOTP = () => {
        setSnackbarMessage("OTP sent successfully!");
        setSnackbarOpen(true);
        setTimer(10);
        setCanResend(false);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <div>
            <h3 style={{ marginBottom: '20px' }}>Enter OTP</h3>
            <TextField
                label="OTP Here"
                fullWidth
                variant="outlined"
                value={formValues.otp}
                onChange={(e) => setFormValues({ ...formValues, otp: e.target.value })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
                error={!!errors.otp}
                helperText={errors.otp}
            />
            <Button variant="contained" sx={customeButton} onClick={nextStep}>Submit</Button>
            <Button
                variant="contained"
                sx={customeButton}
                onClick={handleResendOTP}
                disabled={!canResend}
            >
                Resend OTP {timer > 0 ? `(${timer})` : ''}
            </Button>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

const get18YearsAgoDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date.toISOString().split('T')[0];
};

const PersonalDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => (
    <div>
        <h3>Personal Details</h3>
        <TextField
            label="Full Name"
            fullWidth
            variant="outlined"
            value={formValues.fullName}
            onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.fullName}
            helperText={errors.fullName}
        />
        <FormControl fullWidth error={!!errors.gender} sx={{ marginY: '10px' }}>
            <InputLabel>Gender</InputLabel>
            <Select
                value={formValues.gender}
                onChange={(e) => setFormValues({ ...formValues, gender: e.target.value })}
                sx={customSelect}
            >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
                <MenuItem value="TRANSGENDER">Transgender</MenuItem>
            </Select>
            {errors.gender && <Typography variant="caption" color="error">{errors.gender}</Typography>}
        </FormControl>
        <TextField
            label="DOB"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={formValues.dob}
            onChange={(e) => setFormValues({ ...formValues, dob: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.dob}
            helperText={errors.dob}
            inputProps={{ max: get18YearsAgoDate() }}
        />
        <TextField
            label="Email"
            fullWidth
            variant="outlined"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.email}
            helperText={errors.email}
        />
        <Button variant="contained" sx={customeButton} onClick={nextStep}>Continue</Button>
        <Button variant="contained" sx={customeButton} onClick={prevStep}>Back</Button>
    </div>
);

const KYCDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => (
    <div>
        <h3>KYC Details</h3>
        <TextField
            label="KYC PAN Number"
            fullWidth
            variant="outlined"
            value={formValues.kycPan}
            onChange={(e) => setFormValues({ ...formValues, kycPan: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.kycPan}
            helperText={errors.kycPan}
        />
        <TextField
            label="Aadhaar Number"
            fullWidth
            variant="outlined"
            value={formValues.aadhaar}
            onChange={(e) => setFormValues({ ...formValues, aadhaar: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.aadhaar}
            helperText={errors.aadhaar}
        />
        <Button variant="contained" onClick={nextStep} sx={customeButton}>Continue</Button>
        <Button variant="contained" onClick={prevStep} sx={customeButton}>Back</Button>
    </div>
);

const ResidenceDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {
    const [states, setStates] = useState([]);
    const [city, setCity] = useState([]);
    const [pincode, setPincode] = useState([]);

    const getStates = async () => {
        try {
            const { data } = await axios.post(`https://tech.girdharfin.cloud/api/v1/get_state/`, {
                headers: {
                    'Auth': 'ZnVuZHNtYW1hMjAyMzA0MTk=',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                withCredentials: true,
            });
            setStates(data.state_list);
        } catch (e) {
            alert("Some error occurred");
            console.log(e);
        }
    }

    useEffect(() => {
        getStates();
    }, [])

    return (
        <div>
            <h3>Residence Details</h3>
            <TextField
                label="Residence Line 1"
                fullWidth
                variant="outlined"
                value={formValues.residence1}
                onChange={(e) => setFormValues({ ...formValues, residence1: e.target.value })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
                error={!!errors.residence1}
                helperText={errors.residence1}
            />
            <TextField
                label="Residence Line 2"
                fullWidth
                variant="outlined"
                value={formValues.residence2}
                onChange={(e) => setFormValues({ ...formValues, residence2: e.target.value })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
            />
            <TextField
                label="Residence Line 3"
                fullWidth
                variant="outlined"
                value={formValues.residence3}
                onChange={(e) => setFormValues({ ...formValues, residence3: e.target.value })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
            />
            <TextField
                label="Landmark"
                fullWidth
                variant="outlined"
                value={formValues.landmark}
                onChange={(e) => setFormValues({ ...formValues, landmark: e.target.value })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
            />
            <FormControl fullWidth error={!!errors.state} sx={{ marginY: '10px' }}>
                <InputLabel>State</InputLabel>
                <Select
                    value={formValues.state}
                    onChange={(e) => setFormValues({ ...formValues, state: e.target.value })}
                    sx={customSelect}
                >
                    <MenuItem value="">SELECT</MenuItem>
                    {
                        states.map((state) => (
                            <MenuItem value={state.m_state_id}>{state.m_state_item}</MenuItem>
                        ))
                    }
                </Select>
                {errors.state && <Typography variant="caption" color="error">{errors.state}</Typography>}
            </FormControl>
            <FormControl fullWidth error={!!errors.city} sx={{ marginY: '10px' }}>
                <InputLabel>City</InputLabel>
                <Select
                    value={formValues.city}
                    onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
                    sx={customSelect}
                >
                    <MenuItem value="">SELECT</MenuItem>
                    <MenuItem value="1">SELECT1</MenuItem>
                    {/* Add city options */}
                </Select>
                {errors.city && <Typography variant="caption" color="error">{errors.city}</Typography>}
            </FormControl>
            <FormControl fullWidth error={!!errors.pincode} sx={{ marginY: '10px' }}>
                <InputLabel>Pincode</InputLabel>
                <Select
                    value={formValues.pincode}
                    onChange={(e) => setFormValues({ ...formValues, pincode: e.target.value })}
                    sx={customSelect}
                >
                    <MenuItem value="">SELECT</MenuItem>
                    <MenuItem value="1">SELECT1</MenuItem>
                    {/* Add pincode options */}
                </Select>
                {errors.pincode && <Typography variant="caption" color="error">{errors.pincode}</Typography>}
            </FormControl>
            <Button variant="contained" onClick={nextStep} sx={customeButton}>Continue</Button>
            <Button variant="contained" onClick={prevStep} sx={customeButton}>Back</Button>
        </div>
    )
};

const EmployerDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => (
    <div>
        <h3>Employment Details</h3>
        <FormControl fullWidth error={!!errors.employmentType} sx={{ marginY: '10px' }}>
            <InputLabel>Employment Type</InputLabel>
            <Select
                value={formValues.employmentType}
                onChange={(e) => setFormValues({ ...formValues, employmentType: e.target.value })}
            >
                <MenuItem value="1">SELECT</MenuItem>
                {/* Add employment type options */}
            </Select>
            {errors.employmentType && <Typography variant="caption" color="error">{errors.employmentType}</Typography>}
        </FormControl>
        <TextField
            label="Employer Name"
            fullWidth
            variant="outlined"
            value={formValues.employerName}
            onChange={(e) => setFormValues({ ...formValues, employerName: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.employerName}
            helperText={errors.employerName}
        />
        <RadioGroup row sx={{ marginY: '10px' }}>
            <FormControlLabel
                value="1"
                control={<Radio />}
                label="Salaried"
                onChange={(e) => setFormValues({ ...formValues, employmentType: e.target.value })}
            />
            <FormControlLabel
                value="2"
                control={<Radio />}
                label="Self Employed"
                onChange={(e) => setFormValues({ ...formValues, employmentType: e.target.value })}
            />
        </RadioGroup>
        <TextField
            label="Monthly Salary"
            fullWidth
            variant="outlined"
            value={formValues.monthlySalary}
            onChange={(e) => setFormValues({ ...formValues, monthlySalary: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.monthlySalary}
            helperText={errors.monthlySalary}
        />
        <FormControl fullWidth error={!!errors.paymentMethod} sx={{ marginY: '10px' }}>
            <InputLabel>Payment Method</InputLabel>
            <Select
                value={formValues.paymentMethod}
                onChange={(e) => setFormValues({ ...formValues, paymentMethod: e.target.value })}
            >
                <MenuItem value="1">SELECT</MenuItem>
                {/* Add payment method options */}
            </Select>
            {errors.paymentMethod && <Typography variant="caption" color="error">{errors.paymentMethod}</Typography>}
        </FormControl>
        <TextField
            label="Last Received Salary Amount"
            fullWidth
            variant="outlined"
            value={formValues.lastSalaryAmount}
            onChange={(e) => setFormValues({ ...formValues, lastSalaryAmount: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.lastSalaryAmount}
            helperText={errors.lastSalaryAmount}
        />
        <TextField
            label="Last Received Salary Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={formValues.lastSalaryDate}
            onChange={(e) => setFormValues({ ...formValues, lastSalaryDate: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.lastSalaryDate}
            helperText={errors.lastSalaryDate}
        />
        <Button variant="contained" sx={customeButton} onClick={nextStep}>Continue</Button>
        <Button variant="contained" sx={customeButton} onClick={prevStep}>Back</Button>
    </div>
);

const BankDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => (
    <div>
        <h3>Bank Details</h3>
        <TextField
            label="Beneficiary Name"
            fullWidth
            variant="outlined"
            value={formValues.beneficiaryName}
            onChange={(e) => setFormValues({ ...formValues, beneficiaryName: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.beneficiaryName}
            helperText={errors.beneficiaryName}
        />
        <TextField
            label="IFSC"
            fullWidth
            variant="outlined"
            value={formValues.ifsc}
            onChange={(e) => setFormValues({ ...formValues, ifsc: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.ifsc}
            helperText={errors.ifsc}
        />
        <TextField
            label="Bank Name"
            fullWidth
            variant="outlined"
            value={formValues.bankName}
            onChange={(e) => setFormValues({ ...formValues, bankName: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.bankName}
            helperText={errors.bankName}
        />
        <FormControl fullWidth error={!!errors.accountType} sx={[customSelect, { marginY: '10px' }]}>
            <InputLabel>Account Type</InputLabel>
            <Select
                value={formValues.accountType}
                onChange={(e) => setFormValues({ ...formValues, accountType: e.target.value })}
            >
                <MenuItem value="1">SELECT</MenuItem>
                {/* Add account type options */}
            </Select>
            {errors.accountType && <Typography variant="caption" color="error">{errors.accountType}</Typography>}
        </FormControl>
        <TextField
            label="Account Number"
            fullWidth
            variant="outlined"
            value={formValues.accountNumber}
            onChange={(e) => setFormValues({ ...formValues, accountNumber: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.accountNumber}
            helperText={errors.accountNumber}
        />
        <TextField
            label="Confirm Account Number"
            fullWidth
            variant="outlined"
            value={formValues.confirmAccountNumber}
            onChange={(e) => setFormValues({ ...formValues, confirmAccountNumber: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.confirmAccountNumber}
            helperText={errors.confirmAccountNumber}
        />
        <Button variant="contained" sx={customeButton} onClick={nextStep}>Continue</Button>
        <Button variant="contained" sx={customeButton} onClick={prevStep}>Back</Button>
    </div>
);

const UploadDocuments = ({ nextStep, prevStep, formValues, setFormValues, errors }) => (
    <div>
        <h3>Upload Documents</h3>
        <FormControl fullWidth error={!!errors.documentType}>
            <InputLabel>Document Type</InputLabel>
            <Select
                value={formValues.documentType}
                onChange={(e) => setFormValues({ ...formValues, documentType: e.target.value })}
            >
                <MenuItem value="">SELECT</MenuItem>
                <MenuItem value="16">Salary slip -1</MenuItem>
                <MenuItem value="17">Salary slip -2</MenuItem>
                <MenuItem value="1">Aadhar - Front</MenuItem>
                <MenuItem value="2">Aadhar - Rear</MenuItem>
                <MenuItem value="4">PAN</MenuItem>
            </Select>
            {errors.documentType && <Typography variant="caption" color="error">{errors.documentType}</Typography>}
        </FormControl>
        {/* <TextField
            label="Select a Document"
            fullWidth
            type='file'
            variant="outlined"
            value={formValues.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.password}
            helperText={errors.password}
        /> */}
        <TextField
            label="Password"
            fullWidth
            type="password"
            variant="outlined"
            value={formValues.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.password}
            helperText={errors.password}
        />
        <Button variant="contained" sx={customeButton} onClick={nextStep}>Continue</Button>
        <Button variant="contained" sx={customeButton} onClick={prevStep}>Back</Button>
    </div>
);

const LoanDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => (
    <div>
        <h3>Loan Details</h3>
        <TextField
            label="Desired Loan Amount"
            fullWidth
            variant="outlined"
            value={formValues.loanAmount}
            onChange={(e) => setFormValues({ ...formValues, loanAmount: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.loanAmount}
            helperText={errors.loanAmount}
        />
        <TextField
            label="Loan Duration (Days)"
            fullWidth
            variant="outlined"
            value={formValues.loanDays}
            onChange={(e) => setFormValues({ ...formValues, loanDays: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.loanDays}
            helperText={errors.loanDays}
        />
        <TextField
            label="Purpose of Loan"
            fullWidth
            variant="outlined"
            value={formValues.loanPurpose}
            onChange={(e) => setFormValues({ ...formValues, loanPurpose: e.target.value })}
            sx={[customTextFieldStyle, { marginY: '10px' }]}
            error={!!errors.loanPurpose}
            helperText={errors.loanPurpose}
        />
        <Button variant="contained" onClick={nextStep} sx={customeButton}>Submit</Button>
        <Button variant="contained" onClick={prevStep} sx={customeButton}>Back</Button>
    </div>
);

export default InstantJourney;
