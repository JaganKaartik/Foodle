import React, { Component } from 'react';
import { twitterLogin, googleLogin } from '../services/helpers';
import { Redirect } from 'react-router-dom';
class Authentication extends Component {
  state = {
    toDashboard: false
  };

  changeHandler = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  };

  dashHandler = () => {
    this.setState({
      toDashboard: true
    });
  };

  valueHandler = (e) => {
    e.preventDefault();
    if (e.currentTarget.value === 'twitter') {
      twitterLogin();
    } else if (e.currentTarget.value === 'google') {
      googleLogin();
    }
  };

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container-login flex-grow">
        <div className="wrapper-login">
          <form className="login-form">
            <span className="login-form-title">Connect to your Foodle Account.</span>
            <br />
            <button
              value="google"
              className="fluid huge ui youtube button"
              onClick={this.valueHandler}
            >
              <i className="google icon" /> Login with Google
            </button>
            <span style={{ display: 'inline-block', width: 100 }}></span>
            <button
              value="twitter"
              className="fluid huge ui twitter button"
              onClick={this.valueHandler}
            >
              <i className="twitter icon" /> Login with Twitter
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Authentication;
