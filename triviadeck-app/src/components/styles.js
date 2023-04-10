import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      margin: theme.spacing(0, 0, 0, 0),
      backgroundColor: theme.palette.background.default

    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
    paperTest: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        padding: theme.spacing(4),
        margin: theme.spacing(1, 1.5),
        
    },
    bottomNav: {
        //backgroundColor: theme.palette.primary.main,
        backgroundColor: "green",
        borderTop: `1px solid ${theme.palette.divider}`,
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    bottomNavAct: {
      maxWidth: '100%',
      color: theme.palette.grey[200],
      
      "&:focus": {
        borderTop: `2px solid ${theme.palette.background.default}`,
        color: theme.palette.background.default,
      },

      "&:focus": {
        borderTop: `2px solid ${theme.palette.background.default}`,
        color: theme.palette.background.default,
      },

      selected: {
        color: "red"
      },

      
 
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      width: '100%',
      minHeight: 100,  
    },

    buttonFullGrid: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      width: '100%',
      height: '100%',
    },

    mainGrid: {
      padding: theme.spacing(1),
      marginTop: theme.spacing(10),
    },

    //https://material-ui.com/system/spacing/

    box: {
      marginBottom: theme.spacing(8),
    },

    TriviaListItemAvatarAvatarGeo: {
      backgroundColor: theme.palette.triviaBlue.main,
      // backgroundColor: "#ffffff",
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

    triviaCard: {
      root: {
        maxWidth: 345,
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

    },

    mainBox: {
      
    },

    backgroundBox: {
      backgroundColor: theme.palette.background.default,
      borderRadius: "15px"
    },

    userInfoPaper: {
      backgroundColor: theme.palette.primary.lightTint,
      spacing: 1,
      marginTop: theme.spacing(1)

    },
    
    userCommunityPaper: {
      backgroundColor: theme.palette.primary.main,
      spacing: 1
    },

    footerBackground: {
      background: `linear-gradient(${theme.palette.primary.gradiantBrighter1}, ${theme.palette.primary.main} 75%)`,
      
    },

    whiteHyperlink: {
      color: "white",
    },

    communityContentBox: {
      // Minimum hight is screen height minus footer (200px) minus header approximation (65px)
      minHeight: 'calc(100vh - 200px - 65px)',
    },

    communityPaddingBox: {
      marginTop: "65px",
    },



    
  }));

  export default useStyles;