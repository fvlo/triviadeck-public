import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image"

import TdAppBar from '../components/tdAppBar.js'
import LabelBottomNavigation from '../components/bottomNav.js'
import useStyles from '../components/styles.js';

export default function App() {
    const classes = useStyles();
    const IMG_404 = '../../static/404_marilyn.svg';

  return (
    
    <React.Fragment>
        
        {/* AppBar at top of page */}
        <TdAppBar />
                    
            <Grid item xs={12} container className={classes.mainGrid}>
                
                  <Grid item xs={12}>

                    <Typography
                    variant="h5"
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
                          src={IMG_404}
                          alt="Triviadeck"
                          placeholder="none"
                          layout="constrained"
                          width={500}
                          loading = "eager"
                          quality = {100}
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Typography
                    variant="body1"
                    align="center"
                    >
                      We did not expect that.
                    </Typography>
                    <Typography
                    variant="body2"
                    align="center"
                    >
                      This is a 404 situation. The requested page does not exist.
                    </Typography>
                  </Grid>
                
            </Grid>

        

        <LabelBottomNavigation />
    </React.Fragment>
  );
}
