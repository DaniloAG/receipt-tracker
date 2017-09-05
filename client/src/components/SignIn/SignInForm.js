import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import Validate from "../../utils/Validate";
import InlineError from "../Messages/InlineError";

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      success: false,
      submitted: false,
      user_id: ""
    }
    this.isValid = this.isValid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    if (this.isValid()){
      this.setState({ submitted: true, errors: {} });
      this.props.userSignInRequest(this.state)
      .then(
        (res) => { this.setState({ success: true, submitted: false,
          user_id: res.data._id}) },
        (err) => { this.setState({ submitted: false, errors: err.response.data}) }
      );
    }

  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid(){
    const { errors, valid } = Validate(this.state);
    if (!valid){
      this.setState({ errors });
    }
    return valid;
  }

  render(){
    const { errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit} loading={this.state.submitted}>
          <Form.Field error={!!errors.username}>
            <label htmlFor="username">Email</label>
            <input
              name="username"
              value={this.state.username}
              type="text"
              onChange={this.onChange}
            />
            {errors.username && <InlineError text={errors.username} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={this.state.password}
              type="password"
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Form.Field>
            <Link to="/register">Register an account</Link>
          </Form.Field>
          <Button primary fluid>Submit</Button>
        </Form>
        { this.state.success &&
          <Redirect to={{
            pathname: "/dashboard",
            state: {user_id: this.state.user_id}
          }}/>
        }
      </div>
    );
  }
}

export default SignIn;
