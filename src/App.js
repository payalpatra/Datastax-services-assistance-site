import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SignupPage from "./pages/Signup";
import ThankYou from "./components/ThankYou";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/ThankYou" component={ThankYou} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
