import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { auth } from "gatsby-theme-firebase"




const authLink = setContext((_, { headers }) => {
  
  // get the authentication token  
  if(auth.currentUser){
  return auth.currentUser.getIdToken()
      .then((token) => {
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
          }
        }
      })
    } else 
    return ""

});


const httpLink = createHttpLink({
  uri: "https://triviadeck-api-gateway-3w6n6ui2.ew.gateway.dev/api",
  // uri: "https://triviadeck-app.ew.r.appspot.com/",
  fetch,
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});



