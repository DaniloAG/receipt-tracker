import React from "react";
import { Link } from "react-router-dom";
import { Showcase, ShowcaseHeader, ShowcaseParagraph } from "./Home.style";

const Home = () => 
    <Showcase>
      <div className="ui container">
        <ShowcaseHeader>Landing Page</ShowcaseHeader>
        <ShowcaseParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis necessitatibus dicta voluptas, obcaecati maiores commodi.</ShowcaseParagraph>
        <Link to="/register" className="large blue ui button">Register</Link>
      </div>
    </Showcase>;

export default Home;
