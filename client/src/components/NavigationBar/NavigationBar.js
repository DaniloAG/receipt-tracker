import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import SignInPage from "../SignIn/SignInPage";
import Home from "../Home/Home";
import SignUpPage from "../SignUp/SignUpPage";
import Dashboard from "../Dashboard/Dashboard";
import GroupPage from "../GroupPage/GroupPage";

const NavigationBar = () => 
    <div>
      <nav>
        <div className="ui large menu">
          <a className="item">
            <Link to="/">Receipt Tracker</Link>
          </a>
          <div className="right menu">
            <div className="item">
                <Link to="/signin" className="ui primary button">Sign In</Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/register" component={SignUpPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/group_page/:_id" component={GroupPage} />
      </Switch>
    </div>;

export default NavigationBar;
