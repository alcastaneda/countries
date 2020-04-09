import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import CountryData from "./pages/countryData";

// import injectStyles from "./styles";

// previous variable declarations

// injectStyles();
ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={CountryData} />
  </BrowserRouter>,
  document.getElementById("root")
);
