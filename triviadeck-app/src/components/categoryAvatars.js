import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { Avatar } from "@material-ui/core";

import GeographyIcon from '../components/icons/geographyIcon.js';
import EntertainmentIcon from '../components/icons/entertainmentIcon.js';
import HistoryIcon from '../components/icons/historyIcon.js';
import ScienceIcon from '../components/icons/scienceIcon.js';
import ArtIcon from '../components/icons/artIcon.js';
import SportsIcon from '../components/icons/sportsIcon.js';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


const useStyles = makeStyles((theme) => ({
    TriviaListItemAvatarAvatarGeo: {
        backgroundColor: theme.palette.triviaBlue.main,
        color: theme.palette.getContrastText(theme.palette.triviaBlue.main),
        //border: `2px solid ${"#0f5499"}`,
    },

    TriviaListItemAvatarAvatarEnt: {
        backgroundColor: theme.palette.triviaRed.main,
        color: theme.palette.getContrastText(theme.palette.triviaRed.main),
        //border: `2px solid ${"#990f3d"}`,
    },

    TriviaListItemAvatarAvatarHis: {
        backgroundColor: theme.palette.triviaYellow.main,
        color: theme.palette.getContrastText(theme.palette.triviaYellow.main),
        //border: `2px solid ${"#ffec1a"}`,
    },

    TriviaListItemAvatarAvatarSci: {
        backgroundColor: theme.palette.triviaGreen.main,
        color: theme.palette.getContrastText(theme.palette.triviaGreen.main),
        //border: `2px solid ${"#00994d"}`,
    },

    TriviaListItemAvatarAvatarArt: {
        backgroundColor: theme.palette.triviaPurple.main,
        color: theme.palette.getContrastText(theme.palette.triviaPurple.main),
        //border: `2px solid ${"#593380"}`,
    },

    TriviaListItemAvatarAvatarSpo: {
        backgroundColor: theme.palette.triviaOrange.main,
        color: theme.palette.getContrastText(theme.palette.triviaOrange.main),
        //border: `2px solid ${"#ff8833"}`,
    },

    TriviaListItemAvatarAvatarQuestionmark: {
        backgroundColor: theme.palette.primary.lightTint,
        color: theme.palette.getContrastText(theme.palette.primary.lightTint),
        //border: `2px solid ${"#ff8833"}`,
    },
}));


export default function CategoryAvatars(props) {

    const { category } = props;
    const classes = useStyles();


    
    function AvatarGeo(){
        return(
            <Avatar className={classes.TriviaListItemAvatarAvatarGeo} >
                <GeographyIcon />
            </Avatar>
        )
    }

    function AvatarEnt(){
    return(
        <Avatar className={classes.TriviaListItemAvatarAvatarEnt} >
            <EntertainmentIcon />
        </Avatar>
        )
    }

    function AvatarHis(){
    return(
        <Avatar className={classes.TriviaListItemAvatarAvatarHis} >
            <HistoryIcon />
        </Avatar>
        )
    }

    function AvatarSci(){
    return(
        <Avatar className={classes.TriviaListItemAvatarAvatarSci} >
            <ScienceIcon />
        </Avatar>
        )
    }

    function AvatarArt(){
    return(
        <Avatar className={classes.TriviaListItemAvatarAvatarArt} >
            <ArtIcon />
        </Avatar>
        )
    }

    function AvatarSpo(){
    return(
        <Avatar className={classes.TriviaListItemAvatarAvatarSpo} >
            <SportsIcon />
        </Avatar>
        )
    }
    function AvatarQuestionmark(){
        return(
            <Avatar className={classes.TriviaListItemAvatarAvatarQuestionmark} >
                <HelpOutlineIcon />
            </Avatar>
            )
        }

    const catAvatarMap = {
    "Geography and places": AvatarGeo(), 
    "Entertainment and games": AvatarEnt(),
    "History and society": AvatarHis(),
    "Science and nature": AvatarSci(),
    "Art and literature": AvatarArt(),
    "Sports and hobbies": AvatarSpo(),
    
    // Return questionmark avatar
    "Questionmark": AvatarQuestionmark(),
    // Return empty string if input is empty
    "": "",
    }

    // ---------------------------------------

    return (
        catAvatarMap[category]
    );



}
