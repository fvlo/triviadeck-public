import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

import { navigate } from "gatsby";
import theme from '../gatsby-theme-material-ui-top-layout/theme.js'

import PenIcon from './icons/penIcon.js';
import TextIcon from './icons/textIcon.js';
import CardIcon from './icons/cardIcon.js';



export default function LabelBottomNavigation() {    

    let pathname = 0;
    if (typeof window !== `undefined`) {
      pathname = window.location.pathname;
    };
  
  
  const [value, setValue] = React.useState(pathname);  
    
  const useStyles = makeStyles({
    bottomNav: {
    
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  
    bottomNavAct: {
   
      maxWidth: '100%',
      color: theme.palette.grey[200],
      "&$selected": {
        color: theme.palette.grey[200],
        borderTop: `2px solid ${theme.palette.background.default}`,
      }
  
    },
    selected: {},
  });
  
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    navigate(newValue)
    setValue( newValue );
  };
  
  
  return (
  
  
  
    <Hidden smUp>
    <BottomNavigation 
      value={value}
      onChange= {handleChange} 
      className={classes.bottomNav}

      >
      
      <BottomNavigationAction 
        label="Cards" 
        value="/" 
        icon={<CardIcon />}
        classes={{
          root: classes.bottomNavAct,
          selected: classes.selected,
        }}
        />
      <BottomNavigationAction 
        label="Contribute" 
        value= "/contribute/"
        icon={<PenIcon />} 
        classes={{
          root: classes.bottomNavAct,
          selected: classes.selected,
        }}
        />
      <BottomNavigationAction 
        label="Community" 
        value= "/community/" 
        icon={<TextIcon />} 
        classes={{
          root: classes.bottomNavAct,
          selected: classes.selected,
        }}
        />

    </BottomNavigation>
  </Hidden>
    
  );
}
        
