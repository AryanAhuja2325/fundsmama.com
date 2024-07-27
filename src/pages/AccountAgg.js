import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import * as COLORS from '../assets/utils/Constants';
import privacyPolicy from '../assets/imgs/Privacy-Policy-banner.jpg';
import aa from '../assets/imgs/aa.jpg';

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

const StyledImage = styled('img')({
    width: '100%',
    maxWidth: '800px',
    borderRadius: '10px',
    border: 1,
    margin: '20px 0',
    display: 'block',
    objectFit: 'cover'
});

const AccountAgg = () => {
    return (
        <>
            <BackgroundBox>
                <Container>
                    <BannerText>
                        Account <span style={{ color: COLORS.yellow }}>Aggregator</span>
                    </BannerText>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Divider sx={{ borderColor: COLORS.white, width: '10%', borderWidth: 2 }} />
                    </Box>
                </Container>
            </BackgroundBox>
            <ContentBox>
                <Container>
                    <SectionTitle variant="h5" gutterBottom>
                        Account Aggregator
                    </SectionTitle>
                    <Divider sx={{ borderColor: COLORS.darkBlue, marginBottom: 2, width: '10%', borderWidth: 2 }} />
                    <Text paragraph>
                        Account Aggregator (AA) is a type of RBI regulated entity that acts as a common platform to enable easy sharing and consumption of data from various financial institutions with the user's consent. The Account Aggregator helps individuals to share their financial data with third parties in a safe and secure manner and gives them greater control over how their data is being used.
                    </Text>
                    <Text paragraph>
                        An Account Aggregator obtains data from a Financial Information Provider (FIP) and provides it to a Financial Information User (FIU) after obtaining explicit digital consent from the user. Financial information of the user cannot be retrieved, shared, or transferred by the Account Aggregator without the explicit consent of the user. The data that flows through an AA is encrypted and can be processed only by the FIU for whom the data is intended. Also, an AA cannot store any user's data - thus, the potential for leakage and misuse of the user's data is prevented. FundsMama acts as a Financial Information User (FIU).
                    </Text>
                    <Text paragraph>
                        <strong>Various players under the AA ecosystem are FIPs, FIUs, AAs, and TSPs:</strong>
                    </Text>
                    <ul>
                        <li>
                            <Text paragraph>
                                <strong>Financial Information Provider (FIP):</strong> FIPs are institutions such as banks, NBFCs, mutual fund depositories, insurance repositories, pension fund repositories, asset management companies, etc., which provide data to FIUs.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                <strong>Financial Information User (FIU):</strong> An FIU is an entity registered with and regulated by any financial sector regulator which consumes the data received from an FIP for easier access to credit, insurance, and other financial products, or to just keep track of all their investments.
                            </Text>
                        </li>
                        <li>
                            <Text paragraph>
                                <strong>Technology Service Provider (TSP):</strong> TSPs collaborate with FIUs and FIPs to deliver AA products and services. TSPs develop foundational modules for the account aggregators in the ecosystem.
                            </Text>
                        </li>
                    </ul>
                    <Text>
                        <strong>Account Aggregator model:</strong> The basic account aggregator model has 4 segments: Customer, Account Aggregator (acting as a Consent Manager or Financial Data Access Fiduciary), Financial Information Provider (FIP), and Financial Information User (FIU). The Account Aggregator model in a pictorial view is appended below:
                    </Text>

                    <StyledImage src={aa} alt="Account Aggregator Model" />

                    <Text paragraph>
                        Account aggregators, essentially, will act as consent brokers, taking user permission to access their financial accounts and aggregate and organize all their financial information in one place. The data shared by the AA system will have secure digital signatures. The data will remain in encrypted form during its journey from FIP to FIU.
                    </Text>

                    <Text paragraph>
                        In case of any complaints, please mail to <strong><a href="mailto:grievance@fundsmama.com">grievance@fundsmama.com</a></strong>.
                    </Text>

                    <Text variant="h4" paragraph>
                        The Advantages of the Account Aggregator Framework
                    </Text>

                    <Text paragraph>
                        Account Aggregator can make financial services like loans and credit facilities much more seamless and accessible for everyone using the existing digital infrastructure.
                    </Text>

                    <Text variant="h5" paragraph>
                        Hassle-free
                    </Text>
                    <Text paragraph>
                        Account Aggregator makes it effortless to gather data at the user's end and enter data at the service provider's end.
                    </Text>

                    <Text variant="h5" paragraph>
                        Fast
                    </Text>
                    <Text paragraph>
                        Account Aggregator allows faster processing, and quicker access to products or services.
                    </Text>

                    <Text variant="h5" paragraph>
                        Comprehensive
                    </Text>
                    <Text paragraph>
                        With the entire financial profile in one place, service providers gauge your needs in a better way.
                    </Text>

                    <Text variant="h5" paragraph>
                        Real-Time
                    </Text>
                    <Text paragraph>
                        Information for each synced account is up-to-date and available online, reducing the margin for errors.
                    </Text>

                    <Text variant="h5" paragraph>
                        Verified
                    </Text>
                    <Text paragraph>
                        Financial data is directly delivered from authorized accounts, eliminating data errors.
                    </Text>

                    <Text variant="h5" paragraph>
                        Transparent
                    </Text>
                    <Text paragraph>
                        Aggregation increases transparency by helping you get a better picture of your finances.
                    </Text>

                    <Text variant="h4" paragraph>
                        The following Account Aggregators are available with FundsMama:
                    </Text>

                    <Text paragraph>
                        <strong>1. CRIF Connect</strong>
                    </Text>
                    <Text paragraph>
                        <strong>2. One Money</strong>
                    </Text>
                </Container>
            </ContentBox>
        </>
    );
};

export default AccountAgg;
