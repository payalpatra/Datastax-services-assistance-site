import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Signup from "../components/SignupForm";
import ThankYou from "../components/ThankYou";
import Home from "./index";

function SignupPage() {
  return (
    <>
      <Switch>
        <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/ThankYou" component={ThankYou} />
      </Switch>
    </>
  );
}

export default SignupPage;
