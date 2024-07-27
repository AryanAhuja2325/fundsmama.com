import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import termsAndConds from '../assets/imgs/Terms-and-Conditions.jpg';
import * as COLORS from '../assets/utils/Constants';

const BackgroundBox = styled(Box)({
    marginTop: "100px",
    background: `url(${termsAndConds}) no-repeat center center`,
    backgroundSize: 'cover',
    padding: '2rem 0',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
});

const BannerText = styled(Typography)({
    color: '#fff',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold'
});

const ContentBox = styled(Box)({
    padding: '2rem 0',
});


const Text = styled(Typography)({
    color: COLORS.darkBlue,
    lineHeight: 1.8,
    textAlign: 'justify'
});

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    fontWeight: 'bold',
    marginTop: '20px',
    color: COLORS.darkBlue
}));

const LoanApplicationTC = () => {
    return (
        <>
            <BackgroundBox>
                <Container>
                    <BannerText>
                        Loan Application <span style={{ color: COLORS.yellow }}>Terms & Conditions</span>
                    </BannerText>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Divider sx={{ borderColor: COLORS.white, width: '10%', borderWidth: 2 }} />
                    </Box>
                </Container>
            </BackgroundBox>
            <ContentBox>
                <Container>
                    <SectionTitle variant="h5" gutterBottom>
                        Loan Application - Terms & Conditions
                    </SectionTitle>
                    <Divider sx={{ borderColor: COLORS.darkBlue, marginBottom: 2, width: '10%', borderWidth: 2 }} />
                    <Text paragraph>
                        This Loan Application – Terms and Conditions ("Terms & Conditions") is published in compliance of and shall be governed by Indian law, including but not limited to (i) The Indian Contract Act, 1872; (ii) The Information Technology Act, 2000, the rules, regulations, guidelines and clarifications framed thereunder including the Information Technology (Reasonable Security Practices And Procedures And Sensitive Personal Information) Rules, 2011, and the provisions of rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011; and (iii) Reserve Bank of India Act, 1934 and the applicable rules, regulations and guidelines made thereunder.
                    </Text>
                    <Text paragraph>
                        This Terms & Conditions is an electronic record in the form of an electronic contract formed under Information Technology Act, 2000 and rules made thereunder and the amended provisions pertaining to electronic documents / records in various statutes as amended by the Information Technology Act, 2000. This Terms & Conditions document does not require any physical, electronic or digital signature.
                    </Text>
                    <Text paragraph>
                        This Terms & Conditions is a legally binding document between you and, Girdhar Finlease Private Limited and/ or its Lending Partners (terms defined below). This document will be effective upon your acceptance of the same (in electronic form or by means of an electronic record or other means).
                    </Text>
                    <ol style={{ marginRight: '5px' }}>
                        <li>
                            <Text paragraph>
                                For the purpose of these Terms & Conditions, wherever the context so requires:
                            </Text>
                            <Text paragraph>
                                a) "You/Your", "Customer" or "User" shall mean any natural or legal person who intends to avail loan from True Credits and/or its Lending Partners.
                            </Text>
                            <Text paragraph>
                                b) "Funds Mama" or "Platform" shall mean Digital Lending Application (DLA) operated by Girdhar Finlease Private Limited.
                            </Text>
                            <Text paragraph>
                                c) "Funds Mama" shall mean Girdhar Finlease Private Limited, which is duly registered NBFC with Reserve Bank of India (RBI).
                            </Text>
                            <Text paragraph>
                                d) "Lender" shall mean Funds Mama or its Lending Partners, as the case may be.
                            </Text>
                            <Text paragraph>
                                e) "Lending Partner" shall mean banks, non-banking financial companies and other financial institutions regulated by the Reserve Bank of India, with whom there is an arrangement with Funds Mama to facilitate Loan or related financial services through the Platform.
                            </Text>
                            <Text paragraph>
                                f) "Loan" shall mean various lending products/ services offered by Funds Mama and/or its Lending Partners to the Customer on the terms and conditions agreed with the Customer.
                            </Text>
                            <Text paragraph>
                                g) "Loan Documents" shall mean and include Key Fact Statement, Sanction Letter, Loan Agreement/ Loan Disbursal letter (including general terms and conditions) and any other document which may be executed in relation to the Loan.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You understand and hereby agree and acknowledge that Funds Mama is a Digital Lending Application and the Loan, if approved, shall be provided by Lender. Further, you hereby authorise Lender to deduct applicable processing fees and other fees, charges, taxes etc. from the Loan as specifically mentioned in the Loan Documents.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                These Terms & Conditions and all other applicable terms & conditions as may be contained in Loan Documents and Privacy Policy etc. or otherwise, as the case may be, issued by Lender shall govern your rights and obligations as a Customer/borrower for the Loan availed from Lender.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                Your availment and access to the Loan facilitated on Funds Mama are conditional upon your acceptance of and continuous compliance with these Terms & Conditions at all times.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You understand and acknowledge that Loan can be availed only by Indian Citizens who are competent to enter into legally binding contracts under the Indian Contract Act, 1872. Any person who is considered as incompetent to contract as per the provisions of the Indian Contract Act, 1872, including minors, un-discharged insolvents, etc., are not eligible to avail Loan.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You agree that your information such as name, address, contact number, bank account information, financial/transactional details etc. ("User Information") you provide to us upon registration and at the time of availing the Loan and at all other times will be true, accurate, current and complete. You agree to maintain and update the User Information and to keep the User Information true, accurate and complete.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You hereby agree and acknowledge that your Personal Information shared with Funds Mama will be shared with Lender while applying Loan for loan application assessment and other connected purposes.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You hereby consent to receive various loan offers or promotional schemes provided by Girdhar Finlease, or Funds Mama from time to time by phone calls, SMS, WhatsApp, electronic mails or through any other mode of communication. You further consent that Girdhar Finlease, or Funds Mama and/or its authorised representative/service providers may communicate with you either by phone calls, SMS, WhatsApp, electronic mails or through any other mode of communication available for the purpose of sending or discussing the status of your Loan/Loan journey, account activity, reminder or feedback in respect of Loan/Loan journey or for any matter related to the Loan/Loan journey and such phone calls, SMS, etc., shall not be covered under the purview of "Do Not Disturb" policy of the Telecom Regulatory Authority of India (TRAI). For this purpose, you hereby grant permission to Girdhar Finlease, or Funds Mama and/or its authorised representative/service providers to contact you anytime between 0900 hours to 2100 hours from Monday to Sunday.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                To avail Loan, fulfilment of KYC norms and submission of necessary information with Lender is mandatory. In case you have submitted your KYC with Funds Mama, then you hereby agree and acknowledge that your KYC may be shared with Lender for availing Loan and related services.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You hereby give your explicit consent to Lender to access your credit bureau records and use the same for the purpose of evaluating your credit worthiness in relation to the Loan application made to Lender and do necessary reporting to credit bureaus, as and when required. You also agree and authorize Lender to fetch/extract subsequent additional reports from Credit Information Companies (CICs) for the purpose of evaluating your credit worthiness, from time to time.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You understand and acknowledge that your application for Loan is not a guarantee of the Loan approval or disbursal and the same shall be at the absolute discretion of Lender only.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You authorize Lender to share your all or any information with any statutory/regulatory authorities, as appropriate and/or to its authorised service providers for lending and related services from time to time.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You hereby understand and acknowledge that in the Loan journey, you may be redirected to the bank account statement fetching partner, and your account statement will be used only to assess your Loan application.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You agree to provide e-NACH / other mandate favouring Lender for collections account as may be instructed by Lender. You shall not close your bank account or withdraw the e-NACH / other mandate when the loan is outstanding, without prior intimation of 30 days to Lender in writing and in case such a bank account is closed, you shall suitably substitute e-NACH / other mandate as directed by Lender. Please note that such unauthorized withdrawal of e-NACH mandate is a violation of Section 25 of the Payment and Settlement Systems Act 2007 and is liable for legal action.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You agree, represent, and warrant that your use of Loan Services will not violate any applicable law or regulation. You hereby understand that your use of Loan Services shall be for lawful purposes only and any activity undertaken which is harmful to the Lenders is not envisaged. You understand that you are expressly prohibited from deleting or modifying any content from Loan Documents; making any false or malicious statements against the Loan or Lender; and engaging in any form of antisocial, disruptive or destructive acts, including spamming and phishing. The Lender shall not be responsible or/and liable for any claims, damages, disputes arising out of use or misuse of the Services.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                The Lender reserves an absolute right to make any changes and amendments to these Terms & Conditions, at any time as it may deem fit and proper, without any obligation to provide advance notice. You may visit our website/app for the updated version of these Terms and Conditions. Your continuation of Loan constitutes acceptance of any such changes and agreement to be bound by the updated terms and conditions.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                In accordance with the applicable law, any concern or grievance in relation to Loan being provided by the Lender you may contact the respective grievance officer of the Lender at <a href="https://www.fundsmama.com" target="_blank" rel="noopener noreferrer">https://www.fundsmama.com</a>
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                Any dispute arising out of these Terms & Conditions, or any dispute involving you and the Lender shall be governed by and construed in accordance with the laws of India. You agree any legal action or proceeding arising out of the foregoing may be brought exclusively in the competent courts having jurisdiction in New Delhi, Delhi, India.
                            </Text>
                        </li>
                    </ol>
                </Container>
            </ContentBox>
        </>
    );
};

export default LoanApplicationTC;
