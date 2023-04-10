import React, { useState, useEffect } from "react";
import { Divider, ListItem, Dialog, Fade, DialogContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { useQuery, useMutation  } from '@apollo/client';
import gql from 'graphql-tag';

import CategoryListItemContent from './categoryListItemContent.js';
import TriviaCard from './triviaCard.js';
import { useAuth } from "gatsby-theme-firebase";

import { isIOS, isMacOs } from "react-device-detect";

// ------------------------------------------------------------------------------------

// SELECT TRANSITION FROM OPTIONS BELOW

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
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

// ------------------------------------------------------------------------------------

    
export default function CategoryListItemDyn(props){

    const { category, staticData } = props;
    const { isLoading, isLoggedIn, profile } = useAuth();

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
                            
                    // Necessary to exclude on ios? Apparently yes.
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
                }
            )
    ));



    
    const classes = useStyles();
            
// -----------------------------------------------------------------------------------
    
    // Set max value for random number used in dynamic content fetch. Should be same as max random used in backend.
    
    const [open, setOpen] = React.useState(false);
    
    // NOT CURRENTLY USED: qualityCategory for content fetching. To implement, set value.
    const [qc, setQc] = React.useState(undefined);

    // Used to set first content circle within useEffect triggered by refetch()
    const [firstFetch, setFirstFetch] = useState(true);

    // Returns int from min to max-1
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };


    const categoryData = staticData.filter(function (row) {
        return  row.category == category;
    });
    
    function getNextStatic() {
        const nextContent = categoryData[getRandomArbitrary(0, categoryData.length)];
        return {
            question: nextContent.question, answer: nextContent.answer, category: nextContent.category, id: "STATIC",
        };
    };


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

    const { loading, error, data, refetch }
    = useQuery(APOLLO_QUERY,
       { variables: { category: category} }
       );

    const APOLLO_LOGSHOW = gql`
    mutation LogContentShow( $qid: String!, $correct: Int! )  {
        logContentShow( qid: $qid, correct: $correct)
    }
    `;
   
    const [logShow, { logShowData }] = useMutation(APOLLO_LOGSHOW);

    const APOLLO_LOGLIKE = gql`
    mutation LogContentLike( $qid: String! )  {
        logContentLike( qid: $qid )
    }
    `;
   
    const [logLike, { logLikeData }] = useMutation(APOLLO_LOGLIKE);

// -----------------------------------------------------------------------------------

    // currentContent points to correct basket
        // Dynamic data from alternating baskets A and B
        // Static data if dynamic basket in turn is empty (API call in progress or unsuccessful)
        // currentContent updated on dialog close
    
    
    // Initial value from static data, updates when useEffect is triggered by API call that in turn is triggered by new random number set in dialog close.
    const [usedContent, setUsedContent] = useState(getNextStatic);
    
    // DYNAMIC BASKETS
    const [dynamicA, setDynamicA] = useState( "NOT SET" );
    const [dynamicB, setDynamicB] = useState( "NOT SET" );
        // Boolean indicating which dynamic basket to update next
    const [updateAorNot, setUpdateA] = useState(true);
        // Content in turn - Start with A, same phase as updateAorNot
            // --> when A is used and exited, A is updated
    const [usedBasket, setUsedBasket] = useState("A");

// -----------------------------------------------------------------------------------

    const handleClickOpen = () => {
        setOpen(true);
        trackCustomEvent({
            category: "Trivia card - " + (isLoggedIn ? "SIGNED IN" : "NOT SIGNED IN"),
            action: "Open - " + category,
          });
    };

    const handleClose = (e) => {
        
        if(isLoggedIn){
            // answeredCorrectly is 0 by default. If new value is given (-1 or 1), change it.
            // contentId is usedContent.id by default
            let answeredCorrectly = 0;
            let contentId = usedContent.id;
            let contentLiked = contentLikedState;
            
            // contentId and answeredCorrectly updated if values given in callback
            // Updating contentId is probably redundant
            (!!e.contentId ? contentId = e.contentId : "");  
            (!!e.answeredCorrectly ? answeredCorrectly = e.answeredCorrectly : "");
            (!!e.contentLiked ? contentLiked = e.contentLiked : "");      

            if(contentId != "STATIC"){

                logShow({ variables: { qid: contentId, correct: answeredCorrectly} });

            }

            if(contentId != "STATIC" && contentLiked == true){

                logLike({ variables: { qid: contentId } });

            }
        }
        
        setTimeout(() => setOpen(false),200);

        // IF is logged in
        // Take info from onClose from triviaCard (correct, liked, suggestedC, suggestedQ, suggestedA, badTagged)
        // call logContentShow mutation
    };

    const [contentLikedState, setContentLikedState] = React.useState(false);

    const handleLike = () => {
        setContentLikedState(!contentLikedState)
    };



    

    const handleDialogExited = () => {
        // using onExited necessary to account for closing delay
            // Otherwise UI may update with new content on previous card
            // This probably only happens when Apollo fetches from cashe 
        
        // Rerun apollo query for next content
        refetch();
        
        
        // If next basket === "NOT SET" || "API ERROR" || "API LOADING"
            //  --> Used next static until resolved. Do not change "usedBasket"
        if(usedBasket === "A"){
            if ( !["NOT SET", "API ERROR", "API LOADING"].includes(dynamicB) ){
                setUsedContent(dynamicB);
                setUsedBasket("B");
            } else {
                setUsedContent(getNextStatic);
            }
        } else {
            if ( !["NOT SET", "API ERROR", "API LOADING"].includes(dynamicA) ){
                setUsedContent(dynamicA);
                setUsedBasket("A");
            } else {
                setUsedContent(getNextStatic);
            }
        }
    };
    
    // Update content of dynamic basket in turn when apollo query returns new data (triggered on dialog exited by new random variable)
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
                if(firstFetch) {
                    // Ensure that content is not changed if dialog already opened
                    if (!open) {
                        setUsedContent({question: data.oneRandomQuestion.question, answer: data.oneRandomQuestion.answer, category: data.oneRandomQuestion.category, id: data.oneRandomQuestion.id});
                    };
                    setFirstFetch(false);
                    // setRandom(getRandomArbitrary(0, maxRandom));
                    refetch();
                };
            };
        
        }, [data, error, loading]);

// -----------------------------------------------------------------------------------

    return(
        <React.Fragment>
            
            <ListItem button
                className={classes.listItem}
                onClick = {handleClickOpen}
                >
                <CategoryListItemContent category={category} />
            </ListItem>

                
            <Divider variant="inset" component="li" />

            <Dialog
                open={open}
                onClose={handleClose}
                onExited={handleDialogExited}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth={true}
                scroll="paper"
                TransitionComponent={Transition2}
                classes={{
                    paper: classes.dialog,
                    paperFullWidth: classes.dialog,
                  }}
            >
                <DialogContent
                    classes={{
                        root: classes.dialogCont,
                      }}
                > {/* --> enables scroll */} 
                    <TriviaCard
                        title= {usedContent.category}
                        contentQuestion = {usedContent.question}
                        contentAnswer = {usedContent.answer}
                        contentId = {usedContent.id}
                        onClose={handleClose}
                        onLike={handleLike}
                        />
               
                </DialogContent>   
            </Dialog>         
        </React.Fragment>
    
    );
} 

