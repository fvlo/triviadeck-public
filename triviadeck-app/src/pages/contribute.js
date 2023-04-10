import React, { useState, useEffect } from "react";
import { Grid, Box, Button, Dialog, DialogContent, Paper, Snackbar } from "@material-ui/core";


import TdAppBar from '../components/tdAppBar.js'
import LabelBottomNavigation from '../components/bottomNav.js'
import { makeStyles } from '@material-ui/core/styles';
import StyledFullBackground from '../components/backgroundImages/FullBackground'
import AddContent from '../components/addContentCard.js';
import ReviewContent from '../components/reviewContentCard.js';
import { isIOS, isMacOs } from "react-device-detect";
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { useAuth } from "gatsby-theme-firebase";

import { StaticImage } from "gatsby-plugin-image"

import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Helmet } from "react-helmet"





export default function App() {
    
    const { isLoading, isLoggedIn, profile } = useAuth();
    const IMG_ADD = '../../static/add_content.svg';
    const IMG_REVIEW = '../../static/review_content.svg';

    // -----------------------------------------------------------------
    const APOLLO_QUERY = gql`
    query OneRandomQuestion( $category: String, $qc: Int )  {
        oneRandomQuestion( category: $category, qc: $qc) {
            category
            question
            answer
            id
        }
    }
    `;

    const APOLLO_LOGADD = gql`
    mutation LogContentAdd( $q: String!, $a: String!, $c: String! )  {
        logContentAdd( q: $q, a: $a, c: $c,)
    }
    `;
   
    const [logAdd, { logAddData }] = useMutation(APOLLO_LOGADD);

    const APOLLO_LOGQUALITYESTIMATE = gql`
    mutation LogQualityEstimate( $qid: String!, $value: Int! )  {
        logContentQualityEstimate( qid: $qid, value: $value)
    }
    `;

    const [logQualityEstimate, { logQualityEstimateData }] = useMutation(APOLLO_LOGQUALITYESTIMATE);

    const APOLLO_LOGSUGGESTEDX = gql`
    mutation LogSuggestedX( $qid: String!, $suggestionType: String!, $suggestion: String!, $current: String! )  {
        logSuggestedX( qid: $qid, suggestionType: $suggestionType, suggestion: $suggestion, current: $current )
    }
    `;

    const [logSuggestedX, { logSuggestedXData }] = useMutation(APOLLO_LOGSUGGESTEDX);

    const { loading, error, data, refetch }
    = useQuery(APOLLO_QUERY,
      { variables: { } }
       );

    // NOT CURRENTLY USED: qualityCategory for content fetching. To implement, set value in code.
    const [qc, setQc] = React.useState(undefined);

    // Initial value from static data, updates when useEffect is triggered by API call that in turn is triggered by new random number set in dialog close.
    const [usedContent, setUsedContent] = useState({category: "", question: "Loading", answer: "Loading", id: "Loading"});

    
    // DYNAMIC BASKETS
    const [dynamicA, setDynamicA] = useState( "NOT SET" );
    const [dynamicB, setDynamicB] = useState( "NOT SET" );
        // Boolean indicating which dynamic basket to update next
    const [updateAorNot, setUpdateA] = useState(true);
        // Content in turn - Start with A, same phase as updateAorNot
            // --> when A is used and exited, A is updated
    const [usedBasket, setUsedBasket] = useState("A");
    
    // Used to set first content circle within useEffect triggered by refetch()
    const [firstFetch, setFirstFetch] = useState(true);

    
    // Managing thanks snackbar state
    const [thanksSnackOpen, setThanksSnackOpen] = React.useState(false);
    const handleThanksSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setThanksSnackOpen(false);
        };

    // Add content    
    const handleAddClose = (e) => {
      
      setAddOpen(false);

      if(e.containsInfo){
        setThanksSnackOpen(true);
        logAdd({ variables: { q : e.suggestedQ, a : e.suggestedA, c : e.suggestedC } });
      }

      
      
  
    };

    const handleReviewClose = (e) => {
      setReviewOpen(false);
      (e.containsInfo ? setThanksSnackOpen(true) : "");
    
      if(e.estimatedQuality){
        logQualityEstimate( { variables: { qid : e.qid, value : e.estimatedQuality } })
      }

      if(e.suggestedC){
        logSuggestedX( { variables: { qid: e.qid, suggestionType: "suggestedC", suggestion: e.suggestedC, current: e.currentC } })
      }

      if(e.suggestedQ){
        logSuggestedX( { variables: { qid: e.qid, suggestionType: "suggestedQ", suggestion: e.suggestedQ, current: e.currentQ } })
      }

      if(e.suggestedA){
        logSuggestedX( { variables: { qid: e.qid, suggestionType: "suggestedA", suggestion: e.suggestedA, current: e.currentA } })
      }
      
      
  
    };
    
    const handleReviewDialogExited = () => {
      // using onExited necessary to account for closing delay
          // Otherwise UI may update with new content on previous card
          // This probably only happens when Apollo fetches from cashe 
      
      // console.log(updateAorNot)
      // console.log(usedBasket)
      // setRandom(getRandomArbitrary(0, maxRandom));
      // setRandomBasket((Math.random() * 10 < 5) ? 1 : 2);
      
      // Rerun apollo query for next content
      refetch();
      
      
      // If next basket === "NOT SET" || "API ERROR" || "API LOADING"
          //  --> Used next static until resolved. Do not change "usedBasket"
      if(usedBasket === "A"){
          if ( !["NOT SET", "API ERROR", "API LOADING"].includes(dynamicB) ){
              setUsedContent(dynamicB);
              setUsedBasket("B");

          } else {
              setUsedContent({category: "", question: "Loading", answer: "Loading", id: "Loading"});
          }
      } else {
          if ( !["NOT SET", "API ERROR", "API LOADING"].includes(dynamicA) ){
              setUsedContent(dynamicA);
              setUsedBasket("A");

          } else {
              setUsedContent({category: "", question: "Loading", answer: "Loading", id: "Loading"});
          }
      }
    };

    // Update content of dynamic basket in turn when apollo query returns new data (triggered on dialog exited)
    useEffect(() => {
      if(error) {
          if(updateAorNot) {
              setDynamicA(
                  "API ERROR"
              );
          } else {
              setDynamicB(
                  "API ERROR"
                  );
              };
          };

          if(loading) {
              if(updateAorNot) {
                  setDynamicA(
                      "API LOADING"
                  );
              } else {
                  setDynamicB(
                      "API LOADING"
                  );
              };
          };
      
          if(!error && !loading) {
              if(updateAorNot) {
                  setDynamicA(
                      {question: data.oneRandomQuestion.question, answer: data.oneRandomQuestion.answer, category: data.oneRandomQuestion.category, id: data.oneRandomQuestion.id}
                  );

              } else {
                  setDynamicB(
                      {question: data.oneRandomQuestion.question, answer: data.oneRandomQuestion.answer, category: data.oneRandomQuestion.category, id: data.oneRandomQuestion.id}
                  );

              };
              setUpdateA(!updateAorNot);


              // IF first fetch
                  // Set usedBasket to currently fetched data
                  // Reset random number to retrigger fetch for dynamicB
              if(firstFetch) {
                  // Ensure that content is not changed if dialog already opened
                  if (!reviewOpen) {
                      setUsedContent({question: data.oneRandomQuestion.question, answer: data.oneRandomQuestion.answer, category: data.oneRandomQuestion.category, id: data.oneRandomQuestion.id});

                  };
                  setFirstFetch(false);
                  refetch();
              };
          };
      
      }, [data, error, loading]);
    

      //  ----------------------------------------------------------------
    const useStyles = makeStyles((theme) =>(

      // IF
      isIOS  ?
          
          // Styles for IOS (necessary to enable absolut positioning of trivia dialog)
          {
              
              
              dialog: {
                  position: 'absolute',
                  top: 18,
      
                  // Necessary for ios and mac (leads to suboptimal look on (some?) large screens
                  // and unnecessarily large margins outside dialog on mobile.
                  left:0,
                          
                  // Necessary to exclude on ios? Yes apparently.
                  // Standard is 100% - 64px
                  // width: 'calc(100% - 16px)',

                  

              },
              dialogCont: {
                  padding: '0px',
                  '&:first-child': {
                      paddingTop: 0,
                  },
              },
              listItem: {
                  backgroundColor: theme.palette.background.default
              },

              mainGrid: {
                padding: theme.spacing(1),
                marginTop: theme.spacing(10),
              },
              
          }
          
          // ELSE
          :
          
          // Styles for MacOS (optimal to totally disable absolute positioning)
          // IF
          (isMacOs ?
              {
                  
                  
                  dialog: {

                      

                  },
                  dialogCont: {
                      padding: '0px',
                      '&:first-child': {
                          paddingTop: 0,
                      },
                  },
                  listItem: {
                      backgroundColor: theme.palette.background.default
                  },

                  mainGrid: {
                    padding: theme.spacing(1),
                    marginTop: theme.spacing(10),
                  },
                  
              }

              // ELSE
              :           
              
              // Styles for all other than IOS or MacOS
              {
                  
                  
                  dialog: {
                      position: 'absolute',
                      top: 18,
                              
                      // Standard is 100% - 64px
                      width: 'calc(100% - 16px)',

                      

                  },
                  dialogCont: {
                      padding: '0px',
                      '&:first-child': {
                          paddingTop: 0,
                      },
                  },
                  listItem: {
                      backgroundColor: theme.palette.background.default
                  },

                  mainGrid: {
                    padding: theme.spacing(1),
                    marginTop: theme.spacing(10),
                  },
                  
              }
          )
  ));



  
  const classes = useStyles();

    // --------------------------------------------

    const [addOpen, setAddOpen] = React.useState(false);
    const handleAddClickOpen = () => {
        trackCustomEvent({
            category: "Add card - " + (isLoggedIn ? "SIGNED IN" : "NOT SIGNED IN"),
            action: "Open",
          });
        setAddOpen(true);
    };


    // --------------------------------------------

    const [reviewOpen, setReviewOpen] = React.useState(false);
    
    const handleReviewClickOpen = () => {
        trackCustomEvent({
            category: "Review card - " + (isLoggedIn ? "SIGNED IN" : "NOT SIGNED IN"),
            action: "Open",
          });
        setReviewOpen(true)
    };


  return (
    
    <React.Fragment>

        <div className="application">
            <Helmet
            htmlAttributes={{
                lang: 'en',
            }}>
            <title>Triviadeck - contribute</title>
            <meta 
                name="description" 
                content="Review trivia content written by our community and add your favorite trivia questions so that others can enjoy them.">
            </meta>
            <meta 
                name="keywords" 
                content="Trivia, write trivia questions, add trivia questions">
            </meta>
            </Helmet>
        </div>
        
        {/* AppBar at top of page */}
        <TdAppBar />
          <StyledFullBackground>
          <Grid container 
              direction="row"
              justify = "space-evenly"
              className={classes.mainGrid}>

            <Grid container 
              item xs={12} sm={8} md={6}
              > 
              
              <Grid item xs={12} md={6} >
                  <Box
                  display="flex" 
                  justifyContent="center"
                  paddingBottom={4}
                  >


                    <Paper elevation={3}>
                        
                        <Box
                          display="flex" 
                          justifyContent="center"
                          m={2}
                          >
                          <StaticImage
                              src={IMG_ADD}
                              alt="Triviadeck"
                              placeholder="none"
                              layout="constrained"
                              height={100}
                              loading = "eager"
                              quality = {100}
                          />
                        </Box>
                        
                        <Box
                          display="flex" 
                          justifyContent="center"
                          mb={1}
                          >
                          <Button 
                            color = "primary"
                            style={{ backgroundColor: 'transparent' }}
                            onClick = {handleAddClickOpen}
                            >
                              Add content
                          </Button>
                        </Box>
                        
                    </Paper>
                  </Box>
              </Grid>

              <Grid item xs={12} md={6} >
                <Box
                  display="flex" 
                  justifyContent="center"
                  paddingBottom={4}
                  >


                    <Paper elevation={3} >
                        
                        <Box
                          display="flex" 
                          justifyContent="center"
                          m={2}
                          >
                          <StaticImage
                              src={IMG_REVIEW}
                              alt="Triviadeck"
                              placeholder="none"
                              layout="constrained"
                              height={100}
                              loading = "eager"
                              quality = {100}
                          />
                        </Box>
                        

                            <Box
                            display="flex" 
                            justifyContent="center"
                            mb={1}
                            >
                            <Button 
                                color = "secondary"
                                style={{ backgroundColor: 'transparent' }}
                                onClick = {handleReviewClickOpen}
                                >
                                Review content
                            </Button>
                            </Box>

                    </Paper>
                    
                  </Box>
              </Grid>

            </Grid>   
          </Grid>
          </StyledFullBackground>
        <LabelBottomNavigation />
    
    
        <Dialog
                open={addOpen}
                onClose={handleAddClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth={true}
                scroll="paper"
                classes={{
                    paper: classes.dialog,
                    paperFullWidth: classes.dialog,
                  }}
            >
                <DialogContent> 
                    
                    {/* --> enables scroll */} 
                    <AddContent onClose={handleAddClose} />
               
                </DialogContent>   
            </Dialog>

            <Dialog
                open={reviewOpen}
                onClose={handleReviewClose}
                onExited={handleReviewDialogExited}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth={true}
                scroll="paper"
                classes={{
                    paper: classes.dialog,
                    paperFullWidth: classes.dialog,
                  }}
              
            >
                <DialogContent> 
                    
                    {/* --> enables scroll */} 
                    <ReviewContent 
                      category= {usedContent.category}
                      question = {usedContent.question}
                      answer = {usedContent.answer}
                      qid = {usedContent.id}
                      onClose={handleReviewClose} />
               
                </DialogContent>   
            </Dialog>           


            {/* Thank you snackbar */}
            <Snackbar
                  anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                  }}
                  open={thanksSnackOpen}
                  autoHideDuration={1000}
                  onClose={handleThanksSnackClose}
                  message="Thank you!"
                  action={
                  <React.Fragment>
                      <Button color="primary" size="small" onClick={handleThanksSnackClose} style={{ color: '#ffffff' }} >
                          Close
                      </Button>

                  </React.Fragment>
                  }
              />
    
    
    </React.Fragment>
  );
}
