import React from 'react';
import {
    Container, Grid, Typography, Box, Divider, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, useTheme
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as COLORS from '../../assets/utils/Constants';

const SimpleProcessComponent = ({ isWhite }) => {
    return (
        <Box sx={{ paddingY: 4, backgroundColor: isWhite ? COLORS.white : COLORS.lightGray }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={12} textAlign="center">
                        <Typography
                            variant="h4"
                            sx={{ marginBottom: 2, fontWeight: 'bold', color: COLORS.darkBlue }}
                        >
                            Simple 3-Step Process
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: 4 }}
                        >
                            The personal loan application process at FundsMama is highly simplified and lightning fast. Just follow these steps and you are good to go.
                        </Typography>
                        <Box
                            sx={{
                                borderBottom: `2px solid ${COLORS.darkBlue}`,
                                width: '60%',
                                margin: '0 auto',
                                marginBottom: 4
                            }}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Box
                            sx={{
                                borderRadius: '30% 0',
                                height: '300px',
                                textAlign: 'center',
                                padding: 2,
                                backgroundColor: COLORS.darkBlue,
                                color: COLORS.white,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <Typography variant="h6">Step-1</Typography>
                                <Box
                                    sx={{
                                        border: `2px solid ${COLORS.white}`,
                                        width: '10%',
                                        margin: '10px auto',
                                        marginBottom: 2
                                    }}
                                />
                                <Typography variant="body1">
                                    Fill out the loan application form. This is a simple process that will take just a few minutes of your time. Provide a few details such as your name, mobile number, email, PAN, etc., as well as the loan amount you are looking for and your monthly income.
                                </Typography>
                            </div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '10px',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: COLORS.white,
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ChevronRightIcon sx={{ color: COLORS.darkBlue }} fontSize='large' />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box
                            sx={{
                                borderRadius: '30% 0',
                                height: '300px',
                                textAlign: 'center',
                                padding: 2,
                                backgroundColor: COLORS.lightYellowOrange,
                                color: COLORS.white,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <Typography variant="h6">Step-2</Typography>
                                <Box
                                    sx={{
                                        border: `2px solid ${COLORS.white}`,
                                        width: '10%',
                                        margin: '10px auto',
                                        marginBottom: 2
                                    }}
                                />
                                <Typography variant="body1" color={COLORS.white}>
                                    You will receive an email requesting the documents required to complete the loan application. The details shared by you will be used to check your eligibility based on company set criteria.
                                </Typography>
                            </div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '10px',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: COLORS.white,
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ChevronRightIcon sx={{ color: COLORS.darkBlue }} fontSize='large' />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box
                            sx={{
                                borderRadius: '30% 0',
                                height: '300px',
                                textAlign: 'center',
                                padding: 2,
                                backgroundColor: COLORS.darkBlue,
                                color: COLORS.white,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <Typography variant="h6">Step-3</Typography>
                                <Box
                                    sx={{
                                        border: `2px solid ${COLORS.darkBlue}`,
                                        width: '10%',
                                        margin: '10px auto',
                                        marginBottom: 2
                                    }}
                                />
                                <Typography variant="body1">
                                    Once your eligibility has been established, you will receive a phone call for processing your loan and then your loan will be disbursed within XX hours.
                                </Typography>
                            </div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '10px',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: COLORS.white,
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ChevronRightIcon sx={{ color: COLORS.darkBlue }} fontSize='large' />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default SimpleProcessComponent