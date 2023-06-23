import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  // createHttpLink,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/navbar";
import Dashboard from "./pages/dashboard";
import Homepage from "./pages/homepage";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//       headers: {
//           ...headers,
//           authorization: token ? `Bearer ${token}` : "",
//       },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <Navigation />
        <Switch>
           <Route exact path="/" component={Homepage} />
           <Route exact path="/dashboard" component={Dashboard} />
           <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
        </>
      </Router>
    </ApolloProvider>
  );

  // <div className="App">
  //   < Navigation />
  //   < Homepage />
  //   < Dashboard />
  //   {/* <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Welcome to my Service Tracker App!!
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header> */}
  // </div>
}

export default App;
