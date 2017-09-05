import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import Validate from "../../utils/Validate";
import InlineError from "../Messages/InlineError";

class SignUpForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      submitted: false,
      success: false,
      _id: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    if (this.isValid()){
      this.setState({ errors: {}, submitted: true, success: false });
      this.props.userSignUpRequest(this.state)
      .then(
        (res) => {
          this.setState({ success: true, submitted: false, _id: res.data._id});
          axios.post("/api/userGroup", this.state);
        },
        (err) => {
          this.setState({ success: false, errors: err.response.data, submitted: false })
        }
      );
    }
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
          <Button primary fluid>Submit</Button>
        </Form>
        { this.state.success && <Redirect push to="/signin" /> }
      </div>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
};

export default SignUpForm;
