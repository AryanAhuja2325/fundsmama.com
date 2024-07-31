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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { loanid } = formData;

    if (!loanid) {
      alert("Loan/Customer ID required.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('loanid', loanid);

      const response = await axios.post('https://tech.girdharfin.cloud/api/v1/customer-login/', {
        id: loanid,
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
        setFormData({ ...formData, loanid: data.id });
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
      console.error("There was an error verifying the loan ID!", error);
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
                  style={{ marginTop: '16px' }}
                >
                  Get Payable Amount
                </Button>
              </form>
              <form id="formDataotp" autoComplete="off" style={{ display: 'none' }}>
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
                  style={{ marginTop: '16px' }}
                >
                  Verify OTP
                </Button>
              </form>
            </FormSection>
          </Grid>
        </Grid>
      </StyledContainer>
      <RepaySection>
        <StyledContainer>
          <Grid container spacing={3}>
            <FormSection>
              <form id="formDatapay" autoComplete="off" method="post" style={{ display: 'none' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Customer Id"
                      name="custidd"
                      value=""
                      disabled
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Loan No"
                      name="lonidd"
                      value=""
                      disabled
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="First Name"
                      name="firstnamm"
                      value=""
                      disabled
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Loan Recommended"
                      name="loanrecommendd"
                      value=""
                      disabled
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Disbursal Date"
                      name="disdtt"
                      value=""
                      disabled
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="ROI"
                      name="loanroii"
                      value=""
                      disabled
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Repayment Amount"
                      name="repayamtt"
                      value=""
                      disabled
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Repayment Date"
                      name="repaydtt"
                      value=""
                      disabled
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Loan Outstanding Amount"
                      name="outstandamtt"
                      value=""
                      disabled
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Pay Amount"
                      name="payamt"
                      type="number"
                      value={formData.payamt}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      inputProps={{ min: 1 }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '16px', backgroundColor: '#f88b37' }}
                >
                  Pay
                </Button>
              </form>
            </FormSection>
          </Grid>
        </StyledContainer>
      </RepaySection>
    </>
  );
};

export default RepayLoan;
