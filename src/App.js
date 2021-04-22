import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import RedirectPage from "./components/RedirectPage/RedirectPage";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
