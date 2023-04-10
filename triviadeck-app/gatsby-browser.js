const ReactDOM = require('react-dom')

export function replaceHydrateFunction() {
    return (element, container, callback) => {
        ReactDOM.render(element, container, callback)
    }
};

export { wrapRootElement } from './src/apollo/wrap-root-element';


// // Firebase -------------
// import FirebaseProvider from './src/containers/FirebaseProvider';
// import firebase from './src/services/firebase';

// exports.replaceRouterComponent = ({ history }) => {
//   const ConnectedRouterWrapper = ({ children }) => (
//     <FirebaseProvider firebase={firebase}>
//       <Router history={history}>{children}</Router>
//     </FirebaseProvider>
//   );

//   return ConnectedRouterWrapper;
// };