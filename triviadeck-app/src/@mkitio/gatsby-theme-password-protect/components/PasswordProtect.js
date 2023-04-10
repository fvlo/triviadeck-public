import React, { useState } from 'react';
import { setSessionPassword } from '@mkitio/gatsby-theme-password-protect/src/utils/utils';
import { Typography, Box, Grid } from "@material-ui/core";

export default function PasswordProtect() {


  const styles = {
    input: {
      width: '100%',
      height: '48px',
      borderRadius: '4px',
      border: '1px solid #000',
    },
    button: {
      width: '100%',
      height: '48px',
      background: 'hotpink',
      color: '#fff',
      borderRadius: '4px',
      border: '2px solid hotpink',
      marginTop: '16px',
      textTransform: 'uppercase',
      fontWeight: '300',
      fontFamily: 'sans-serif'
    },
  };

  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (



      <React.Fragment>

          <Box  
          display="flex" 
          justifyContent="center"
          marginTop={20}
          >

            <Grid
              container
              direction="row"
              justify = "space-evenly"  
            > 
              <Grid item xs={12}>
                <Box 
                  display="flex"
                  justifyContent="center"
                >
                  <Typography variant="h2" color="textPrimary" component="p">
                      Welcome!
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} >

                <Box 
                  display="flex"
                  justifyContent="center"
                >
                  <Typography variant="b1" color="textPrimary" component="p">
                      Note: password has changed
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} >


                <Box 
                  display="flex"
                  justifyContent="center"
                >


                  <form onSubmit={onSubmit} style={{ width: '320px' }}>
                    <input
                      name="password"
                      type="password"
                      value={password}
                      onChange={event => setPassword(event.target.value)}
                      style={styles.input}
                      />

                    <button
                      type="submit"
                      style={{
                        ...styles.button,
                      }}
                      >
                      Enter
                    </button>
                  </form>
                </Box>
              </Grid>

            </Grid>
          </Box>

      </React.Fragment>

    
    
  );

};

