import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SignInHeader, FormStyle } from "./SignInForm.style";
import SignInForm from "./SignInForm";
import { userSignInRequest } from "../../redux/actions/SignInActions";

class SignInPage extends Component{
  onSubmit(data){
    this.props.userSignInRequest(data);
  }

  render(){
    return(
      <FormStyle className="ui container">
        <SignInHeader>Sign In</SignInHeader>
        <SignInForm onSubmit={this.onSubmit} />
      </FormStyle>
    );
  }
}

SignInPage.propTypes = {
  userSignInRequest: PropTypes.func.isRequired
};

export default connect(null, { userSignInRequest })(SignInPage);
