import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { userSignUpRequest } from "../../redux/actions/SignUpActions";
import { SignUpHeader, SignUp } from "./SignUpForm.style";

const SignUpPage = ({ userSignUpRequest }) => (
  <SignUp className="ui container">
    <SignUpHeader>Please fill in the required fields</SignUpHeader>
    <SignUpForm userSignUpRequest={userSignUpRequest} />
  </SignUp>
);

SignUpPage.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
};

export default connect(null, { userSignUpRequest })(SignUpPage);
