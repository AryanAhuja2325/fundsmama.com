import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import * as COLORS from '../assets/utils/Constants';
import privacyPolicy from '../assets/imgs/Privacy-Policy-banner.jpg';

const BackgroundBox = styled(Box)({
    marginTop: "100px",
    background: `url(${privacyPolicy}) no-repeat center center`,
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

const RefundPolicy = () => {
    return (
        <>
            <BackgroundBox>
                <Container>
                    <BannerText>
                        Refund and <span style={{ color: COLORS.yellow }}>Cancellation Policy</span>
                    </BannerText>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Divider sx={{ borderColor: COLORS.white, width: '10%', borderWidth: 2 }} />
                    </Box>
                </Container>
            </BackgroundBox>
            <ContentBox>
                <Container>
                    <SectionTitle variant="h5" gutterBottom>
                        Refund and Cancellation Policy
                    </SectionTitle>
                    <Divider sx={{ borderColor: COLORS.darkBlue, marginBottom: 2, width: '10%', borderWidth: 2 }} />
                    <ol style={{ marginRight: '5px' }}>
                        <li>
                            <Text paragraph>
                                Hey there! Just a heads up, if you decide you don't want a loan anymore, you can only cancel it within one hour of saying yes. You gotta call right away to cancel the money being sent to you. But be careful, there might be a fee for cancelling. After 24 hours, though, you can't cancel anymore. GirdharFinlease Private Limited can also cancel your loan if they want to.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                If you accidentally pay more than what you owe, you can get your extra money back. We'll put it back into your bank account within 3-5 business days. But remember, this only applies if you pay more than what you were supposed to.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                The Customer will have to make an application for refund along with the transaction number and original payment receipt if any generated at the time of making payments.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                The application in the prescribed format should be sent to <a href="mailto:care@Fundsmama.com">care@Fundsmama.com</a>
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                The application will be processed manually and after verification, if the claim is found valid, the amount received in excess will be refunded by GFPL through electronic mode in favor of the borrower and confirmation sent to the mailing address given to us, within a period of 7 calendar days on receipt of such claim. It will take 3-7 days for the money to show in your bank account depending on your bank's policy.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                The company assumes no responsibility and shall incur no liability if it is unable to affect any Payment Instruction(s) on the Payment Date owing to any one or more of the following circumstances:
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                If the Payment Instruction(s) issued by you is/are incomplete, inaccurate, and invalid and delayed.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                If the Payment Account has insufficient funds/limits to cover for the amount as mentioned in the Payment Instruction(s).
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                If the funds available in the Payment Account are under any encumbrance or charge. If your Bank refuses or delays honoring the Payment Instruction(s).
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                Circumstances beyond the control of Company (including, but not limited to, fire, flood, natural disasters, bank strikes, power failure, systems failure like computer or telephone lines breakdown due to an unforeseeable cause or interference from an outside force)
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                In case the payment is not effected for any reason, you will be intimated about the failed payment by an e-mail.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                User agrees that the Company, in its sole discretion, for any or no reason, and without penalty, may suspend or terminate his/her account (or any part thereof) or use of the Services and remove and discard all or any part of his/her account, user profile, or his/her recipient profile, at any time. Company may also in its sole discretion and at any time discontinue providing access to the Services, or any part thereof, with or without notice. User agrees that any termination of his/her access to the Services or any account he/she may have or portion thereof may be effected without prior notice and also agrees that Company will not be liable to User or any third party for any such termination. Any suspected, fraudulent, abusive, or illegal activity may be referred to appropriate law enforcement authorities. These remedies are in addition to any other Remedies Company may have at law or in equity. Upon termination for any reason, the user agrees to immediately stop using the Services.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                The company may elect to resolve any dispute, controversy, or claim arising out of or relating to this Agreement or Service provided in connection with this Agreement by binding arbitration in accordance with the provisions of the governed and construed in accordance with Indian law. By using the Platform, you hereby irrevocably consent to the exclusive jurisdiction and venue of courts in Delhi, India, in the event of any disputes arising out of or in relation to your access to and use of the Platform.
                            </Text>
                        </li>
                    </ol>

                    <Text sx={{ marginTop: '40px' }}>
                        <strong>For more information:</strong><br />
                        <strong>Contact Us: -</strong><br />
                        <br />
                        <strong>GirdharFinlease Private Limited</strong><br />
                        106, First Floor, Surya Kiran Building, <br />
                        19 Kasturba Gandhi Marg, New Delhi - 110001<br />
                        <br />
                        Phone: <a href="tel:+919711711026">+91-9711711026<br />
                        </a> Email Id: <a href="mailto:info@fundsmama.com">info@fundsmama.com</a>
                    </Text>
                </Container>
            </ContentBox>
        </>
    );
};

export default RefundPolicy;
