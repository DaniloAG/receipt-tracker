import React from "react";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import SignInPage from "../SignIn/SignInPage";
import Home from "../Home/Home";
import SignUpPage from "../SignUp/SignUpPage";
import Dashboard from "../Dashboard/Dashboard";
import GroupPage from "../GroupPage/GroupPage";

const App = () => (
  <div>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/register" component={SignUpPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/group_page/:_id" component={GroupPage} />
    </Switch>
  </div>
);

export default App;
