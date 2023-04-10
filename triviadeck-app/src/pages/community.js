import React from "react";
import { Grid, Typography, Box, Paper, IconButton, Hidden } from "@material-ui/core";

import TdAppBar from '../components/tdAppBar.js'
import LabelBottomNavigation from '../components/bottomNav.js'
import useStyles from '../components/styles.js';

import { useAuth } from "gatsby-theme-firebase";
import LoginDialog from '../components/LoginDialog';
import UserIcon from '../components/icons/userIcon.js';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"



export default function App() {
    const classes = useStyles();
    const { isLoading, isLoggedIn, profile } = useAuth();
    const IMG_COMMUNITY_1 = '../../static/community_1.svg';
    const IMG_COMMUNITY_2 = '../../static/community_2.svg';
    const IMG_COMMUNITY_3 = '../../static/community_3.svg';
    
    const [loginOpen, setLoginOpen] = React.useState(false);
    const handleLoginClickOpen = () => {
        setLoginOpen(true);       
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };
  return (
    <React.Fragment>

          <div className="application">
            <Helmet
            htmlAttributes={{
              lang: 'en',
            }}>
              <title>Triviadeck - community</title>
              <meta 
                name="description" 
                content="We have a huge amount of trivia content written and curated by our community. When you sign in and like the best questions you help our AI learn what our community likes the most.">
              </meta>
            </Helmet>
          </div>

    {/* AppBar at top of page */}
          <TdAppBar />
            
    {/* Main content grid */}
    
    
    
            
                <Box className={classes.communityPaddingBox} />

                <Box className={classes.communityContentBox}>
    
                {/* Main grid */}
                <Grid
                  container
                  direction="row"
                  justify = "center"
                  item xs={12} 
                > 

                      
                    {isLoggedIn ?  
                      // Content structure
                      <Grid item xs={10} sm={6} md={4}>
                      <Paper className={classes.userInfoPaper} elevation={1}>
                      <Grid container justify="center" alignItems="center" item xs={12}> 
                            
                            
                            {/* Left text box */}
                                <Box>
                                <Typography
                                  variant="body2"
                                  align="center"
                                  color="textPrimary"
                                  >
                                  You are signed in.

                                </Typography>
                                <Typography
                                  variant="body2"
                                  align="center"
                                  color="textPrimary"
                                  >

                                  Thank you for contributing!
                                </Typography>
                                </Box>

                              <IconButton aria-label="user info" color="secondary" onClick = {handleLoginClickOpen}>
                                <UserIcon />
                              </IconButton>

                      </Grid>
                      </Paper>
                      </Grid>
                    
                    
                    : null}

                    <Grid item xs={12} container justify = "center">
                        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
                          

                          <Box
                          mt={2}
                          mb={1}
                          ml={1}
                          mr={1}
                          >
                              <Typography
                              variant="h6"
                              align="center"
                              color="primary"
                              >
                              A deck of cards
                          
                              </Typography>
                              
                          </Box>

                          <Grid item xs={12} container 
                              justify = "center"
                              alignItems="center"
                              >
                          
                              <Grid item xs={12} sm={6}>
                              <Box
                                    display="flex" 
                                    justifyContent="center"
                                    m={2}
                                    >
                                        <StaticImage
                                            src={IMG_COMMUNITY_1}
                                            alt="Triviadeck"
                                            placeholder="blurred"
                                            layout="constrained"
                                            height={150}
                                            loading = "eager"
                                            quality = {50}
                                        />
                              </Box>
                              </Grid>

                              <Grid item xs={12} sm={6}>
                              <Box m={1}>
                                  <Typography
                                  variant="body1"
                                  align="left"
                                  >
                                  Triviadeck is a digital deck of trivia questions. It's best used together with your favourite  
                                  board game.
                              
                                  </Typography>
                                  
                              </Box>
                              </Grid>

                          </Grid>
                          
                          
                          
                          <Box
                            mt={3}
                            mb={1}
                            ml={1}
                            mr={1}
                          >
                              <Typography
                              variant="h6"
                              align="center"
                              color="primary"
                              >
                              Powered by our community
                          
                              </Typography>
                              
                          </Box>


                          <Grid item xs={12} container 
                              justify = "center"
                              alignItems="center"
                              >
                              
                              <Grid item xs={12} sm={6}>
                              <Box
                              margin={1}
                              >
                                  <Typography
                                  variant="body1"
                                  align="left"
                                  >
                                  We have a huge amount of content written and curated by our community. When you sign in and 
                                  like the best questions you help our (very simple-minded) AI learn what our community likes the most.
                                  </Typography>
                                  
                              </Box>
                              </Grid>

                              <Grid item xs={12} sm={6}>
                              <Box
                                    display="flex" 
                                    justifyContent="center"
                                    m={2}
                                    >
                                        <StaticImage
                                            src={IMG_COMMUNITY_2}
                                            alt="Triviadeck"
                                            placeholder="blurred"
                                            layout="constrained"
                                            height={150}
                                            loading = "eager"
                                            quality = {50}
                                        />
                                </Box>
                                </Grid>
                            </Grid>


                            <Grid item xs={12} container 
                              justify = "center"
                              alignItems="center"
                              >
                              
                              
                              {/* EMPTY GRID ITEM NECESSARY FOR ART DIRECTION (ORDER OF IMAGES AT BREAKPOINTS) */}
                              <Grid item xs={12}> 
                                <Box
                                margin={0}
                                >
                                    
                                </Box>
                              </Grid>
                                
                                
                                {/* HIDE AT BREAKPOINT XS, SHOW OTHERWISE */}
                                <Hidden only="xs">
                                  <Grid item xs={12} sm={6}>
                                  <Box
                                        display="flex" 
                                        justifyContent="center"
                                        m={2}
                                        >
                                            <StaticImage
                                                src={IMG_COMMUNITY_3}
                                                alt="Triviadeck"
                                                placeholder="blurred"
                                                layout="constrained"
                                                height={150}
                                                loading = "eager"
                                                quality = {50}
                                            />
                                  </Box>
                                  </Grid>
                                </Hidden>

                                <Grid item xs={12} sm={6}>
                                <Box
                                margin={1}
                                >
                                    <Typography
                                    variant="body1"
                                    align="left"
                                    >
                                    You aren't likely to run out of content by going through Triviadeck's cards. It would be impossible
                                    for one person to even read through the full deck.
                                    </Typography>
                                    
                                </Box>
                                
                                <Box
                                margin={1}
                                >
                                    <Typography
                                    variant="body1"
                                    align="left"
                                    >
                                    We still welcome our users to add new questions as well as review existing ones. Writing good content
                                    is not easy and with your help we can show more of the best and most topical cards possible.
                                    </Typography>
                                    
                                </Box>
                                </Grid>

                                {/* SHOW AT BREAKPOINT XS, HIDE OTHERWISE */}
                                <Hidden smUp>
                                  <Grid item xs={12} sm={6}>
                                  <Box
                                        display="flex" 
                                        justifyContent="center"
                                        m={2}
                                        >
                                            <StaticImage
                                                src={IMG_COMMUNITY_3}
                                                alt="Triviadeck"
                                                placeholder="blurred"
                                                layout="constrained"
                                                height={150}
                                                loading = "eager"
                                                quality = {50}
                                            />
                                  </Box>
                                  </Grid>
                                </Hidden>

                          </Grid>
                          
                          <Box
                          mt={4}
                          >
                              <Typography
                              variant="body1"
                              color="primary"
                              align="center"
                              >
                              We hope you enjoy Triviadeck!
                              </Typography>
                              
                          </Box>

                          <Box
                          mb={2}
                          >
                              <Typography
                              variant="body2"
                              color="primary"
                              align="center"
                              >
                              P.S. Stay safe and take care of each other
                              </Typography>
                              
                          </Box>

                          </Grid>
                        </Grid>
                      
                    

                </Grid>

                
                </Box>
                
                {/* FOOTER */}
                <Box 
                  width = "100%"
                  height = "200px"
                  display="flex" 
                  alignItems="flex-start"
                  justifyContent="center"
                  className={classes.footerBackground}
                  
                  >
                    <Grid
                      container
                      direction="row"
                      justify = "center"
                      item xs={12} md={6}
                    > 
                      <Grid item xs={12} align="center">
                          <Box color = "white" p={1}>community@triviadeck.io</Box>
                      </Grid>

                      <Grid item xs={6} align="center">
                          <Box color = "white" p={1}>
                            <Link to = "/privacy-policy" className={classes.whiteHyperlink}>Privacy Policy</Link>
                          </Box>
                      </Grid>
                      <Grid item xs={6} align="center">
                          <Box color = "white" p={1}>
                            <Link to = "/terms-of-use" className={classes.whiteHyperlink}>Terms of Use</Link>
                          </Box>
                      </Grid>


                      <Grid item xs={12} align="center">
                          <Box color = "white" p={1}>© 2021 Triviadeck</Box>
                      </Grid>
                    </Grid>
                  
                </Box> 
    
    {/* Bottom navigation bar */}
          <LabelBottomNavigation />
          <LoginDialog isOpen = {loginOpen} onChange = {handleLoginClose}></LoginDialog>
    
        </React.Fragment>
    
  );
}
