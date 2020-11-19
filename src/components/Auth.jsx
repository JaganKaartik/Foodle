import React, { Component } from 'react';
import { twitterLogin } from '../services/helpers';
import { Redirect } from 'react-router-dom';
import '../static/css/login.css';

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
    }
  };

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="Login100-form">
            <span className="login100-form-title">Sign In With</span>
            <br />
            <button value="google" className="huge ui youtube button" onClick={this.valueHandler}>
              <i className="google icon" />
              Google
            </button>
            <span style={{ display: 'inline-block', width: 80 }}></span>
            <button value="twitter" className="huge ui twitter button" onClick={this.valueHandler}>
              <i className="twitter icon" /> Twitter
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Authentication;
