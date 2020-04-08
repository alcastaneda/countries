import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
// import gql from "graphql-tag";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter, Route } from "react-router-dom";

// import React from "react";
import ReactDOM from "react-dom";

import React, { Fragment } from "react";
import { Router } from "@reach/router";
import CountrySelect from "./pages/launches";
import CountryPage from "./pages/countryPage";
// import injectStyles from "./styles";

// previous variable declarations

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/"
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

// client
//   .query({
//     query: gql`
//       query {
//         country(code: "BR") {
//           name
//           native
//           capital
//           emoji
//           currency
//           languages {
//             code
//             name
//           }
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

// injectStyles();
ReactDOM.render(
  //   <ApolloProvider client={client}>
  //   <Router primary={false} component={Fragment}>
  //     <CountryPage path="/" />
  //   </Router>,

  <BrowserRouter>
    <Route exact path="/" component={CountryPage} />
  </BrowserRouter>,
  //   </ApolloProvider>,
  document.getElementById("root")
);
