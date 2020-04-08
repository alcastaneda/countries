import React, { Fragment } from "react";
import { Router } from "@reach/router";

// import Launch from './launch';
import CountrySelect from "./launches";
// import Cart from './cart';
// import Profile from './profile';
import { Footer, PageContainer } from "../components";

export default function Pages() {
  return (
    <Fragment>
      {/* <PageContainer> */}
      <Router primary={false} component={Fragment}>
        <CountrySelect path="/" />
        {/* <Launch path="launch/:launchId" />
          <Cart path="cart" />
          <Profile path="profile" /> */}
      </Router>
      {/* </PageContainer> */}
      {/* <Footer /> */}
    </Fragment>
  );
}
