import React, { useState, useEffect } from 'react';
import {
    TextField, Button, Select, MenuItem, InputLabel,
    FormControl, RadioGroup, FormControlLabel, Radio, Grid,
    Typography, Snackbar, Alert, FormLabel, Slider
} from '@mui/material';
import './InstantJourney.css';
import { Box, styled, Container, height, handleBreakpoints } from '@mui/system';
import banner from '../assets/imgs/apply-banner.jpg';
import banner2 from '../assets/imgs/image_form.jpg';
import * as COLORS from '../assets/utils/Constants';
import axios from 'axios';
import AsyncSelect from 'react-select/async';
import { toast } from 'react-toastify';
const baseUrl = "https://go.fundsmama.app/";

const customSelect1 = {
    control: (base) => ({
        ...base,
        minHeight: '56px',
    }),
    menu: (base) => ({
        ...base,
        zIndex: 9999
    })
};

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
        user_type: '',
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
        bankCode: '',
        accountType: '',
        accountNumber: '',
        confirmAccountNumber: '',
        documentType: '',
        document: '',
        password: '',
        loanAmount: '',
        loanDays: 30,
        loanPurpose: '',
        journey_id: ''
    });
    const [errors, setErrors] = useState({});

    const nextStep = (step = 1) => {
        const newErrors = validateFields(currentStep);
        if (Object.keys(newErrors).length === 0) {
            setCurrentStep((prev) => prev + step);
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
                if (!formValues.loanAmount) newErrors.loanAmount = 'Desired Loan Amount is required.';
                if (!formValues.loanDays) newErrors.loanDays = 'Days are required.';
                if (!formValues.loanPurpose) newErrors.loanPurpose = 'Purpose of Loan is required.';
                break;
            case 5:
                if (!formValues.residence1) newErrors.residence1 = 'Residence Line 1 is required.';
                if (!formValues.city) newErrors.city = 'City is required.';
                if (!formValues.state) newErrors.state = 'State is required.';
                if (!formValues.pincode) newErrors.pincode = 'Pincode is required.';
                break;
            case 6:
                if (!formValues.employmentType) newErrors.employmentType = 'Employment Type is required.';
                if (!formValues.employerName) newErrors.employerName = 'Employer Name is required.';
                if (!formValues.monthlySalary) newErrors.monthlySalary = 'Monthly Salary is required.';
                if (!formValues.paymentMethod) newErrors.paymentMethod = 'Payment Method is required.';
                if (!formValues.lastSalaryAmount) newErrors.lastSalaryAmount = 'Last Received Salary Amount is required.';
                if (!formValues.lastSalaryDate) newErrors.lastSalaryDate = 'Last Received Salary Date is required.';
                break;
            case 7:
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
            case 8:
                if (!formValues.documentType) newErrors.documentType = 'Document Type is required.';
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
                return <LoanDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 5:
                return <ResidenceDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 6:
                return <EmployerDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 7:
                return <BankDetails nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
            case 8:
                return <UploadDocuments nextStep={nextStep} prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} errors={errors} />;
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

const EnterMobileEmail = ({ nextStep, formValues, setFormValues, errors }) => {
    const submit = async () => {
        const loginInput = formValues.mobileEmail.trim();
        let inputData = {};

        if (isValidEmail(loginInput)) {
            if (loginInput === "") {
                toast("Please enter valid email")
                return;
            }
            inputData = { email: loginInput };
        } else if (isValidMobile(loginInput)) {
            if (loginInput === "" || loginInput.length !== 10) {
                toast("Please enter valid mobile number")
                return;
            }
            inputData = { mobile: parseInt(loginInput) };
        } else {
            toast("Please enter valid mobile number/email")
            return;
        }

        try {
            const response = await axios.post(baseUrl + "api/v1/registration", inputData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.status === 1) {
                toast.success("OTP sent successfully!");
                setFormValues({ ...formValues, user_type: response.data.user_type, mobileEmail: response.data.mobile });
                nextStep();
            } else {
                toast.error("Some error occured")
            }
        } catch (error) {
            toast.error("Some error occured")
        }
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidMobile = (mobile) => /^\d{10}$/.test(mobile);

    return (
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
                <br />And I have read and I accept site Privacy Policy. <a className="link" href='/t&c'>Terms of Use & Privacy Policy</a>
            </Typography>
            <Button variant="contained" onClick={submit} sx={customeButton}>Get OTP</Button>
        </div>
    );
};

const EnterOTP = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {
    const [timer, setTimer] = useState(10);
    const [canResend, setCanResend] = useState(false);

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

    const handleResendOTP = async () => {
        const loginInput = formValues.mobileEmail.trim();
        let inputData = {};

        if (isValidEmail(loginInput)) {
            inputData = { email: loginInput };
        } else if (isValidMobile(loginInput)) {
            inputData = { mobile: parseInt(loginInput) };
        } else {
            toast.error("To proceed, please use a mobile number for logging in.");
            return;
        }

        try {
            const response = await axios.post(baseUrl + "api/v1/resend-otp", inputData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            if (response.data.status === 1) {
                toast.success("OTP sent successfully!");
                setTimer(10);
                setCanResend(false);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error during resend OTP:", error);
            toast.error("Failed to resend OTP. Please try again.");
        }
    };

    const handleSubmit = async () => {
        const otp = formValues.otp;

        if (!otp) {
            toast.error("Please enter the valid OTP");
            return;
        }

        const loginInput = formValues.mobileEmail;
        let inputData = {};

        if (isValidEmail(loginInput)) {
            inputData = { email: loginInput, otp: parseInt(otp, 10) };
        } else if (isValidMobile(loginInput)) {
            inputData = { mobile: parseInt(loginInput), otp: parseInt(otp, 10), user_type: formValues.user_type };
        } else {
            toast.error("To proceed, please use a valid mobile number.");
            return;
        }
        console.log(inputData)
        try {
            const response = await axios.post(`${baseUrl}api/v1/otp-verify`, inputData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.status === 1) {
                toast.success("OTP verified successfully!");
                setFormValues({ ...formValues, journey_id: response.data.journey_id, lead_id: response.data.lead_id, mobile: response.data.mobile, email: response.data.email })
                if (response.data.user_type === 2) {
                    nextStep(2);
                } else {
                    nextStep();
                }
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error during OTP verification:", error);
            toast.error("Failed to verify OTP. Please try again.");
        }
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidMobile = (mobile) => /^\d{10}$/.test(mobile);

    return (
        <div>
            <h3 style={{ marginBottom: '20px' }}>Enter OTP</h3>
            <TextField
                label="OTP Here"
                fullWidth
                type='number'
                variant="outlined"
                value={formValues.otp}
                onChange={(e) => setFormValues({ ...formValues, otp: parseInt(e.target.value) })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
                error={!!errors.otp}
                helperText={errors.otp}
            />
            <Button variant="contained" sx={customeButton} onClick={handleSubmit}>Submit</Button>
            <Button
                variant="contained"
                sx={customeButton}
                onClick={handleResendOTP}
                disabled={!canResend}
            >
                Resend OTP {timer > 0 ? `(${timer})` : ''}
            </Button>
        </div>
    );
};

const get18YearsAgoDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 21);
    return date.toISOString().split('T')[0];
};

const PersonalDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${baseUrl}api/v1/save-personal-details`, {
                journey_id: formValues.journey_id,
                user_type: formValues.user_type,
                email: formValues.email,
                full_name: formValues.fullName,
                gender: formValues.gender,
                dob: formValues.dob,
                mobile: parseInt(formValues.mobile)
            });
            console.log(response)
            if (response.data.status === 1) {
                if (response.data.user_type === 2) {
                    nextStep(2);
                } else {
                    nextStep();
                }
                toast.success("Personal details saved successfully");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("An error occurred during form submission. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
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
            <FormControl fullWidth error={!!errors.gender} sx={[customSelect, { marginY: '10px' }]}>
                <InputLabel>Gender</InputLabel>
                <Select
                    value={formValues.gender}
                    onChange={(e) => setFormValues({ ...formValues, gender: e.target.value })}
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
            <TextField
                label="Mobile"
                fullWidth
                type='number'
                variant="outlined"
                value={formValues.mobile}
                onChange={(e) => setFormValues({ ...formValues, mobile: parseInt(e.target.value) })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
                error={!!errors.mobile}
                helperText={errors.mobile}
            />
            <Button variant="contained" sx={customeButton} onClick={handleSubmit} disabled={loading}>
                {loading ? 'Submitting...' : 'Continue'}
            </Button>
            <Button variant="contained" sx={customeButton} onClick={prevStep}>Back</Button>
        </div>
    );
};

const KYCDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {
    const [loading, setLoading] = useState(false);
    const handleKYCSubmit = async () => {
        if (!formValues.kycPan || !formValues.aadhaar) {
            toast.error("Please enter valid KYC details");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${baseUrl}api/v1/save-kyc-details`, {
                journey_id: parseInt(formValues.journey_id),
                pancard: formValues.kycPan,
                aadhaar_no: parseInt(formValues.aadhaar)
            }, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response)
            if (response.data.status === 1) {
                setFormValues({
                    ...formValues,
                    lead_id: response.data.lead_id,
                });
                nextStep();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("An error occurred during form submission. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
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
                onChange={(e) => setFormValues({ ...formValues, aadhaar: parseInt(e.target.value) })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
                error={!!errors.aadhaar}
                helperText={errors.aadhaar}
            />
            <Button variant="contained" onClick={handleKYCSubmit} sx={customeButton} disabled={loading}>
                {loading ? 'Submitting...' : 'Continue'}
            </Button>
            <Button variant="contained" onClick={prevStep} sx={customeButton} >
                Back
            </Button>
        </div>
    );
};

const ResidenceDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {
    const [states, setStates] = useState([]);
    const [city, setCity] = useState([]);
    const [pincode, setPincode] = useState([]);
    const getStates = async () => {
        try {
            const response = await axios.get(`${baseUrl}api/v1/get-state-list`);
            setStates(response.data.state_list);
        } catch (e) {
        }
    };

    const getCities = async () => {
        try {
            const response = await axios.get(`${baseUrl}api/v1/get-city-list/${formValues.state}`);
            setCity(response.data.city_list);
        } catch (e) {
        }
    }

    const getPincodes = async () => {
        try {
            const response = await axios.get(`${baseUrl}api/v1/get-pincode-list/${formValues.city}`);
            setPincode(response.data.pincode_list);
        } catch (e) {
        }
    }

    useEffect(() => {
        getStates();
    }, []);

    useEffect(() => {
        getCities();
    }, [formValues.state]);

    useEffect(() => {
        getPincodes();
    }, [formValues.city]);

    const handleSubmit = async () => {
        const {
            residence1,
            residence2,
            residence3,
            landmark,
            state,
            city,
            pincode,
            journey_id
        } = formValues;

        try {
            const response = await axios.post(`${baseUrl}api/v1/save-residence-data`, {
                journey_id: parseInt(journey_id),
                residence_line1: residence1,
                residence_line2: residence2,
                residence_line3: residence3,
                residence_landmark: landmark,
                residence_city: parseInt(city),
                residence_state: parseInt(state),
                residence_pincode: parseInt(pincode)
            });
            if (response.status === 200) {
                toast.success("Residance details saved succeessfully")
                nextStep();
            } else {
                toast.error("Residence details not saved. Please try again.");
            }
        } catch (error) {
            console.error("Error saving residence details:", error);
            toast.error("Error: Failed to save residence details. Please try again.");
        }
    };

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
                            <MenuItem key={state.m_state_id} value={state.m_state_id}>
                                {state.m_state_name}
                            </MenuItem>
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
                    {city && city.map((city) => (
                        <MenuItem key={city.m_city_id} value={city.m_city_id}>
                            {city.m_city_name}
                        </MenuItem>
                    ))}
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
                    {pincode && pincode.map((pincode) => (
                        <MenuItem key={pincode.m_pincode_value} value={pincode.m_pincode_value}>
                            {pincode.m_pincode_value}
                        </MenuItem>
                    ))}
                </Select>
                {errors.pincode && <Typography variant="caption" color="error">{errors.pincode}</Typography>}
            </FormControl>
            <Button variant="contained" onClick={handleSubmit} sx={customeButton}>Continue</Button>
            <Button variant="contained" onClick={prevStep} sx={customeButton}>Back</Button>
        </div>
    )
};

const EmployerDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {
    const loadOptions = async (inputValue) => {
        if (inputValue.length < 2) {
            return [];
        }

        try {
            const response = await axios.post(`${baseUrl}api/v1/get-employment-list`, JSON.stringify({ company_name: inputValue }), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data.company_list.map(company => ({
                label: company.company_name,
                value: company.company_name,
            }));
        } catch (error) {
            console.error('Error fetching employer names:', error);
            return [];
        }
    };

    const handleSubmit = async () => {
        const {
            employerName,
            employmentType,
            monthlySalary,
            paymentMethod,
            lastSalaryAmount,
            lastSalaryDate,
            journey_id,
        } = formValues;

        const requestData = {
            journey_id: parseInt(journey_id),
            employer_name: employerName,
            employment_master_id: 1,
            emp_monthly_income: parseInt(monthlySalary),
            emp_type: employmentType,
            emp_payment_mode: paymentMethod,
            last_salary_amount: parseInt(lastSalaryAmount),
            last_salary_date: lastSalaryDate,
        };

        let isValid = true;
        let errorMessage = '';

        if (!employerName) {
            errorMessage += "Employer name is required.\n";
            isValid = false;
        }
        if (isNaN(monthlySalary) || parseInt(monthlySalary) <= 0) {
            errorMessage += "Valid monthly salary is required.\n";
            isValid = false;
        }
        if (!employmentType) {
            errorMessage += "Employment type is required.\n";
            isValid = false;
        }
        if (!paymentMethod) {
            errorMessage += "Payment method is required.\n";
            isValid = false;
        }
        if (isNaN(lastSalaryAmount) || parseInt(lastSalaryAmount) <= 0) {
            errorMessage += "Last salary amount is required.\n";
            isValid = false;
        }
        if (!lastSalaryDate) {
            errorMessage += "Last salary date is required.\n";
            isValid = false;
        }

        if (!isValid) {
            toast.error(errorMessage);
            return;
        }

        try {
            const response = await axios.post(`${baseUrl}api/v1/save-employement-data`, JSON.stringify(requestData), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.status === 1) {
                nextStep();
            } else {
                toast.error("Failed to save employment details. Please try again.");
            }
        } catch (error) {
            console.error("Error saving employment details:", error);
            toast.error("An error occurred while saving employment details. Please try again.");
        }
    };

    return (
        <div>
            <h3>Employment Details</h3>

            <div className="col-md-12">
                <h4 style={{ color: COLORS.darkBlue, margin: '0px' }}>Employer Name</h4>
                <label>Note: if your company name is not there, please select other</label>
                <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    placeholder="Select Employer Name"
                    value={formValues.employerName ? { label: formValues.employerName, value: formValues.employerName } : null}
                    onChange={(option) => setFormValues({ ...formValues, employerName: option ? option.value : '' })}
                    styles={customSelect1}
                />
                {errors.employerName && <Typography variant="caption" color="error">{errors.employerName}</Typography>}
            </div>

            <FormControl component="fieldset" sx={{ marginY: '10px' }}>
                <FormLabel component="legend" sx={{ color: COLORS.darkBlue, fontWeight: 'bold' }}>Employment Type</FormLabel>
                <RadioGroup row>
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
            </FormControl>

            <TextField
                label="Monthly Salary"
                fullWidth
                type='number'
                variant="outlined"
                value={formValues.monthlySalary}
                onChange={(e) => setFormValues({ ...formValues, monthlySalary: parseInt(e.target.value) })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
                error={!!errors.monthlySalary}
                helperText={errors.monthlySalary}
            />
            <FormControl component="fieldset" sx={{ marginY: '10px' }}>
                <FormLabel component="legend" sx={{ color: COLORS.darkBlue, fontWeight: 'bold' }}>Payment Method</FormLabel>
                <RadioGroup row>
                    <FormControlLabel
                        value="BANK"
                        control={<Radio />}
                        label="Bank Transfer"
                        onChange={(e) => setFormValues({ ...formValues, paymentMethod: e.target.value })}
                    />
                    <FormControlLabel
                        value="CHEQUE"
                        control={<Radio />}
                        label="Cheque"
                        onChange={(e) => setFormValues({ ...formValues, paymentMethod: e.target.value })}
                    />
                </RadioGroup>
            </FormControl>

            <TextField
                label="Last Received Salary Amount"
                fullWidth
                type='number'
                variant="outlined"
                value={formValues.lastSalaryAmount}
                onChange={(e) => setFormValues({ ...formValues, lastSalaryAmount: parseInt(e.target.value) })}
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
            <Button variant="contained" sx={customeButton} onClick={handleSubmit}>Continue</Button>
            <Button variant="contained" sx={customeButton} onClick={prevStep}>Back</Button>
        </div>
    );
};

const BankDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {
    const loadIfscOptions = async (inputValue) => {
        if (inputValue.length < 5) {
            return [];
        }

        try {
            const response = await axios.post(`${baseUrl}api/v1/search-ifsc`, JSON.stringify({ ifsc_code: inputValue }), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data.data.map(item => ({
                label: `${item.bank_ifsc} - ${item.bank_name}`,
                value: item.bank_ifsc,
                bankName: item.bank_name,
                bankCode: item.bank_code
            }));
        } catch (error) {
            console.error('Error fetching IFSC codes:', error);
            return [];
        }
    };

    const handleIfscChange = (option) => {
        setFormValues({
            ...formValues,
            ifsc: option ? option.value : '',
            bankName: option ? option.bankName : '',
            bankCode: option ? option.bankCode : ''
        });
    };

    const handleSubmit = async () => {
        console.log("called")
        const {
            journey_id,
            accountNumber,
            confirmAccountNumber,
            beneficiaryName,
            accountType,
            ifsc,
            bankName,
            bankCode
        } = formValues;

        let isValid = true;
        let errorMessage = '';

        if (!accountNumber) {
            errorMessage += "Account number is required.\n";
            isValid = false;
        }
        if (!confirmAccountNumber) {
            errorMessage += "Confirm account number is required.\n";
            isValid = false;
        }
        if (accountNumber !== confirmAccountNumber) {
            errorMessage += "Account numbers do not match.\n";
            isValid = false;
        }
        if (!beneficiaryName) {
            errorMessage += "Beneficiary name is required.\n";
            isValid = false;
        }
        if (!accountType) {
            errorMessage += "Account type is required.\n";
            isValid = false;
        }
        if (!ifsc) {
            errorMessage += "IFSC code is required.\n";
            isValid = false;
        }
        if (!journey_id || journey_id <= 0 || isNaN(journey_id)) {
            errorMessage += "Journey ID is required.\n";
            isValid = false;
        }

        if (!isValid) {
            toast.error(errorMessage);
            return;
        }

        try {
            const response = await axios.post(`${baseUrl}api/v1/save-banking-details`, JSON.stringify({
                journey_id: parseInt(journey_id),
                account: parseInt(accountNumber),
                confirm_account: parseInt(confirmAccountNumber),
                beneficiary_name: beneficiaryName,
                bank_name: bankName,
                account_type: accountType,
                ifsc_code: ifsc,
                bank_code: bankCode
            }), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            if (response.data.status === 1) {
                nextStep();
            } else {
                toast.error("An error occurred while submitting bank details. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred while submitting bank details. Please try again.");
        }
    };

    return (
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
            <AsyncSelect
                cacheOptions
                loadOptions={loadIfscOptions}
                defaultOptions
                placeholder="Select IFSC Code"
                value={formValues.ifsc ? { label: `${formValues.ifsc} - ${formValues.bankName}`, value: formValues.ifsc } : null}
                onChange={handleIfscChange}
                styles={customSelect1}
            />
            {errors.ifsc && <Typography variant="caption" color="error">{errors.ifsc}</Typography>}
            <TextField
                label="Bank Name"
                fullWidth
                variant="outlined"
                value={formValues.bankName}
                onChange={(e) => setFormValues({ ...formValues, bankName: e.target.value })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
                error={!!errors.bankName}
                helperText={errors.bankName}
                disabled
            />
            <FormControl fullWidth error={!!errors.accountType} sx={[customSelect, { marginY: '10px' }]}>
                <InputLabel>Account Type</InputLabel>
                <Select
                    value={formValues.accountType}
                    onChange={(e) => setFormValues({ ...formValues, accountType: e.target.value })}
                >
                    <MenuItem value="">SELECT</MenuItem>
                    <MenuItem value="Saving">Saving</MenuItem>
                    <MenuItem value="Current">Current</MenuItem>
                </Select>
                {errors.accountType && <Typography variant="caption" color="error">{errors.accountType}</Typography>}
            </FormControl>
            <TextField
                label="Account Number"
                fullWidth
                variant="outlined"
                value={formValues.accountNumber}
                onChange={(e) => setFormValues({ ...formValues, accountNumber: parseInt(e.target.value) })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
                error={!!errors.accountNumber}
                helperText={errors.accountNumber}
            />
            <TextField
                label="Confirm Account Number"
                fullWidth
                variant="outlined"
                value={formValues.confirmAccountNumber}
                onChange={(e) => setFormValues({ ...formValues, confirmAccountNumber: parseInt(e.target.value) })}
                sx={[customTextFieldStyle, { marginY: '10px' }]}
                error={!!errors.confirmAccountNumber}
                helperText={errors.confirmAccountNumber}
            />
            <Button variant="contained" sx={customeButton} onClick={handleSubmit}>Continue</Button>
            <Button variant="contained" sx={customeButton} onClick={prevStep}>Back</Button>
        </div>
    )
}

const UploadDocuments = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormValues({ ...formValues, document: file });
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('lead_id', parseInt(formValues.journey_id));
        formData.append('doc_type_id', formValues.documentType);
        formData.append('document', formValues.document);
        if (formValues.password) {
            formData.append('password', formValues.password);
        }

        try {
            const response = await axios.post(`${baseUrl}api/v1/upload-documents`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(formValues)
            console.log(response)
            if (response.data.status === 1) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error uploading documents:", error);
            toast.error("An error occurred while uploading documents. Please try again.");
        }
    };

    // const handleCheckAccountAggregator = async (e) => {
    //     e.preventDefault();

    //     try {
    //         console.log(formValues)
    //         const response = await axios.post(`${baseUrl}integrations/v1/get-banking-details`,
    //             JSON.stringify({
    //                 lead_id: parseInt(formValues.journey_id)
    //             }), {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         }
    //         );

    //         console.log(response);
    //         document.getElementById("netbanking").src = response.data.Data.cart_netbanking_url;
    //         nextStep();
    //     } catch (error) {
    //         console.log(error)
    //         toast.error("An error occurred while checking the account aggregator. Please try again.");
    //     }
    // };

    const handleSubmit = () => {
        console.log("submitting")
    }

    return (
        <div>
            <h3>Upload Documents</h3>
            <FormControl fullWidth error={!!errors.documentType} sx={{ marginY: '10px' }}>
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

            <TextField
                label="Select a Document"
                fullWidth
                type='file'
                variant="outlined"
                onChange={handleFileChange}
                sx={[customTextFieldStyle, { marginY: '20px' }]}
                error={!!errors.document}
                helperText={errors.document}
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                label="Password if any"
                fullWidth
                type="password"
                variant="outlined"
                value={formValues.password}
                onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                sx={customTextFieldStyle}
                error={!!errors.password}
                helperText={errors.password}
            />

            <Button variant="contained" sx={customeButton} onClick={handleUpload}>Upload</Button>
            <Button variant="contained" sx={customeButton} onClick={handleSubmit}>Continue</Button>
            <Button variant="contained" sx={customeButton} onClick={prevStep}>Back</Button>
        </div>
    );
};

const NetBanking = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {

    return (
        <div>
            <iframe id='netbanking' />
        </div>
    )
}

const LoanDetails = ({ nextStep, prevStep, formValues, setFormValues, errors }) => {
    const [loanOptions, setLoanOptions] = useState([]);

    const handleLoanAmountChange = (event, newValue) => {
        setFormValues({ ...formValues, loanAmount: newValue });
    };

    const handleLoanDaysChange = (event, newValue) => {
        setFormValues({ ...formValues, loanDays: newValue });
    };

    useEffect(() => {
        const getLoans = async () => {
            try {
                const response = await axios.get(`${baseUrl}api/v1/get-endsure`);
                setLoanOptions(response.data.data);
            } catch (e) {
                toast.error("An error occurred while fetching loan data.");
            }
        };
        getLoans();
    }, [baseUrl]);

    const handleSubmit = async () => {
        const { loanAmount, loanDays, loanPurpose, journey_id, user_type } = formValues;

        if (!loanAmount || !/^\d+$/.test(loanAmount) || !loanDays || !/^\d+$/.test(loanDays)) {
            toast.error("Please enter valid loan details.");
            return;
        }

        if (loanAmount < 15000) {
            toast.error("Loan amount should be greater than 15000.");
            return;
        }

        try {
            const response = await axios.post(`${baseUrl}api/v1/save-loan-data`, {
                journey_id: parseInt(journey_id, 10),
                loan_amount: parseFloat(loanAmount),
                tenure: parseInt(loanDays, 10),
                purpose: loanPurpose,
                source: "FM.COM Instant Journey",
                utm_campaign: ""
            });
            console.log(response)
            if (response.data.status === 1) {
                setFormValues({
                    ...formValues,
                    lead_id: response.data.lead_id
                });
                if (user_type === 2) {
                    nextStep(2);
                } else {
                    nextStep();
                }
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error during form submission: ", error);
            toast.error("Error: Failed to save loan data. Please try again.");
        }
    };

    return (
        <div>
            <h3>Loan Details</h3>
            <Box sx={{ paddingX: '30px', backgroundColor: '#fff', borderRadius: '40px', marginY: '10px' }}>
                <Typography variant="body1" gutterBottom>
                    Desired Loan Amount
                </Typography>
                <Slider
                    value={formValues.loanAmount}
                    min={15000}
                    max={200000}
                    step={1000}
                    onChange={handleLoanAmountChange}
                    valueLabelDisplay="auto"
                    sx={{
                        color: '#FFA500', // Example color, replace with your COLORS.yellowOrange
                        '& .MuiSlider-thumb': {
                            backgroundColor: '#000', // Example color, replace with your COLORS.black
                            width: 20,
                            height: 20,
                            borderRadius: 0,
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: 'inherit',
                            },
                        },
                        '& .MuiSlider-track': {
                            backgroundColor: '#FFA500', // Example color, replace with your COLORS.yellowOrange
                        },
                    }}
                />
            </Box>

            <Box sx={{ paddingX: '30px', backgroundColor: '#fff', borderRadius: '40px', marginY: '10px' }}>
                <Typography variant="body1" gutterBottom>
                    Loan Duration (Days)
                </Typography>
                <Slider
                    value={formValues.loanDays}
                    min={7}
                    max={182}
                    step={1}
                    onChange={handleLoanDaysChange}
                    valueLabelDisplay="auto"
                    sx={{
                        color: '#FFA500', // Example color, replace with your COLORS.yellowOrange
                        '& .MuiSlider-thumb': {
                            backgroundColor: '#000', // Example color, replace with your COLORS.black
                            width: 20,
                            height: 20,
                            borderRadius: 0,
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: 'inherit',
                            },
                        },
                        '& .MuiSlider-track': {
                            backgroundColor: '#FFA500', // Example color, replace with your COLORS.yellowOrange
                        },
                    }}
                />
            </Box>

            <FormControl fullWidth error={!!errors.loanPurpose} sx={{ marginY: '10px' }}>
                <InputLabel>Purpose of Loan</InputLabel>
                <Select
                    value={formValues.loanPurpose}
                    onChange={(e) => setFormValues({ ...formValues, loanPurpose: e.target.value })}
                >
                    <MenuItem value="">SELECT</MenuItem>
                    {loanOptions.map((loan) => (
                        <MenuItem key={loan.enduse_name} value={loan.enduse_name}>
                            {loan.enduse_name}
                        </MenuItem>
                    ))}
                </Select>
                {errors.loanPurpose && <Typography variant="caption" color="error">{errors.loanPurpose}</Typography>}
            </FormControl>
            <Button variant="contained" onClick={handleSubmit} sx={customeButton}>Submit</Button>
            <Button variant="contained" onClick={prevStep} sx={customeButton}>Back</Button>
        </div>
    );
};

export default InstantJourney;
