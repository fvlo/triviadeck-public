import React, { useEffect } from 'react';
import { AppBar, Toolbar, Button, Grid, Box, makeStyles, Hidden, } from "@material-ui/core";
import LoginDialog from '../components/LoginDialog';
import { useAuth } from "gatsby-theme-firebase";
import { navigate, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import CtaDialog from '../components/CtaDialog';

import PenIcon from './icons/penIcon.js';
import TextIcon from './icons/textIcon.js';
import CardIcon from './icons/cardIcon.js';

// import CookieConsent from 'react-cookie-consent';

import { trackCustomEvent } from 'gatsby-plugin-google-analytics';


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: theme.spacing(0, 0, 0, 0),

        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
          },
          [theme.breakpoints.up('sm')]: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.default,
          },
    },
    toolbar: {
        flexWrap: 'wrap',
    },

    // Navigation buttons (visible only when appbar is primary color).
    menuButton: {
        // Color of navigation buttons.
        color: theme.palette.background.default,
        
        // Larger spacing on big screens. Screen size sm needs smaller spacing...
        // ... for content to fit on one row in appbar.
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(1),
          },
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(2),
          },
      },

      loginButton: {
        [theme.breakpoints.down('sm')]: {    
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
          },
          [theme.breakpoints.up('sm')]: {
            color: theme.palette.background.default,
            borderColor: theme.palette.background.default,
          },
      },

      logo: {
        // maxWidth: 110,
      },

      blackHyperlink: {
        color: "black",
      },

      

    }));

function TdAppBar() {
    const classes = useStyles();
    const [loginOpen, setLoginOpen] = React.useState(false);
    const { isLoading, isLoggedIn, profile } = useAuth();
    const logoBluePath = '../../static/logo-tdblue.svg';
    const logoWhitePath = '../../static/logo-tdwhite.svg';
    const [ctaOpen, setCtaOpen] = React.useState(false);

    const handleLoginClickOpen = () => {
        trackCustomEvent({
            category: "Log in open",
            action: "From app bar",
          });
        setLoginOpen(true);       
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };

    const handleCtaClose = () => {
        setCtaOpen(false);
    };


    // Functions to set value to local storage with time to live (cookie functionality)
    function setWithExpiry(key, value, ttl) {
        const now = new Date()
    
        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        }
        localStorage.setItem(key, JSON.stringify(item))
    }

    function getWithExpiry(key) {
        const itemStr = localStorage.getItem(key)
        // if the item doesn't exist, return null
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()
        // compare the expiry time of the item with the current time
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem(key)
            return null
        }
        return item.value
    }
    
    // Show call to action modal 1.5-3min in to session once every 48 hours
    useEffect(() => {
        const minTime = 1000 * 90; // 90 seconds
        const maxAdditional = 1000 * 90; // 90 seconds
        const delay = minTime + Math.random() * maxAdditional;
        
        if(!getWithExpiry("cta")){
            setTimeout(() => {
                setCtaOpen(true)
                setWithExpiry("cta", true, (1000 * 60 * 60 * 48)) //TTL set to 48 hours
            }, delay);
        }

    }, []);


    return (
        <React.Fragment>
            {/* 
            <span data-nosnippet>
            <CookieConsent
                // debug={true}
                style={{ background: "#e9e1df", color: "black", justifyContent: "center", borderRadius: "5px", marginBottom: "10px" }}
                buttonStyle={{ background: "#00174d",  color: "#ffffff", borderRadius: "3px" }}
                buttonText="Accept and continue"
                overlay
                >
                We use cookies to improve our content, analyze site traffic, and to offer you a better experience. By continuing to use this website, you consent to the use of cookies in accordance with our <Link to = "/privacy-policy" className={classes.blackHyperlink}>Privacy Policy</Link>.
            </CookieConsent>
            </span>
             */}
            
            
            <AppBar position="fixed" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >

                    <Box 
                    display="flex"
                    justifyContent="left"
                    >
                        <Box display="flex" marginRight={4}>
                           
                            {/* Logo on xs screens (mobile) */}
                            <Hidden smUp = {true}>
                                <StaticImage
                                    src={logoBluePath}
                                    alt="Triviadeck"
                                    placeholder="none"
                                    layout="fixed"
                                    width={120}
                                    loading = "eager"
                                    quality = {100}
                                />
                            </Hidden>
                            
                            {/* Logo on sm screens (tablet) */}
                            <Hidden xsDown = {true} mdUp = {true}>
                                <StaticImage
                                    src={logoWhitePath}
                                    alt="Triviadeck"
                                    placeholder="none"
                                    layout="fixed"
                                    width={110}
                                    loading = "eager"
                                    quality = {100}
                                />
                            </Hidden>

                            {/* Logo on md and larger screens (desktop) */}
                            <Hidden smDown = {true} >
                                <StaticImage
                                    src={logoWhitePath}
                                    alt="Triviadeck"
                                    placeholder="none"
                                    layout="fixed"
                                    width={150}
                                    loading = "eager"
                                    quality = {100}
                                />
                            </Hidden>
                        </Box>
                        
                        {/* Buttons size small on screens == sm. No buttons on screens == xs. */}
                        <Hidden xsDown = {true} mdUp = {true}>
                            <Box 
                                display="flex"
                                justifyContent="left"

                                >
                                <Button startIcon ={<CardIcon />} size="small" className={classes.menuButton} onClick={() => { navigate("/") }}>
                                    Cards
                                </Button>
                                <Button startIcon ={<PenIcon />} size="small" className={classes.menuButton} onClick={() => { navigate("/contribute") }}>
                                    Contribute
                                </Button>
                                <Button startIcon ={<TextIcon />} size="small" className={classes.menuButton} onClick={() => { navigate("/community") }}>
                                    Community
                                </Button>
                            </Box>
                        </Hidden>

                        {/* Buttons size medium on screens >= md */}
                        <Hidden smDown = {true}>
                            <Box 
                                display="flex"
                                justifyContent="left"

                                >
                                <Button startIcon ={<CardIcon />} size="medium" className={classes.menuButton} onClick={() => { navigate("/") }}>
                                    Cards
                                </Button>
                                <Button startIcon ={<PenIcon />} size="medium" className={classes.menuButton} onClick={() => { navigate("/contribute") }}>
                                    Contribute
                                </Button>
                                <Button startIcon ={<TextIcon />} size="medium" className={classes.menuButton} onClick={() => { navigate("/community") }}>
                                    Community
                                </Button>
                            </Box>
                        </Hidden>


                    </Box>


                    <Box 
                    display="flex"
                    justifyContent="right"
                    >                    
                        {!isLoggedIn ?
                            <Button variant="outlined" style={{ backgroundColor: 'transparent' }} onClick = {handleLoginClickOpen} className={classes.loginButton}>
                                <div>Log in</div>
                            </Button>
                            :
                            ""}
                    </Box>

                </Grid>

                </Toolbar>
            </AppBar>

            <LoginDialog isOpen = {loginOpen} onChange = {handleLoginClose}></LoginDialog>
            <CtaDialog isOpen = {ctaOpen} onChange = {handleCtaClose}></CtaDialog>
        </React.Fragment>
    );
};

export default TdAppBar;
