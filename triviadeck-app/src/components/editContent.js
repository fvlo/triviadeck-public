import React from "react";
import { Box, Paper, makeStyles, Typography, Accordion, AccordionSummary, AccordionDetails, FormControl, FormHelperText, Select, TextField, FormControlLabel, Switch, Button } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LoginDialog from '../components/LoginDialog';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { useAuth } from "gatsby-theme-firebase";

export default function EditContent(props){

    const { category, question, answer, onClose } = props;
    const { isLoading, isLoggedIn, profile } = useAuth();

    const useStyles = makeStyles((theme) =>({
        popoverBox: {
            backgroundColor: theme.palette.primary.lightTint,
          },
        card: {
            backgroundColor: theme.palette.primary.lightTint,
          },
    }));
    
    const classes = useStyles();

    // Content disabled if user not logged in
    const contentDisabled = !isLoggedIn;

    // Handle accordion expanded state
    const [expanded, setExpanded] = React.useState(null);
    const handleExpandChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };


    // User input on category
    const [suggestedC, setSuggestedC] = React.useState(null);
    const [inputC, setInputC] = React.useState("");
    const [dropdownCDisabled, setDropdownCDisabled] = React.useState(false);
    const handleInputCChange = (event) => {
        setInputC(event.target.value);
      };
    const handleCSubmitChange = (event) => {
        (event.target.checked ? 
            setSuggestedC(inputC)
            :
            setSuggestedC(null)
            );
            setDropdownCDisabled(!dropdownCDisabled);
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

    // User input on review need
    const [badTagged, setBadTagged] = React.useState(false);
    const handleBadTaggedChange = (event) => {
        setBadTagged(event.target.checked);
      };


    // Submit button disabled state
    const submitDisabled = !Boolean(suggestedC + suggestedQ + suggestedA + badTagged);
    
    // Handle clicking submit button
    const handleSubmit = () => {
        trackCustomEvent({
            category: "Edit modal - " + (isLoggedIn ? "SIGNED IN" : "NOT SIGNED IN"),
            action: "Submit",
          });
        onClose({
            "containsInfo": (Boolean(suggestedC + suggestedQ + suggestedA + badTagged)),
            "suggestedC": suggestedC,
            "suggestedQ": suggestedQ,
            "suggestedA": suggestedA,
            "badTagged": badTagged,
        });
        
    };

    // Log in window state
    const [loginOpen, setLoginOpen] = React.useState(false);
    const handleLoginClickOpen = () => {
        trackCustomEvent({
            category: "Log in open",
            action: "From edit modal",
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
        <React.Fragment>
                    <Box className={classes.popoverBox} p={1} display="flex">
                        <Paper className={classes.card} elevation={0}>
                        {(!isLoggedIn ? 
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Typography variant="body2">Please</Typography>
                            <Button size = "small" color="primary" style={{ backgroundColor: 'transparent' }} onClick = {handleLoginClickOpen}>Log in</Button>
                            <Typography variant="body2">to contribute</Typography>
                        </Box>
                        : "")}
                            <Accordion disabled={contentDisabled} expanded={expanded === 'panel1'} onChange={handleExpandChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color="secondary" />}
                                aria-controls="change-category"
                                id="change-category"
                                >
                                    <Typography variant="body2" color="textPrimary">Suggest other category</Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <FormControl variant="outlined" fullWidth disabled={dropdownCDisabled}>
                                        
                                        <Select
                                            native
                                            value={inputC}
                                            onChange={handleInputCChange}
                                            inputProps={{
                                                name: 'suggested category',
                                                id: 'suggested-category',
                                            }}
                                                                                        
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={"Geography and places"} hidden={"Geography and places" === category}>Geography and places</option>
                                            <option value={"Entertainment and games"} hidden={"Entertainment and games" === category}>Entertainment and games</option>
                                            <option value={"History and society"} hidden={"History and society" === category}>History and society</option>
                                            <option value={"Science and nature"} hidden={"Science and nature" === category}>Science and nature</option>
                                            <option value={"Art and literature"} hidden={"Art and literature" === category}>Art and literature</option>
                                            <option value={"Sports and hobbies"} hidden={"Sports and hobbies" === category}>Sports and hobbies</option>
                                        </Select>
                                        <FormHelperText>Suggested category</FormHelperText>
                                    </FormControl>

                                    <FormControlLabel
                                        control={<Switch color="secondary" />}
                                        label="Suggest"
                                        labelPlacement="bottom"
                                        onChange={handleCSubmitChange}
                                        
                                        // Disable if no input has been given
                                        disabled = {!inputC}
                                        />

                                </AccordionDetails>
                            </Accordion>

                            <Accordion disabled={contentDisabled} expanded={expanded === 'panel2'} onChange={handleExpandChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color="secondary" />}
                                aria-controls="improve-answer"
                                id="improve-answer"
                                >
                                    <Typography variant="body2" color="textPrimary">Improve answer</Typography>
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
                                                maxlength: CHARACTER_LIMIT_A,
                                                autocomplete: 'off',
                                              }}
                                            />

                                    <FormControlLabel
                                        control={<Switch color="secondary" />}
                                        label="Suggest"
                                        labelPlacement="bottom"
                                        onChange={handleASubmitChange}

                                        // Disable if no input has been given
                                        disabled = {!inputA}
                                        />
                                </AccordionDetails>
                            </Accordion>

                            <Accordion disabled={contentDisabled} expanded={expanded === 'panel3'} onChange={handleExpandChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color="secondary" />}
                                aria-controls="improve-question"
                                id="improve-question"
                                >
                                    <Typography variant="body2" color="textPrimary">Improve question (spelling or formatting)</Typography>
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
                                            maxlength: CHARACTER_LIMIT_Q,
                                            autocomplete: 'off',
                                          }}
                                        />

                                    <FormControlLabel
                                        control={<Switch color="secondary" />}
                                        label="Suggest"
                                        labelPlacement="bottom"
                                        onChange={handleQSubmitChange}

                                        // Disable if no input has been given
                                        disabled = {!inputQ}
                                        />
                                </AccordionDetails>
                            </Accordion>

                            <Accordion disabled={contentDisabled} expanded={expanded === 'panel4'} onChange={handleExpandChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color="secondary" />}
                                aria-controls="tag-for-review"
                                id="tag-for-review"
                                >
                                    <Typography variant="body2" color="textPrimary">Tag bad content for admin review</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControlLabel
                                        control={<Switch color="secondary" />}
                                        label="This question is not good and should probably be removed"
                                        labelPlacement="start"
                                        onChange={handleBadTaggedChange}
                                        />
                                </AccordionDetails>
                            </Accordion>

                            <Box m={1} align="right">
                                <Button color="default" 
                                    size="small" 
                                    style={{ backgroundColor: 'transparent' }}
                                    onClick={onClose}
                                    >
                                        Cancel
                                    </Button>
                                <Button color="secondary"
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
                    </Box>
                  
        
                    <LoginDialog isOpen = {loginOpen} onChange = {handleLoginClose}></LoginDialog>

                    
        </React.Fragment>
    
    );
} 
