import React from 'react';
import { ListItemText, ListItemAvatar } from "@material-ui/core";

import CategoryAvatars from '../components/categoryAvatars.js'


function CategoryListItemContent(props) {

  const { category } = props;


  
  return (
      <React.Fragment>
        <ListItemAvatar >
            <CategoryAvatars category = {category} />
        </ListItemAvatar>
        <ListItemText 
          primary = {category}
          primaryTypographyProps = {{variant:"subtitle1", color:"textPrimary"}}
          />
      </React.Fragment>
    );
  }

  export default CategoryListItemContent;