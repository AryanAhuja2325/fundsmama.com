import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Link, Divider } from '@mui/material';
import { styled } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import banner from '../assets/imgs/contact-banner.jpg';
import * as COLORS from '../assets/utils/Constants';

const ContactSection = styled(Box)({
    background: `url(${banner}) fixed center`,
    color: '#fff',
    textAlign: 'center',
    padding: '50px 0',
    marginTop: '100px',
    height: " 400px",
    display: 'flex',
    alignItems: 'center'
});

const ContactBanner = styled(Box)({
    color: '#fff',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold'
});
const Thumbnail = styled(Box)({
    backgroundColor: COLORS.darkBlue,
    padding: '20px',
    marginBottom: '30px',
    borderRadius: '10px',
    position: 'relative',
    marginTop: '-60px',
    zIndex: 1,
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

});
const ContactInfo = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
});

const ContactLink = styled(Link)({
    color: '#1976d2',
    textDecoration: 'none',
});

const ContactForm = styled('form')({
    padding: '0px 30px',
    backgroundColor: COLORS.yellow,
    borderRadius: '5px',
    height: '450px',
});

const Input = styled(TextField)({
    backgroundColor: COLORS.white,
    borderRadius: '10px'
})

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email_personal: '',
        mobile: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send data to the server
        console.log('Form data:', formData);
    };

    return (
        <div style={{ width: '100%' }}>
            <ContactSection>
                <Container>
                    <ContactBanner>
                        Contact <span style={{ color: COLORS.yellow }}>Us</span>
                    </ContactBanner>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Divider sx={{ borderColor: COLORS.white, width: '10%', borderWidth: 2 }} />
                    </Box>
                </Container>
            </ContactSection>
            <Container
                sx={{
                    py: 5,
                    backgroundColor: COLORS.yellow,
                    marginTop: '40px',
                    width: '100% !important',
                    maxWidth: 'none !important',
                    display: 'flex',
                    justifyContent: 'center',
                    height: '600px',
                    marginBottom: '40px'
                }}
            >
                <Grid container display={'flex'} justifyContent={'center'} px={"150px"}>
                    <Grid item xs={12} md={3.5}>
                        <Thumbnail>
                            <Box>
                                <Typography variant="h4" sx={{ color: COLORS.white, fontWeight: 'bold' }}>
                                    For any <br></br>query call us
                                </Typography>
                                <Divider sx={{ borderColor: COLORS.white, width: '10%', borderWidth: 2, marginY: '10px' }} />
                                <Typography paragraph color={COLORS.white}>
                                    We are aware that the financial sector can throw up a mine of confusing information. Call us or write to us with all your loan-related doubts and queries and we will be delighted to be of assistance.
                                </Typography>
                            </Box>
                            <Box>
                                <ContactInfo container spacing={1}>
                                    <Grid item>
                                        <PhoneIcon sx={{ color: COLORS.white, margin: 'auto' }} />
                                    </Grid>

                                    <Grid item>
                                        <ContactLink href="tel:+919711711026">+91- 9711711026</ContactLink>
                                    </Grid>
                                </ContactInfo>
                                <ContactInfo container spacing={1}>
                                    <Grid item><EmailIcon sx={{ color: COLORS.white }} /></Grid>
                                    <Grid item>
                                        <ContactLink href="mailto:info@fundsmama.com">info@fundsmama.com</ContactLink>
                                    </Grid>
                                </ContactInfo>
                                <ContactInfo container spacing={1}>
                                    <Grid item><LocationOnIcon sx={{ color: COLORS.white }} /></Grid>
                                    <Grid item>
                                        <Typography sx={{ color: COLORS.white }}>
                                            106, First Floor, Surya Kiran Building, 19 Kasturba Gandhi Marg, New Delhi - 110001
                                        </Typography>
                                    </Grid>
                                </ContactInfo>
                            </Box>
                        </Thumbnail>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ContactForm id="contact_form_data" onSubmit={handleSubmit} autoComplete="off">
                            <Typography variant="h4" sx={{ color: COLORS.darkBlue, fontWeight: 'bold' }}>Fill the form.<br />It's easy.</Typography>
                            <Divider sx={{ borderColor: COLORS.darkBlue, width: '10%', borderWidth: 2, marginY: '10px' }} />
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} border={'none'}>
                                    <Input
                                        name="name"
                                        id="name"
                                        label="As on Pan Card"
                                        fullWidth
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Input
                                        type="email"
                                        name="email_personal"
                                        id="email_personal"
                                        label="Personal Email ID"
                                        fullWidth
                                        value={formData.email_personal}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input
                                        type="tel"
                                        name="mobile"
                                        id="mobile"
                                        label="Mobile Number"
                                        fullWidth
                                        inputProps={{ maxLength: 10, pattern: '[5-9]{1}[0-9]{9}' }}
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input
                                        name="subject"
                                        id="subject"
                                        label="Subject line"
                                        fullWidth
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input
                                        name="message"
                                        id="message"
                                        label="Write Message"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" sx={{ backgroundColor: COLORS.darkBlue, borderRadius: '10px', padding: '10px 20px' }}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </ContactForm>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ width: '100%', marginBottom: '20px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2313856551173!2d77.22315071425923!3d28.622826491272715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd34146fe36b%3A0xe521d66a33427597!2sKG%20Marg%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1663404874990!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </div>
    );
};

export default ContactUs;
