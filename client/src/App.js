import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserFormContainer from "./containers/Users/UserFormContainer";
import UsersListContainer from "./containers/Users/UsersListContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={UsersListContainer} exact />
        <Route path='/user/:slug'>
          <Route path='/user/list' component={UsersListContainer} />
          <Route path='/user/add' component={UserFormContainer} />
          <Route path='/user/edit/:id' component={UserFormContainer} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
