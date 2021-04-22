import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import RedirectPage from "./components/RedirectPage/RedirectPage";
import Features from "./components/Features/Features";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/features" component={Features} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
