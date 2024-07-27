import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Link, Box, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import logo from '../../assets/imgs/funds_mama_logo.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useLocation } from 'react-router-dom';
import * as COLORS from '../../assets/utils/Constants';

const FloatButton = styled('a')({
    position: 'fixed',
    width: 60,
    height: 60,
    bottom: 40,
    right: 40,
    backgroundColor: '#25d366',
    color: '#FFF',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: 30,
    boxShadow: '2px 2px 3px #999',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    ':hover': {
        color: COLORS.darkBlue
    }
});

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#fff',
    boxShadow: 'none',
    paddingX: '70px',
    display: 'flex',
    alignItems: 'center',
});

const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        borderRadius: 5,
        borderTop: '5px solid #da9d1a',
        backgroundColor: COLORS.white,
        color: COLORS.black,
    },
    '& .MuiMenuItem-root': {
        borderRadius: 3,
        '&:hover': {
            backgroundColor: COLORS.blue,
            color: COLORS.white
        },
    },
});

const Navbar = () => {
    const [productAnchorEl, setProductAnchorEl] = useState(null);
    const [corporateAnchorEl, setCorporateAnchorEl] = useState(null);
    const [selectedTab, setSelectedTab] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setSelectedTab('home');
                break;
            case '/aboutus':
                setSelectedTab('aboutus');
                break;
            case '/repayloan':
                setSelectedTab('repayloan');
                break;
            case '/instant_loan':
            case '/short_loan':
                setSelectedTab('products');
                break;
            case '/t&c':
            case '/privacy_policy':
            case '/e-nach_t&c':
            case '/loan_application_t&s':
            case '/refund&cancellation_policy':
            case '/aa':
                setSelectedTab('corporate');
                break;
            case '/contactus':
                setSelectedTab('contactus');
                break;
            case '/instant-journey':
                setSelectedTab('instant-journey');
                break;
            default:
                setSelectedTab('');
        }
    }, [location.pathname]);

    const handleMenuOpen = (event, setAnchor) => {
        setAnchor(event.currentTarget);
    };

    const handleMenuClose = (setAnchor) => {
        setAnchor(null);
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
            <List>
                <ListItemButton component="a" href="/" selected={selectedTab === 'home'}>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component="a" href="/aboutus" selected={selectedTab === 'aboutus'}>
                    <ListItemText primary="About Us" />
                </ListItemButton>
                <ListItemButton component="a" href="/repayloan" selected={selectedTab === 'repayloan'}>
                    <ListItemText primary="Repay" />
                </ListItemButton>
                <ListItemButton component="a" href="/instant_loan" selected={selectedTab === 'products'}>
                    <ListItemText primary="Instant Personal Loans" />
                </ListItemButton>
                <ListItemButton component="a" href="/short_loan" selected={selectedTab === 'products'}>
                    <ListItemText primary="Instant Short Term Loans" />
                </ListItemButton>
                <ListItemButton component="a" href="/t&c" selected={selectedTab === 'corporate'}>
                    <ListItemText primary="Terms and Conditions" />
                </ListItemButton>
                <ListItemButton component="a" href="/privacy_policy" selected={selectedTab === 'corporate'}>
                    <ListItemText primary="Privacy Policy" />
                </ListItemButton>
                <ListItemButton component="a" href="/e-nach_t&c" selected={selectedTab === 'corporate'}>
                    <ListItemText primary="E-NACH T & C" />
                </ListItemButton>
                <ListItemButton component="a" href="/loan_application_t&c" selected={selectedTab === 'corporate'}>
                    <ListItemText primary="Loan Application T & C" />
                </ListItemButton>
                <ListItemButton component="a" href="/refund_policy" selected={selectedTab === 'corporate'}>
                    <ListItemText primary="Refund & Cancellation Policy" />
                </ListItemButton>
                <ListItemButton component="a" href="/acc_agg" selected={selectedTab === 'corporate'}>
                    <ListItemText primary="Account Aggregator" />
                </ListItemButton>
                <ListItemButton component="a" href="/contactus" selected={selectedTab === 'contactus'}>
                    <ListItemText primary="Contact Us" />
                </ListItemButton>
                <ListItemButton component="a" href="/instant-journey">
                    <ListItemText primary="Apply Now" />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: "10px" }}>
            <StyledAppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, marginRight: '20px' }}>
                        <Link href="/" color="inherit">
                            <img src={logo} alt="funds-mama" loading="lazy" width={"240px"} />
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            href="/"
                            sx={{
                                color: selectedTab === 'home' ? COLORS.yellowOrange : COLORS.black,
                                margin: 1,
                                fontWeight: 'bold',
                                fontSize: '18px',
                                textTransform: 'none',
                                ':hover': { color: COLORS.yellowOrange, backgroundColor: 'transparent' }
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            href="/aboutus"
                            sx={{
                                color: selectedTab === 'aboutus' ? COLORS.yellowOrange : COLORS.black,
                                margin: 1,
                                fontWeight: 'bold',
                                fontSize: '18px',
                                textTransform: 'none',
                                ':hover': { color: COLORS.yellowOrange, backgroundColor: 'transparent' }
                            }}
                        >
                            About Us
                        </Button>
                        <Button
                            href="/repayloan"
                            sx={{
                                color: selectedTab === 'repayloan' ? COLORS.yellowOrange : COLORS.black,
                                margin: 1,
                                fontWeight: 'bold',
                                fontSize: '18px',
                                textTransform: 'none',
                                ':hover': { color: COLORS.yellowOrange, backgroundColor: 'transparent' }
                            }}
                        >
                            Repay
                        </Button>
                        <Button
                            sx={{
                                color: selectedTab === 'products' ? COLORS.yellowOrange : COLORS.black,
                                margin: 1,
                                fontWeight: 'bold',
                                fontSize: '18px',
                                textTransform: 'none',
                                ':hover': { color: COLORS.yellowOrange, backgroundColor: 'transparent' }
                            }}
                            onClick={(e) => handleMenuOpen(e, setProductAnchorEl)}
                        >
                            Products <ArrowDropDownIcon />
                        </Button>
                        <StyledMenu
                            anchorEl={productAnchorEl}
                            open={Boolean(productAnchorEl)}
                            onClose={() => handleMenuClose(setProductAnchorEl)}
                            MenuListProps={{
                                onMouseLeave: () => handleMenuClose(setProductAnchorEl),
                            }}
                        >
                            <MenuItem onClick={() => handleMenuClose(setProductAnchorEl)} component={Link} href="/instant_loan"><ChevronRightIcon />Instant Personal Loans</MenuItem>
                            <MenuItem onClick={() => handleMenuClose(setProductAnchorEl)} component={Link} href="/short_loan"><ChevronRightIcon />Instant Short Term Loans</MenuItem>
                        </StyledMenu>
                        <Button
                            sx={{
                                color: selectedTab === 'corporate' ? COLORS.yellowOrange : COLORS.black,
                                margin: 1,
                                fontWeight: 'bold',
                                fontSize: '18px',
                                textTransform: 'none',
                                ':hover': { color: COLORS.yellowOrange, backgroundColor: 'transparent' }
                            }}
                            onClick={(e) => handleMenuOpen(e, setCorporateAnchorEl)}
                        >
                            Corporate Governance<ArrowDropDownIcon />
                        </Button>
                        <StyledMenu
                            anchorEl={corporateAnchorEl}
                            open={Boolean(corporateAnchorEl)}
                            onClose={() => handleMenuClose(setCorporateAnchorEl)}
                            MenuListProps={{
                                onMouseLeave: () => handleMenuClose(setCorporateAnchorEl),
                            }}
                        >
                            <MenuItem onClick={() => handleMenuClose(setCorporateAnchorEl)} component={Link} href="/t&c"><ChevronRightIcon />Terms and Conditions</MenuItem>
                            <MenuItem onClick={() => handleMenuClose(setCorporateAnchorEl)} component={Link} href="/privacy_policy"><ChevronRightIcon />Privacy Policy</MenuItem>
                            <MenuItem onClick={() => handleMenuClose(setCorporateAnchorEl)} component={Link} href="/e-nach_t&c"><ChevronRightIcon />E-NACH T & C</MenuItem>
                            <MenuItem onClick={() => handleMenuClose(setCorporateAnchorEl)} component={Link} href="/loan_application_t&c"><ChevronRightIcon />Loan Application T & C</MenuItem>
                            <MenuItem onClick={() => handleMenuClose(setCorporateAnchorEl)} component={Link} href="/refund_policy"><ChevronRightIcon />Refund & Cancellation Policy</MenuItem>
                            <MenuItem onClick={() => handleMenuClose(setCorporateAnchorEl)} component={Link} href="/acc_agg"><ChevronRightIcon />Account Aggregator</MenuItem>
                        </StyledMenu>
                        <Button
                            href="/contactus"
                            sx={{
                                color: selectedTab === 'contactus' ? COLORS.yellowOrange : COLORS.black,
                                margin: 1,
                                fontWeight: 'bold',
                                fontSize: '18px',
                                textTransform: 'none',
                                ':hover': { color: COLORS.yellowOrange, backgroundColor: 'transparent' }
                            }}
                        >
                            Contact Us
                        </Button>
                        <Button
                            href="/instant-journey"
                            sx={{
                                backgroundColor: COLORS.yellowOrange,
                                borderRadius: 2,
                                padding: '12px',
                                color: '#fff',
                                marginTop: 2,
                                marginBottom: 2,
                                '&:hover': { backgroundColor: '#d0550e' }
                            }}
                        >
                            Apply Now
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </StyledAppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
            <FloatButton href="https://api.whatsapp.com/send?phone=9711711026" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
            </FloatButton>
        </div>
    );
};

export default Navbar;
