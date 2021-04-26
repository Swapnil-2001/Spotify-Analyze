import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import RedirectPage from "./components/RedirectPage/RedirectPage";
import Features from "./components/Features/Features";

function App() {
  const [expiry, setExpiryTime] = useState("0");
  useEffect(() => {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem("expiry_time"));
    } catch (error) {
      expiryTime = "0";
    }
    setExpiryTime(expiryTime);
  }, []);

  const isValidSession = () => {
    const currentTime = new Date().getTime();
    const expiryTime = expiry;
    const isSessionValid = currentTime < expiryTime;
    return isSessionValid;
  };
  return (
    <Router>
      <div className="">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home isValidSession={isValidSession} {...props} />
            )}
          />
          <Route path="/redirect" component={RedirectPage} />
          <Route
            path="/dashboard"
            render={(props) => (
              <Main isValidSession={isValidSession} {...props} />
            )}
          />
          <Route path="/main" component={Dashboard} />
          <Route path="/features" component={Features} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
