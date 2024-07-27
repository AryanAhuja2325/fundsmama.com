import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import * as COLORS from '../../assets/utils/Constants';
import eligibility from '../../assets/imgs/elegibilti.jpg';
import documents from '../../assets/imgs/kyc-ducument.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledTabs = styled(Tabs)({
    marginBottom: '16px',
});

const StyledTab = styled(Tab)(({ selected }) => ({
    textTransform: 'none',
    minWidth: 200,
    padding: '8px 16px',
    margin: '0 4px',
    borderRadius: '10px',
    backgroundColor: selected ? COLORS.yellow : COLORS.lightGray,
    fontSize: '18px',
    fontWeight: 'bold',
    color: selected ? COLORS.white : COLORS.black,
    border: selected ? `2px solid ${COLORS.yellow}` : 'none',
    '&:hover': {
        backgroundColor: selected ? COLORS.yellow : COLORS.lightGray,
    },
    transition: 'background-color 0.3s, color 0.3s, border 0.3s',
}));

const ListItemBox = styled(Box)(({ theme }) => ({
    padding: '10px',
    margin: '10px 0',
    border: `1px solid '#e0e0e0'`,
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
}));

const ListItemText = styled(Typography)({
    marginLeft: '8px',
});

const TabContent = ({ index, value, children }) => {
    return (
        <Box role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
            {value === index && (
                <Box sx={{ padding: 3 }}>
                    {children}
                </Box>
            )}
        </Box>
    );
};

const EligibilityAndDocumentsTabs = ({ isFeatureVisible }) => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const eligibilityItems = [
        'Should be Indian Citizens',
        'Must be salaried professionals',
        'Must have a monthly take-home salary of at least INR 10,000/-',
        'Should have a regular credit of salary to a bank account',
        'Age should be within 21 to 55 years',
        'Loans up to 80% of your salary',
    ];

    const documentItems = [
        'PAN Card',
        'Salary Slips (Last 3 months)',
        'Salary Account Bank Statement (3/6 months)',
        'Address Proof',
    ];

    return (
        <Box sx={{ paddingY: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <StyledTabs value={tabIndex} onChange={handleTabChange} aria-label="eligibility and documents tabs">
                {isFeatureVisible ? <StyledTab label="Features" selected={tabIndex === 0} /> : null}
                <StyledTab label="Eligibility" selected={tabIndex === 1} />
                <StyledTab label="Documents" selected={tabIndex === 2} />
            </StyledTabs>
            <TabContent index={0} value={tabIndex}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', paddingX: '130px' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flex: 1 }}>
                        <ListItemBox sx={{ flex: '1 1 calc(33.333% - 16px)', margin: '8px', backgroundColor: COLORS.darkBlue, color: COLORS.white }}>
                            <ListItemText>Personal loans upto 1,00,000/-</ListItemText>
                        </ListItemBox>
                        <ListItemBox sx={{ flex: '1 1 calc(33.333% - 16px)', margin: '8px', backgroundColor: COLORS.darkBlue, color: COLORS.white }}>
                            <ListItemText>Cash loans without security cover</ListItemText>
                        </ListItemBox>
                        <ListItemBox sx={{ flex: '1 1 calc(33.333% - 16px)', margin: '8px', backgroundColor: COLORS.darkBlue, color: COLORS.white }}>
                            <ListItemText>No need for Guarantor / Co-borrower</ListItemText>
                        </ListItemBox>
                        <ListItemBox sx={{ flex: '1 1 calc(33.333% - 16px)', margin: '8px', backgroundColor: COLORS.darkBlue, color: COLORS.white }}>
                            <ListItemText>Revolving tenure upto 1 year</ListItemText>
                        </ListItemBox>
                        <ListItemBox sx={{ flex: '1 1 calc(33.333% - 16px)', margin: '8px', backgroundColor: COLORS.darkBlue, color: COLORS.white }}>
                            <ListItemText>Rate of Interest upto 32% APR</ListItemText>
                        </ListItemBox>
                        <ListItemBox sx={{ flex: '1 1 calc(33.333% - 16px)', margin: '8px', backgroundColor: COLORS.darkBlue, color: COLORS.white }}>
                            <ListItemText>Fees upto 10% of loan amount</ListItemText>
                        </ListItemBox>
                        <ListItemBox sx={{ flex: '1 1 calc(33.333% - 16px)', margin: '8px', backgroundColor: COLORS.darkBlue, color: COLORS.white }}>
                            <ListItemText>Loans without any preclosure charges - Pay as you Use</ListItemText>
                        </ListItemBox>
                    </Box>

                    <Box sx={{ marginTop: 3, flex: 1 }}>
                        <Typography variant="h5"><strong>Representative Example:</strong></Typography>
                        <Typography> For Rs 25000/- borrowed for 12 months, with annual interest rate (APR) of 30%, borrower would pay:</Typography>
                        <ul>
                            <li><i className="fa fa-arrow-circle-o-right"></i> Processing Fees = 5%</li>
                            <li><i className="fa fa-arrow-circle-o-right"></i> Interest = Rs 7,500/-</li>
                            <li><i className="fa fa-arrow-circle-o-right"></i> Total amount to repay at the end of tenure = Rs 32,500/-</li>
                            <li><i className="fa fa-arrow-circle-o-right"></i> NACH bounce charges = Rs 500/-</li>
                            <li><i className="fa fa-arrow-circle-o-right"></i> Delay Payment charges = 36%*</li>
                        </ul>
                        <Typography>* This fee is ONLY applicable when borrowers repay bill overdue. For example, if you have Rs 10,000/- overdue of principal, then customer to pay additional Rs 300/- for one month of delay in repayment of loan.</Typography>
                        <Typography>The annual interest rates and processing fees varies according to the risk profile of customers.</Typography>
                    </Box>
                </Box>
            </TabContent>

            <TabContent index={1} value={tabIndex}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1 }}>
                        <img src={eligibility} alt="Eligibility" style={{ width: '100%' }} />
                    </Box>
                    <Box sx={{ flex: 1, padding: 2, marginLeft: '20px' }}>
                        <Typography>The following criteria need to be met for smooth and successful disbursal of the loan:</Typography>
                        {eligibilityItems.map((item, index) => (
                            <ListItemBox key={index}>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: COLORS.black }} />
                                </ListItemIcon>
                                <ListItemText variant="body1">{item}</ListItemText>
                            </ListItemBox>
                        ))}
                    </Box>
                </Box>
            </TabContent>
            <TabContent index={2} value={tabIndex}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1 }}>
                        <img src={documents} alt="Documents" style={{ width: '100%' }} />
                    </Box>
                    <Box sx={{ flex: 1, padding: 2, marginLeft: '20px' }}>
                        <Typography>Provide the following KYC documents for evaluation of your loan-worthiness:</Typography>
                        {documentItems.map((item, index) => (
                            <ListItemBox key={index}>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: COLORS.black }} />
                                </ListItemIcon>
                                <ListItemText variant="body1">{item}</ListItemText>
                            </ListItemBox>
                        ))}
                    </Box>
                </Box>
            </TabContent>
        </Box>
    );
};

export default EligibilityAndDocumentsTabs;
