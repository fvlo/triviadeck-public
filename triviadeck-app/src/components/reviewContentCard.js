    import React from "react";
    import { Divider, Box, Checkbox, Grid, Paper, Slider, Typography, Accordion, AccordionSummary, AccordionDetails, FormControl, Select, TextField, FormControlLabel, Switch, Button } from "@material-ui/core";
    import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
    import LoginDialog from './LoginDialog';
    import useStyles from './styles.js';
    import CategoryAvatars from './categoryAvatars.js';
    import { StaticImage } from "gatsby-plugin-image"
    import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
    
    
    import { useAuth } from "gatsby-theme-firebase";
    import theme from "../gatsby-theme-material-ui-top-layout/theme";
    
    export default function ReviewContent(props){
    
        const { category, question, answer, qid, onClose } = props;
        const { isLoading, isLoggedIn, profile } = useAuth();
        const IMG_BLANK_CANVAS = '../../static/blank_canvas.svg';
        
        const classes = useStyles();
    
        // Content disabled if user not logged in
        const contentDisabled = !isLoggedIn;
        
         // Handle accordion expanded state
        const [expanded, setExpanded] = React.useState(null);
        const handleExpandChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        };
    
    
        // User input on category
            // suggestedC is in this implementation redundant as it is effectively equal to inputC
        const [suggestedC, setSuggestedC] = React.useState(null);
        const [inputC, setInputC] = React.useState("");
        const handleInputCChange = (event) => {
            setInputC(event.target.value);
            setSuggestedC(event.target.value);
          };      
       
        // User input on question
        const [suggestedQ, setSuggestedQ] = React.useState(null);
        const [inputQ, setInputQ] = React.useState(null);
        const [textFieldQDisabled, setTextFieldQDisabled] = React.useState(false);
        const handleInputQChange = (event) => {
            setInputQ(event.target.value);
          };
        const handleQSubmitChange = (event) => {
            (event.target.checked ? 
                setSuggestedQ(inputQ)
                :
                setSuggestedQ(null)
                );
            setTextFieldQDisabled(!textFieldQDisabled);
          };
        
        // User input on answer
        const [suggestedA, setSuggestedA] = React.useState(null);
        const [inputA, setInputA] = React.useState(null);
        const [textFieldADisabled, setTextFieldADisabled] = React.useState(false);
        const handleInputAChange = (event) => {
            setInputA(event.target.value);
          };
        const handleASubmitChange = (event) => {
            (event.target.checked ? 
                setSuggestedA(inputA)
                :
                setSuggestedA(null)
                );
            setTextFieldADisabled(!textFieldADisabled);
          };
    
        // User input on content quality
        const [estimatedQuality, setEstimatedQuality] = React.useState(5);
        const handleEstimatedQualityChange = (event, value) => {
            setEstimatedQuality(value);
          };


        // Quality slider
        const sliderMarks = [
            {
              key: 0,
                value: 0,
              label: 'Terrible',
            },

            {
                key: 1,
              value: 5,
              label: 'Acceptable',
            },

            {
                key: 2,
                value: 10,
                label: 'Excellent',
                },
          ];


        const [contentOkchecked, setContentOkChecked] = React.useState(false);

        const handleContentOkChange = (event) => {
            setContentOkChecked(event.target.checked);
        };


        // Submit button disabled state
        const submitDisabled = Boolean(!contentOkchecked);
        
        // Handle clicking submit button
        const handleSubmit = () => {
            
            trackCustomEvent({
                category: "Review card - " + (isLoggedIn ? "SIGNED IN" : "NOT SIGNED IN"),
                action: "Submit",
              });
            onClose({
                "containsInfo": (Boolean(suggestedC + suggestedQ + suggestedA + estimatedQuality)),
                "suggestedC": suggestedC,
                "suggestedQ": suggestedQ,
                "suggestedA": suggestedA,
                "estimatedQuality" : estimatedQuality,
                "qid" : qid,
                "currentC": category,
                "currentQ": question,
                "currentA": answer,
            });
            
        };
    
    
        // Log in window state
        const [loginOpen, setLoginOpen] = React.useState(false);
        const handleLoginClickOpen = () => {
            trackCustomEvent({
                category: "Log in open",
                action: "From Review card",
              });
            setLoginOpen(true);       
        };
        const handleLoginClose = () => {
            setLoginOpen(false);
        };
    
        
        // Character limit for user input fields
        const CHARACTER_LIMIT_Q = 200;
        const CHARACTER_LIMIT_A = 50;
    
    
        // -----------------------------------------------------------------------------------
    
        return(

            (question == "Loading" ? 
                <React.Fragment>
                    <Paper elevation={0}>
                        <Grid item xs={12} container >
                    
                            <Grid item xs={12}>

                                <Typography
                                variant="h6"
                                align="center"
                                color="primary"
                                >
                                Oops!
                            
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Box
                                display="flex" 
                                justifyContent="center"
                                m={2}
                                >
                                    <StaticImage
                                        src={IMG_BLANK_CANVAS}
                                        alt="Triviadeck"
                                        placeholder="blurred"
                                        layout="constrained"
                                        height={100}
                                        loading = "eager"
                                        quality = {50}
                                    />
                                </Box>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Typography
                                variant="body2"
                                align="center"
                                >
                                There was a problem loading the content. Please try again.
                                </Typography>
                            
                            </Grid>
                            
                        </Grid>
                    </Paper>
                </ React.Fragment>
                            
                :

                        
            // Show this if question is not "Loading"
            <React.Fragment>
                            <Paper elevation={0}>
                            {(!isLoggedIn ? 
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Typography variant="body2">Please</Typography>
                                <Button size = "small" color="primary" style={{ backgroundColor: 'transparent' }} onClick = {handleLoginClickOpen}>Log in</Button>
                                <Typography variant="body2">to contribute</Typography>
                            </Box>
                            : "")}
{/* ------------------------------------------------------------------------------------------------------------------------------ */}

                        
                        
                        <Typography variant="subtitle1" color="primary" align="center">Review trivia content</Typography>
                        <Divider variant="middle" />
                        
                        
                        <Box m = {2} >
                            <Box mb = {2} >
                                <Typography variant="body2" color="secondary" align="center">Does this look right?</Typography>
                            </Box>
                        <Accordion disabled={contentDisabled} expanded={expanded === 'panel1'} onChange={handleExpandChange('panel1')} style={{ backgroundColor: theme.palette.primary.lightTint }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color="secondary" />}
                                aria-controls="improve-question"
                                id="improve-question"
                                >
                                    <Typography variant="subtitle2" color="secondary">Q: </Typography>
                                    <Typography variant="body2" color="textPrimary">{ (!suggestedQ ? question : suggestedQ) }</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Improved question"
                                        multiline
                                        rows={4}
                                        defaultValue={question}
                                        onChange={handleInputQChange}
                                        variant="outlined"
                                        fullWidth
                                        disabled={textFieldQDisabled}
                                        inputProps={{
                                            maxLength: CHARACTER_LIMIT_Q,
                                            autoComplete: 'off',
                                          }}
                                        />

                                    <FormControlLabel
                                        control={<Switch size = "small" color="secondary" />}
                                        label="Suggest"
                                        labelPlacement="bottom"
                                        onChange={handleQSubmitChange}

                                        // Disable if no input has been given
                                        disabled = {!inputQ}
                                        />
                            </AccordionDetails>
                        </Accordion>
                        
                        
                        
                        <Accordion disabled={contentDisabled} expanded={expanded === 'panel2'} onChange={handleExpandChange('panel2')} style={{ backgroundColor: theme.palette.primary.lightTint }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color="secondary" />}
                                aria-controls="improve-answer"
                                id="improve-answer"
                                >
                                    <Typography variant="subtitle2" color="secondary">A: </Typography>
                                    <Typography variant="body2" color="textPrimary">{ (!suggestedA ? answer : suggestedA) }</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TextField
                                            id="outlined-multiline-static"
                                            label="Improved answer"
                                            defaultValue={answer}
                                            onChange={handleInputAChange}
                                            variant="outlined"
                                            fullWidth
                                            disabled={textFieldADisabled}
                                            inputProps={{
                                                maxLength: CHARACTER_LIMIT_A,
                                                autoComplete: 'off',
                                              }}
                                            />

                                    <FormControlLabel
                                        control={<Switch size = "small" color="secondary" />}
                                        label="Suggest"
                                        labelPlacement="bottom"
                                        onChange={handleASubmitChange}

                                        // Disable if no input has been given
                                        disabled = {!inputA}
                                        />
                                </AccordionDetails>
                        </Accordion>
                        

                        
                        <Accordion disabled={contentDisabled} expanded={expanded === 'panel3'} onChange={handleExpandChange('panel3')} style={{ backgroundColor: theme.palette.primary.lightTint }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color="secondary" />}
                                aria-controls="improve-answer"
                                id="improve-answer"
                                >
                                    <Typography variant="subtitle2" color="secondary">C: </Typography>
                                    <Typography variant="body2" color="textPrimary">{ (!suggestedC ? category : suggestedC) }</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box m = {0} display="flex" flexDirection="row">
                                        <Box 
                                            mr = { 1 }
                                            display="flex" 
                                            flexDirection="row" 
                                            alignItems="center">
                                                <CategoryAvatars category={( !inputC ? category : inputC )} />
                                        </Box>
                                        <FormControl variant="outlined" fullWidth disabled={contentDisabled }>                               
                                        
                                            <Select
                                                native
                                                value={( !inputC ? category : inputC )}
                                                onChange={handleInputCChange}
                                                inputProps={{
                                                    name: 'suggested category',
                                                    id: 'suggested-category',
                                                }}
                                                                                            
                                            >
                                                <option value={"Geography and places"} >Geography and places</option>
                                                <option value={"Entertainment and games"} >Entertainment and games</option>
                                                <option value={"History and society"} >History and society</option>
                                                <option value={"Science and nature"} >Science and nature</option>
                                                <option value={"Art and literature"} >Art and literature</option>
                                                <option value={"Sports and hobbies"} >Sports and hobbies</option>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </AccordionDetails>
                        </Accordion>
                        </Box>

                        


                        <Divider variant="middle" />


                        
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                    <Box m = {2}>
                        <Typography variant="body2" color="secondary" align="center">Is this a good trivia question?</Typography>
                        
                        
                        <Slider
                            defaultValue={5}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks = {sliderMarks}
                            min={0}
                            max={10}
                            disabled={contentDisabled}
                            onChangeCommitted = {handleEstimatedQualityChange}
                        />


                    </Box>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                                
                                <Box mb = {2} 
                                    display="flex" 
                                    flexDirection="row" 
                                    justifyContent="flex-end" >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={contentOkchecked}
                                            onChange={handleContentOkChange}
                                            color="primary"
                                            disabled={contentDisabled}
                                        />
                                        }
                                        label="Looks good!"
                                    />
                                </Box>

                                <Box m={1} align="right">
                                    <Button color="default" 
                                        size="small" 
                                        style={{ backgroundColor: 'transparent' }}

                                        onClick={onClose}
                                        >
                                            Cancel
                                        </Button>
                                    <Button color="primary"
                                        size="small"
                                        variant="outlined"
                                        style={{ backgroundColor: 'transparent' }}
                                        onClick={handleSubmit}
                                        disabled={submitDisabled}
                                        >
                                            Submit
                                        </Button>
                                </Box>
                                
                            </Paper>
                      
            
                        <LoginDialog isOpen = {loginOpen} onChange = {handleLoginClose}></LoginDialog>
    
                        
            </React.Fragment>

            )
        
        );
    } 
    