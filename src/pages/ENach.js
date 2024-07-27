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

const HighlightText = styled(Typography)({
    color: '#F60',
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

const ENach = () => {
    return (
        <>
            <BackgroundBox>
                <Container>
                    <BannerText>
                        E-Nach <span style={{ color: COLORS.yellow }}>T&C</span>
                    </BannerText>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Divider sx={{ borderColor: COLORS.white, width: '10%', borderWidth: 2 }} />
                    </Box>
                </Container>
            </BackgroundBox>
            <ContentBox>
                <Container>
                    <SectionTitle variant="h5" gutterBottom>
                        E-NACH Declaration/Terms and Conditions
                    </SectionTitle>
                    <Divider sx={{ borderColor: COLORS.darkBlue, marginBottom: 2, width: '10%', borderWidth: 2 }} />
                    <ul>
                        <li>
                            <Text paragraph>
                                You agree for the debit of one-time mandate registration charges (if any) by the Designated Bank as per the Bank's policy whom you are authorizing to debit the account.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You are authorizing GFPL to debit your Designated Bank Account, based on the instruction as agreed and authorized by you.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                This e-NACH Mandate is an auto debit authorization from You to GFPL, to debit funds from Your Designated Bank Account as linked to your GFPL loan account. This facility shall be offered to all such customers of GFPL, who have bank accounts at banks registered/partnered with NPCI (National Payments Corporation of India) offering such services of creating e-NACH mandates.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                The creation of an e-NACH Mandate is solely based on the selection criteria, as selected by You. The standing instructions selected/authorized by you can be selected in various timelines such as (a) Weekly; (b) Monthly; (c) Alternate months; (d) Quarterly; (f) Half-yearly; or Annually (as applicable). In case, you do not have sufficient funds in your Designated Bank Account to meet the NACH Mandate auto debit requirements, please contact customer support team of GFPL.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You have the option to cancel the e-NACH Mandate, at any time by requesting your Bank with which you hold your Designated Bank Account. You shall not close your bank account or withdraw the e-NACH/other mandate when the loan is outstanding, without prior intimation of 30 days to GFPL in writing and in case such an banks account is closed, you shall suitably substitute e-NACH / other mandate as directed by GFPL. Please note that such unauthorized withdrawal of e-NACH mandate is violation of Section 25 of the Payment and Settlement Systems Act 2007 and liable for legal action.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                Please ensure that sufficient funds remain in Your Designated Bank Account at the time of collection, at all times, to avoid any legal or procedural consequences as per NPCI & RBI Guidelines. Further, if Auto debit fails due to insufficient balance in your bank account, then your bank may levy a bouncing fee as per the Bank's applicable policy for the same. GFPL has no role in levying these charges. Kindly check your bank's charges schedule to know more details.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                No bouncing charges are being charged by GFPL, however, in case if the outstanding amount is not paid on the due date, the penalty fee shall be imposed by GFPL to the customers.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                The list of banks offering such services shall be updated on NPCI's website (www.npci.org.in) from time to time. The list of banks registered/partnered with NPCI may be modified/changed at any time, at the sole discretion of NPCI, without assigning any reason whatsoever. GFPL at its sole discretion, may also from time to time modify/change the list of banks offering e-NACH Mandate creation services, in case of any operational inconveniences. In any such cases where GFPL has modified the list of banks offering NACH Mandate services on its platform, GFPL shall notify clients of the same.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                Banks may reject any e-NACH Mandate based on their own validations and internal procedures, which is not at the control of GFPL. GFPL is not liable to communicate or for any consequential claims or complaints with respect to such rejections.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                You have understood that You are authorized to cancel/ amend this mandate by appropriately communicating the cancellation/ amendment request to GFPL where you have authorized the debit.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                In case there is any query regarding the said e-NACH, the customer can reach out to the customer support team of GFPL.
                            </Text>
                        </li>
                    </ul>
                </Container>
            </ContentBox>
        </>
    );
};

export default ENach;
