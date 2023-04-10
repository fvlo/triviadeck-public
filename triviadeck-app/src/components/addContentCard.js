    import React from "react";
    import { Divider, Box, Paper, Typography, FormControl, Select, TextField, Button } from "@material-ui/core";
    import LoginDialog from '../components/LoginDialog';
    import CategoryAvatars from '../components/categoryAvatars.js';
    import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
    
    
    import { useAuth } from "gatsby-theme-firebase";
    
    export default function AddContent(props){
    
        const { onClose } = props;
        const { isLoading, isLoggedIn, profile } = useAuth();
    
        
        // Content disabled if user not logged in
        const contentDisabled = !isLoggedIn;
    
    
    
        // User input on category
        const [inputC, setInputC] = React.useState("");
        const handleInputCChange = (event) => {
            setInputC(event.target.value);
          };

        
        // User input on question
        const [inputQ, setInputQ] = React.useState(null);
        const handleInputQChange = (event) => {
            setInputQ(event.target.value);
          };
        

        // User input on answer
        const [inputA, setInputA] = React.useState(null);
        const handleInputAChange = (event) => {
            setInputA(event.target.value);
          };

    
    
        // Submit button disabled state
        const submitDisabled = Boolean(!inputQ + !inputA + !inputC);
        
        // Handle clicking submit button
        const handleSubmit = () => {
            trackCustomEvent({
                category: "Add card - " + (isLoggedIn ? "SIGNED IN" : "NOT SIGNED IN"),
                action: "Submit",
              });
            onClose({
                "containsInfo": (Boolean(inputC + inputQ + inputA )),
                "suggestedC": inputC,
                "suggestedQ": inputQ,
                "suggestedA": inputA,
            });
            
        };
    
    
        // Log in window state
        const [loginOpen, setLoginOpen] = React.useState(false);
        const handleLoginClickOpen = () => {
            trackCustomEvent({
                category: "Log in open",
                action: "From Add card",
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
                            <Paper elevation={0}>
                            {(!isLoggedIn ? 
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Typography variant="body2">Please</Typography>
                                <Button size = "small" color="primary" style={{ backgroundColor: 'transparent' }} onClick = {handleLoginClickOpen}>Log in</Button>
                                <Typography variant="body2">to contribute</Typography>
                            </Box>
                            : "")}
{/* ------------------------------------------------------------------------------------------------------------------------------ */}

                        

                        <Typography variant="subtitle1" color="primary" align="center">Add new trivia content</Typography>
                        <Divider variant="middle" />
                        <Box m = {2}>
                            <Typography variant="subtitle2" color="primary">Question</Typography>
                            <TextField
                                id="outlined-multiline-static"
                                label="Add question"
                                multiline
                                rows={4}
                                onChange={handleInputQChange}
                                variant="outlined"
                                fullWidth
                                disabled={contentDisabled}
                                inputProps={{
                                    maxLength: CHARACTER_LIMIT_Q,
                                    form: {
                                        autoComplete: 'off',
                                    },
                                    }}
                                />
                        </Box>

                        <Box m = {2}>
                            <Typography variant="subtitle2" color="primary">Answer</Typography>
                            <TextField
                                id="outlined-multiline-static"
                                label="Add answer"
                                onChange={handleInputAChange}
                                variant="outlined"
                                fullWidth
                                disabled={contentDisabled}
                                inputProps={{
                                    maxLength: CHARACTER_LIMIT_A,
                                    autoComplete: 'off',
                                    }}
                                />
                        </Box>


                        <Box m = {2} >
                            <Typography variant="subtitle2" color="primary">Category</Typography>
                            
                        <Box m = {0} display="flex" flexDirection="row">
                            <Box 
                                mr = { !inputC ? 0 : 1 }
                                display="flex" 
                                flexDirection="row" 
                                alignItems="center">
                                    <CategoryAvatars category={inputC} />
                            </Box>
                            <FormControl variant="outlined" fullWidth disabled={contentDisabled}>                               
                            
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
                                    <option value={"Geography and places"} >Geography and places</option>
                                    <option value={"Entertainment and games"} >Entertainment and games</option>
                                    <option value={"History and society"} >History and society</option>
                                    <option value={"Science and nature"} >Science and nature</option>
                                    <option value={"Art and literature"} >Art and literature</option>
                                    <option value={"Sports and hobbies"} >Sports and hobbies</option>
                                </Select>
                            </FormControl>
                            
                            </Box>
                        </Box>
                        <Divider variant="middle" />
                        <Box m = {1}>
                            <Typography variant="body2" color="textSecondary" align="center">Content is reviewed before use</Typography>
                        </Box>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                                
    
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
            
                        <LoginDialog isOpen = {loginOpen} onChange = {handleLoginClose}></LoginDialog>
    
                        
            </React.Fragment>
        
        );
    } 
    