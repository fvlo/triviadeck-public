import React from 'react';

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button, Divider, Popover, Snackbar} from '@material-ui/core';

import { useAuth } from "gatsby-theme-firebase";

import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PenIcon2 from '../components/icons/penIcon2.js';
import CategoryAvatars from '../components/categoryAvatars.js';
import EditContent from '../components/editContent.js';

import { useMutation  } from '@apollo/client';
import gql from 'graphql-tag';

import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const useStyles = makeStyles((theme) => ({
  
  
  root: {
    // fullScreen: 'true', [has no function]
    // height: 500,
  },
  
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
  expandButton: {
    marginLeft: 'auto',
    color: theme.palette.primary.main,
  },

  iconButtonLabel: {
    display: 'flex',
    flexDirection: 'row',
  },

  button: {
    color: theme.palette.primary.main,
  },

  secondaryText: {
    color: theme.palette.text.secondary,
  },

  

}));



export default function TriviaCard(props) {
  
  const { title, contentQuestion, contentAnswer, contentId, onClose, onLike } = props;
  const { isLoading, isLoggedIn, profile } = useAuth();
    
  const classes = useStyles();  
  const [expanded, setExpanded] = React.useState(false);
  const [showExpandLabel, setShowExpandLabel] = React.useState(true)
  const [likeIconColor, setLikeIconColor] = React.useState("action")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const editOpen = Boolean(anchorEl);
  const [contentLiked, setContentLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setShowExpandLabel(!showExpandLabel);
  };

  const handleLikeClick = () => {
    
    if(isLoggedIn){
        if (likeIconColor == "action") {
          trackCustomEvent({
            category: "Like click",
            action: "Liked",
          });

          setLikeIconColor("secondary");
          setContentLiked(true);
          onLike();
        } else {
          trackCustomEvent({
            category: "Like click",
            action: "Like canceled",
          });
          
          setLikeIconColor("action"); 
          setContentLiked(false);
          onLike();
        }

        // Callback to set contentLiked in parent. Necessary if dialog is closed through backdrop click.
    } else {
      setPleaseLoginSnackOpen(true);
    }

  };


  const handleEditClick = (event) => {
    trackCustomEvent({
      category: "Edit modal - " + (isLoggedIn ? "SIGNED IN" : "NOT SIGNED IN"),
      action: "Open",
    });

    setAnchorEl(event.currentTarget);
  };

  const handleEditClose = (e) => {
    setAnchorEl(null);

    (e.containsInfo ? setEditDisabled(true) : "");
    (e.containsInfo ? setEditThanksSnackOpen(true) : "");

    if(e.badTagged){
      // Call badTagged mutation
      logBadTag({ variables: { qid: contentId } });
    }

    if(e.suggestedC){
      logSuggestedX( { variables: { qid: contentId, suggestionType: "suggestedC", suggestion: e.suggestedC, current: title } })
    }

    if(e.suggestedQ){
      logSuggestedX( { variables: { qid: contentId, suggestionType: "suggestedQ", suggestion: e.suggestedQ, current: contentQuestion } })
    }

    if(e.suggestedA){
      logSuggestedX( { variables: { qid: contentId, suggestionType: "suggestedA", suggestion: e.suggestedA, current: contentAnswer } })
    }

  };

  const [editDisabled, setEditDisabled] = React.useState(false);

  // Managing "login please" message snackbar state
  const [pleaseLoginSnackOpen, setPleaseLoginSnackOpen] = React.useState(false);
  const handlePleaseLoginSnackClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setPleaseLoginSnackOpen(false);
      };
  
  // Managing edit success snackbar state
  const [editThanksSnackOpen, setEditThanksSnackOpen] = React.useState(false);
  const handleEditThanksSnackClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setEditThanksSnackOpen(false);
      };

  
  
  
  // Set to -1 or 1 depending on clicked close button
  const handleIncorrectClose = () => {
        onClose({
          "contentId" : contentId,
          "answeredCorrectly" : -1,
          "contentLiked" : contentLiked,
        });
  };
  const handleCorrectClose = () => {
      onClose({
          "contentId" : contentId,
          "answeredCorrectly" : 1,
          "contentLiked" : contentLiked,
        });
  };

  const APOLLO_LOGBADTAG = gql`
  mutation LogContentBadTag( $qid: String! )  {
      logContentBadTag( qid: $qid )
  }
  `;

  const [logBadTag, { logBadTagData }] = useMutation(APOLLO_LOGBADTAG);

  const APOLLO_LOGSUGGESTEDX = gql`
  mutation LogSuggestedX( $qid: String!, $suggestionType: String!, $suggestion: String!, $current: String! )  {
      logSuggestedX( qid: $qid, suggestionType: $suggestionType, suggestion: $suggestion, current: $current )
  }
  `;

  const [logSuggestedX, { logSuggestedXData }] = useMutation(APOLLO_LOGSUGGESTEDX);



  return (
    <Card className={classes.root}>
      <CardHeader
        
        avatar = {
          <CategoryAvatars category = {title} />
        }

        title = {title}
        titleTypographyProps = {{variant:"body2", color:"textPrimary"}}
      />

      <CardContent>
        
        <Divider />
          
        {/* AD SECTION BEGINS */}

              {/* <Box  
                display="flex" 
                marginTop={0.5}
                marginBottom={0.5}
              >
                <Container fixed align="center" disableGutters={true} >
                  <Typography component="div"  style={{ backgroundColor: 'hotpink', height: '100px', width: '300px' }} />
                </Container>
                </Box>
              <Divider />    */}

        {/* AD SECTION ENDS */}

        <Box  
            display="flex" 
            marginTop={3}
            marginBottom={1}
        >
            
            <Typography variant="body1" color="textPrimary" component="p"> 
              { contentQuestion }
            </Typography>
        </Box>
        
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton aria-label="add to favorites" onClick={handleLikeClick} style={{ backgroundColor: 'transparent' }} >
          <FavoriteIcon color={likeIconColor}/>
        </IconButton>

        <IconButton aria-label="improve question" style={{ backgroundColor: 'transparent' }} onClick={handleEditClick} disabled = {editDisabled}>
          <PenIcon2 />
        </IconButton>
        <Popover 
            open={editOpen}
            anchorEl={anchorEl}
            onClose={handleEditClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
          >
          
            <EditContent 
              category={title} 
              question={contentQuestion} 
              answer={contentAnswer} 
              onClose={handleEditClose}/>
          

        </Popover>
        
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          className = {classes.expandButton}
          classes={{label: classes.iconButtonLabel}}
          style={{ backgroundColor: 'transparent' }}
        >
          <Typography variant="button" color="primary" component="p">
            { showExpandLabel ? "Show answer" : "Hide answer" }
          </Typography>
          <ExpandMoreIcon 
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            />
        </IconButton>
      </CardActions>

      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box  
            display="flex" 
            marginTop={1}
            marginBottom={1}
          >
            
            <Typography variant="body1" color="textPrimary" component="p">
              { contentAnswer }
            </Typography>
          </Box>

          <Divider />
          <Box  
          display="flex" 
          justifyContent="center"
          marginTop={2}
          
          >
            <Grid
              container
              direction="row"
              justify = "space-evenly"
            > 
              <Grid item xs={12} >
                <Box 
                  display="flex"
                  justifyContent="center"
                  className = {classes.secondaryText}
                >
                  Answered correctly?
                </Box>
              </Grid>

              <Grid item xs={6} >
                <Box 
                  display="flex"
                  justifyContent="center"
                >
                  <Button className = {classes.button} onClick={handleIncorrectClose} style={{ backgroundColor: 'transparent' }}>Nope</Button>
                </Box>
              </Grid>

              <Grid item xs={6} >
                <Box 
                  display="flex"
                  justifyContent="center"
                >
                  <Button className = {classes.button} onClick={handleCorrectClose} style={{ backgroundColor: 'transparent' }}>Correct</Button>
                </Box>
              </Grid>
                
              
            </Grid>
          </Box>
          
          

        </CardContent>
      </Collapse>
      
      {/* Edit success snackbar */}
      <Snackbar
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
            open={editThanksSnackOpen}
            autoHideDuration={3000}
            onClose={handleEditThanksSnackClose}
            message="Thank you for contributing!"
            action={
            <React.Fragment>
                <Button color="primary" size="small" onClick={handleEditThanksSnackClose} style={{ color: '#ffffff' }} >
                    Close
                </Button>

            </React.Fragment>
            }
        />

        {/* "Please log in" -message snackbar */}
      <Snackbar
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
            open={pleaseLoginSnackOpen}
            autoHideDuration={3000}
            onClose={handlePleaseLoginSnackClose}
            message="Please log in to contribute"
            action={
            <React.Fragment>
                <Button color="primary" size="small" onClick={handlePleaseLoginSnackClose} style={{ color: '#ffffff' }} >
                    Close
                </Button>

            </React.Fragment>
            }
        />
    </Card>
  );
}