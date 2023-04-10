import { createMuiTheme, colors } from "@material-ui/core";

// https://docs.google.com/spreadsheets/d/1LQU8o2pr7G5v4dOCOCj0LGFQLlz1UQhIHJRsYjCNczU/edit#gid=0
// https://htmlcolorcodes.com/color-picker/
const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#00174D`,
      lightTint: `#dfe2e9`,
      lightTint2: `#808ba6`, //Darker than lightTint
      darkShade: `#000e30`,
      
      // From neutral scheme of main 
      gradiantBrighter1: '#00044d',
      gradiantBrighter2: '#10004d',

    },
    secondary: {
      // hs.fi secondary:
      // main: `#4196a4`, 

      // tetradic color to primary blue:
      main: `#4d003e`, 
      lightTint: `#e9dfe7`,
      darkShade: `#300027`,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: `#fff`,
    },
    
    triviaBlue: {
      main: `#d1e6fa`,
    },

    triviaRed: {
      main: `#fad1df`,
    },

    triviaYellow: {
      main: `#faf7d1`,
    },

    triviaGreen: {
      main: `#d9f2db`,
    },

    triviaPurple: {
      main: `#e6d1fa`,
    },

    triviaOrange: {
      main: `#fae2d1`,
    },

  },
});

export default theme;
