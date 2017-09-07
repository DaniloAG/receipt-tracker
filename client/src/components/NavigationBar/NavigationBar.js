import React from "react";
import { Link } from "react-router-dom";

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
    </div>;

export default NavigationBar;
