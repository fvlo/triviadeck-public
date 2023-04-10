import React from "react";
import { Grid, Box, List, } from "@material-ui/core";

import LabelBottomNavigation from '../components/bottomNav.js'
import TdAppBar from '../components/tdAppBar.js'

import useStyles from '../components/styles.js';

import StyledFullBackground from '../components/backgroundImages/FullBackground'
import CategoryListItemDyn from '../components/categoryListItemDyn.js';

import StaticData from '../../static/td-static-data-export_v1.json';
import { Helmet } from "react-helmet"


export default function App() {
  const classes = useStyles();
  
  const dataArray = StaticData
  


  return (
    
    <React.Fragment>

      <div className="application">
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}>
          <title>Triviadeck</title>
          <meta 
            name="description" 
            content="Triviadeck is a digital deck of trivia questions. It's best used together with your favourite board game.">
          </meta>
          <meta 
            name="keywords" 
            content="Trivia, trivia questions, trivia board games, trivia board game, trivia games, trivia game, quiz">
          </meta>
        </Helmet>
      </div>

{/* AppBar at top of page */}
      <TdAppBar />
        
{/* Main content grid */}
        
    <StyledFullBackground>     
            <Grid
              container
              direction="row"
              justify = "space-evenly"
            > 
              <Grid item xs={12} sm={8} md={6} className={classes.mainGrid} >
                <Box  
                display="flex" 
                justifyContent="center"
                className={classes.backgroundBox}
                >
                  <List >   
                    <CategoryListItemDyn category="Geography and places" staticData={dataArray}/>
                    <CategoryListItemDyn category="Entertainment and games" staticData={dataArray} />
                    <CategoryListItemDyn category="History and society" staticData={dataArray} />
                    <CategoryListItemDyn category="Science and nature" staticData={dataArray} />
                    <CategoryListItemDyn category="Art and literature" staticData={dataArray} />
                    <CategoryListItemDyn category="Sports and hobbies" staticData={dataArray} />
                    
                  </List>
                </Box>
              </Grid>
            </Grid>


        </StyledFullBackground>



{/* Bottom navigation bar */}
      <LabelBottomNavigation />

    </React.Fragment>
  );
}
