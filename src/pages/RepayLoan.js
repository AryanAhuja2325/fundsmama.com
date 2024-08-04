import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Divider,
  Box
} from '@mui/material';
import aboutBanner from '../assets/imgs/about-banner.jpg';
import * as COLORS from '../assets/utils/Constants';

const StyledContainer = styled(Container)`
  padding: 20px 0;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  text-align: center;
  padding: 55px 0;
  margin-top: 100px;
`;

const Background = styled(Box)({
  backgroundImage: `url(${aboutBanner})`,
  marginTop: '100px',
  height: '400px',
  backgroundSize: 'cover'
})

const RepaySection = styled.div`
  width: 100%;
  padding: 50px 0 95px;
  position: relative;

  @media (max-width: 540px) {
    padding: 50px 0;
    top: 300px;
    text-align: center;
    height: 1375px;
  }

  & h2 {
    margin: 0 0 20px;
    font-size: 15px;
    font-weight: bold;
  }
`;

const FormSection = styled(Box)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const RepayLoan = () => {
  const [formData, setFormData] = useState({
    loanid: '',
    otpval: '',
    payamt: 0,
    lead_id: '',
  });

  const [loanDetails, setLoanDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('https://tech.girdharfin.cloud/api/v1/verify-otp/', {
        lead_id: parseInt(formData.lead_id),
        otp: parseInt(formData.otpval),
      }, {
        headers: {
          'Auth': 'ZnVuZHNtYW1hMjAyMzA0MTk=',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      console.log(response.data);
      const data = response.data;
      const ldata = data.data[0];
      const now = new Date().getTime();
      const your_date = new Date(ldata.repayment_date).getTime();
      const penal_days = Math.round((now - your_date) / (60 * 60 * 24 * 1000)) - 1;
      const loan_total_outstanding_amount = ((ldata.loan_recommended * (ldata.roi * 2) / 100) * penal_days) + ldata.repayment_amount;

      setLoanDetails({
        leadid: ldata.lead_id,
        loanid: ldata.loan_no,
        firstnm: ldata.first_name,
        custid: ldata.customer_id,
        disdt: new Date(ldata.disbursal_date).toLocaleDateString(),
        repaydt: new Date(ldata.repayment_date).toLocaleDateString(),
        repayamt: ldata.repayment_amount,
        loanrecommend: ldata.loan_recommended,
        roi: ldata.roi,
        outstanding: loan_total_outstanding_amount,
        sanction_name: ldata.sanction_name,
        collection_executive_name: ldata.collection_executive_name,
      });
    } catch (error) {
      console.error("Error verifying OTP", error);
      alert("Invalid Loan/Customer ID");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.loanid) {
      alert("Loan/Customer ID required.");
      return;
    }

    try {
      const response = await axios.post('https://tech.girdharfin.cloud/api/v1/customer-login/', {
        id: formData.loanid,
        ip: window.location.hostname,
      }, {
        headers: {
          'Auth': 'ZnVuZHNtYW1hMjAyMzA0MTk=',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = response.data;
      if (data.status === 1) {
        setFormData({ ...formData, loanid: data.id, lead_id: data.lead_id });
        document.getElementById("formDataotp").style.display = "block";

        await axios.post('https://api.girdharfin.cloud/Api/TaskApi/send_repay_otp_mail', {
          lead_id: data.lead_id
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
      } else {
        alert(data.messages || "Invalid Loan/Customer ID");
      }
    } catch (error) {
      console.error("Error verifying the loan ID!", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Background>
        <StyledTypography>
          Repay your loan and interest amount through <br />the following bank or QR Code
        </StyledTypography>
      </Background>
      <StyledContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">
              Repay Loan
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} md={8}>
            <FormSection>
              <form id="formData" autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  label="Lender"
                  value="FUNDS MAMA"
                  disabled
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Loan/CIF Number"
                  name="loanid"
                  value={formData.loanid}
                  onChange={handleChange}
                  placeholder="Ex: DMI0001234567"
                  fullWidth
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: '16px',
                    backgroundColor: COLORS.yellowOrange,
                    borderRadius: '10px',
                    ':hover': {
                      backgroundColor: COLORS.darkBlue
                    }
                  }}
                >
                  Get Payable Amount
                </Button>
              </form>
              <form id="formDataotp" autoComplete="off" style={{ display: 'none' }} onSubmit={(e) => { e.preventDefault(); handleVerifyOTP(); }}>
                <TextField
                  label="Confirmation code"
                  name="otpval"
                  value={formData.otpval}
                  onChange={handleChange}
                  placeholder="Ex: 123456"
                  fullWidth
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: '16px',
                    backgroundColor: COLORS.yellowOrange,
                    borderRadius: '10px',
                    ':hover': {
                      backgroundColor: COLORS.darkBlue
                    }
                  }}
                >
                  Verify OTP
                </Button>
              </form>
            </FormSection>
          </Grid>
        </Grid>
      </StyledContainer>
      {loanDetails && (
        <RepaySection>
          <StyledContainer>
            <Grid container spacing={3}>
              <FormSection>
                <form id="formDatapay" autoComplete="off" method="post">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Loan No"
                        name="lonidd"
                        value={loanDetails.loanid}
                        disabled
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="First Name"
                        name="firstnamm"
                        value={loanDetails.firstnm}
                        disabled
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Loan Amount"
                        name="loanrecommendd"
                        value={loanDetails.loanrecommend}
                        disabled
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Disbursal Date"
                        name="disdtt"
                        value={loanDetails.disdt}
                        disabled
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Repayment Date"
                        name="repaydtt"
                        value={loanDetails.repaydt}
                        disabled
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Repayment Amount"
                        name="repayamt"
                        value={loanDetails.repayamt}
                        disabled
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Outstanding"
                        name="outstandingd"
                        value={loanDetails.outstanding}
                        disabled
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Payable Amount"
                        name="payamt"
                        value={formData.payamt}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      marginTop: '16px',
                      backgroundColor: COLORS.yellowOrange,
                      borderRadius: '10px',
                      ':hover': {
                        backgroundColor: COLORS.darkBlue
                      }
                    }}
                  >
                    Proceed To Pay
                  </Button>
                </form>
              </FormSection>
            </Grid>
          </StyledContainer>
        </RepaySection>
      )}
    </>
  );
};

export default RepayLoan;
