import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import CountryData from "./pages/countryData";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={CountryData} />
  </BrowserRouter>,
  document.getElementById("root")
);
