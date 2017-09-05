import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSignInRequest } from "../../actions/SignInActions";
import { SignInHeader, FormStyle } from "./SignInForm.style";
import SignInForm from "./SignInForm";

const SignInPage = ({ userSignInRequest }) => (
      <FormStyle className="ui container">
        <SignInHeader>Sign In</SignInHeader>
        <SignInForm userSignInRequest={userSignInRequest}/>
      </FormStyle>
);

SignInPage.propTypes = {
  userSignInRequest: PropTypes.func.isRequired
};

export default connect(null, { userSignInRequest })(SignInPage);
