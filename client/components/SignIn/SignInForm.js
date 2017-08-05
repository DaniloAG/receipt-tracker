import React, { Component } from "react";
import Form from "../SignUp/Form";
import { Link } from "react-router-dom";
import Validate from "../../../server/utils/Validate";
import axios from "axios";

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  isValid(){
    const { errors, valid } = Validate(this.state);
    if (!valid){
      this.setState({ errors });
    }
    return valid;
  }

  onSubmit(e){
    e.preventDefault();
    if (this.isValid()){
      axios.post("/api/authenticate", this.state)
      .then(
        (res) => { console.log(res) },
        (err) => { console.log(err) }
      );
      console.log("valid");
    }
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    const { errors } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h2>Sign In</h2>
          <Form
            name="username"
            value={this.state.username}
            label="Username"
            required={false}
            type="text"
            error={errors.username}
            onChange={this.onChange}
          />
          <Form
            name="password"
            value={this.state.password}
            label="Password"
            required={false}
            type="password"
            error={errors.password}
            onChange={this.onChange}
          />
          <div className="form-group">
            <Link to="/register">Register an account</Link>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;