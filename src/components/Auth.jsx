import React, { Component } from 'react';
import { twitterLogin } from '../services/helpers';
import { Redirect } from 'react-router-dom';
import OAuthModal from './modals/OAuthModal';

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
      <div className="container">
        <br />
        <br />
        <OAuthModal valueHandler={this.valueHandler.bind(this)} />
      </div>
    );
  }
}

export default Authentication;
