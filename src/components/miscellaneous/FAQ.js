import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = ({ faqs }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ paddingY: 4 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={12}>
                        <Typography variant="h4" sx={{ marginBottom: 2 }}>
                            FAQs
                        </Typography>
                        <Box sx={{ border: 2, width: '10%', marginBottom: 2, backgroundColor: 'darkBlue' }} />
                    </Grid>
                    <Grid item md={12}>
                        {faqs.map((faq, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1">
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FAQ;
