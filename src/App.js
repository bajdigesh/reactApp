import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/dashboard' component={Dashboard} exact />
      </Switch>
    </Router>
  );
};

export default App;
