import React, { useEffect }  from "react";
import { Dialog, Fade, DialogContent, Box, Typography, Grid, Button, Snackbar, Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {FacebookShareButton, TwitterShareButton, RedditShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, RedditIcon, WhatsappIcon} from "react-share";






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

    
export default function CtaDialog(props){

   
    // Managing dialog state
    const [open, setOpen] = React.useState(props.isOpen);


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

    const highlightStyle = {
        backgroundColor: "#FFFF00",
      };

    const shareUrl = 'https://triviadeck.io';
    const shareQuote = 'Triviadeck - A digital deck of trivia cards.';


    return(
        <React.Fragment>
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="sm"
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
                        
                                <Typography variant="h6" color="textPrimary" component="p" align="center"> 
                                    Enjoying triviadeck.io? Help us spread the word.
                                </Typography>
                            </Grid>



                            <Grid item xs={12} >
                                <Box  
                                    marginTop={2}
                                    marginBottom={2}
                                    display="flex"
                                    justifyContent="center"
                                >
                        
                                    <span style={highlightStyle}>Please share on social media or tell a few friends.</span>
                                
                                </Box>

                            </Grid>

                            <FacebookShareButton
                                    url={shareUrl}
                                    quote={shareQuote}
                                >
                                    <FacebookIcon size={32} round />
                            </FacebookShareButton>

                            <TwitterShareButton
                                    url={shareUrl}
                                    title={shareQuote}
                                >
                                    <TwitterIcon size={32} round />
                            </TwitterShareButton>

                            <RedditShareButton
                                    url={shareUrl}
                                    title={shareQuote}
                                >
                                    <RedditIcon size={32} round />
                            </RedditShareButton>

                            <WhatsappShareButton
                                    url={shareUrl}
                                    title={shareQuote}
                                    separator=" "
                                >
                                    <WhatsappIcon size={32} round />
                            </WhatsappShareButton>


                            <Grid item xs={12} >
                                <Box  
                                        marginTop={2}
                                        marginBottom={2}
                                        display="flex"
                                        justifyContent="center"
                                >
                        
                                    <span > It really makes all the difference.</span>
                                
                                </Box>

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
                        
                                <Typography variant="caption" color="textPrimary" component="p" align="left"> 
                                    Triviadeck is powered by our active community of trivia creators. Help us grow it bigger by telling your friends. 
                                    Our users love getting trivia questions from all over the world
                                    and we hope you add your own favorites from the contribute tab. 
                                    Don't forget to like the best questions by pressing the heart symbol - this helps our AI show you more of what you like.
                                </Typography>
                               
                            </Grid>

                            <Grid item xs={12} >
                                <Box  
                                    marginTop={2}
                                    marginBottom={2}
                                >
                        
                                    <Typography variant="body2" color="primary" component="p" align="center"> 
                                        Thank you for using Triviadeck!
                                    </Typography>

                                </Box>
                            
                            </Grid>

                            <Grid item xs={12} >
                                <Box  
                                    marginBottom={1}
                                    display="flex"
                                    justifyContent="flex-end"
                                >

                                    <Button /* color="textPrimary" */ size="small" onClick={handleClose} /* style={{ color: '#ffffff' }} */ >
                                        Close
                                    </Button>

                                </Box>
                            
                            </Grid>
                        
                             
                        
                            
                        </Grid>
                    </Box>              
                </DialogContent>   
            </Dialog>         


        </React.Fragment>



    
    );
} 

