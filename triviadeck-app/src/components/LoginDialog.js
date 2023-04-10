import React, { useEffect }  from "react";
import { Dialog, Fade, DialogContent, Box, Typography, Grid, Button, Snackbar, Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { SocialLogins } from "gatsby-theme-firebase";
import { auth, useAuth } from "gatsby-theme-firebase";
import { Link } from "gatsby";





// SELECT TRANSITION FROM OPTIONS BELOW

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="down" ref={ref} {...props} />;
//   });

const Transition2 = React.forwardRef(function Transition2(props, ref) {
    return <Fade ref={ref} {...props} />;
    });

// const Transition3 = React.forwardRef(function Transition3(props, ref) {
//     return <Zoom ref={ref} {...props} />;
//     });

// const Transition4 = React.forwardRef(function Transition4(props, ref) {
//     return <Grow ref={ref} {...props} />;
//     });

    
export default function LoginDialog(props){

    const { isLoading, isLoggedIn, profile } = useAuth();
    
    // Managing login dialog state
    const [open, setOpen] = React.useState(props.isOpen);

    // Managing sucess snackbar state
    const [snackOpen, setSnackOpen] = React.useState(false);
    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        
            setSnackOpen(false);
        };

    useEffect(() => {
        setOpen(props.isOpen);
      }, [props.isOpen]);

    

    const useStyles = makeStyles((theme) =>({

        dialogCont: {
            padding: '0px',
            '&:first-child': {
                paddingTop: 0,
              },
        },

        primaryColorHyperlink: {
            color: theme.palette.primary.main,
          },
      

    }));



    
    const classes = useStyles();
        
    const handleClose = (event) => {
        setTimeout(() => setOpen(false),200)
        props.onChange(false)
    };


    return(
        <React.Fragment>
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="xs"
                fullWidth={true}
                scroll="paper"
                TransitionComponent={Transition2}
            >
                <DialogContent
                    classes={{
                        root: classes.dialogCont,
                      }}
                > {/* --> enables scroll */}
                
                    

                    <Box  
                        display="flex" 
                        margin={1}
                    >
                        <Grid
                        container
                        direction="row"
                        justify = "space-evenly"
                        > 
                            <Grid item xs={12} >
                        
                                <Typography variant="h6" color="primary" component="p" align="center"> 
                                    Triviadeck
                                </Typography>
                            </Grid>

                            {/* IF user is not logged in show this */}
                            {!isLoggedIn ? 
                            <React.Fragment>
                            <Box  
                                display="flex" 
                                marginTop={3}
                                marginBottom={1}

                            >
                                <Grid item xs={12} >
                                <SocialLogins
                                    onSuccess={user => {
                                        setSnackOpen(true);
                                    }}
                                    onClick={handleClose}

                                />
                                </Grid>
                            </Box>
                            
                            <Grid item xs={12} >
                        
                                <Typography variant="body2" color="textPrimary" component="p" align="center"> 
                                    Sign in to access all content curated by our community
                                </Typography>
                               
                            </Grid>

                            <Grid item xs={12} >
                                <Box  
                                    marginTop={2}
                                    marginBottom={2}
                                >
                                    <Divider variant="middle" />

                                </Box>
                            </Grid>

                            <Grid item xs={10} >
                        
                                <Typography variant="caption" color="textPrimary" component="p" align="center"> 
                                    By using Triviadeck you accept our privacy policy and agree to our terms of use
                                </Typography>
                               
                            </Grid>

                            <Grid item xs={6} >
                        
                                <Typography variant="caption" color="primary" component="p" align="center"> 
                                    <Link to = "/privacy-policy" className={classes.primaryColorHyperlink}>Privacy Policy</Link>
                                </Typography>
                               
                            </Grid>

                            <Grid item xs={6} >
                        
                                <Typography variant="caption" color="primary" component="p" align="center"> 
                                    <Link to = "/terms-of-use" className={classes.primaryColorHyperlink}>Terms of Use</Link>
                                </Typography>
                               
                            </Grid>
                            </React.Fragment>
                             
                            //  ELSE show this
                             :
                            
                             <React.Fragment>

                                

                                <Grid item xs={12} >
                                    
                                    <Typography variant="Body2" color="primaryText" component="p" align="center"> 
                                        Signed in as:
                                    </Typography>
                                    
                                </Grid>

                                <Grid item xs={12} >
                            
                                    <Typography variant="Body2" color="primaryText" component="p" align="center"> 
                                        {profile.email}
                                    </Typography>
                                    
                                </Grid>

                                <Box  
                                 display="flex" 
                                 marginTop={3}
                                >
                                    <Grid item xs={12} >
                                        <Button color="secondary" variant="text" style={{ backgroundColor: 'transparent' }} onClick={() => auth.signOut()}>
                                            Sign out
                                        </Button>
                                    </Grid>


                                </Box>

                                <Grid item xs={12} >
                        
                                    <Typography variant="caption" color="primaryText" component="p" align="center"> 
                                        Thank you for using Triviadeck!
                                    </Typography>
                            
                                </Grid>
                             </React.Fragment>
                             }
                            
                        </Grid>
                    </Box>              
                </DialogContent>   
            </Dialog>         

            <Snackbar
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                open={snackOpen}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message="Log in success"
                action={
                <React.Fragment>
                    <Button color="primary" size="small" onClick={handleSnackClose} style={{ color: '#ffffff' }} >
                        Close
                    </Button>

                </React.Fragment>
                }
            />



        </React.Fragment>



    
    );
} 

