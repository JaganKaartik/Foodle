import React, { Component } from 'react';
import { twitterLogin, checkAuth } from '../services/helpers';
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

  componentDidMount = () => {
    checkAuth()
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        if (resp.success === true) {
          console.log('Successful Authentication');
          this.props.authHandler();
          this.dashHandler();
        }
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
