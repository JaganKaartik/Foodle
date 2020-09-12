import React, { Component } from 'react';
import { githubLogin, checkAuth } from '../services/helpers';
import { Redirect } from 'react-router-dom';
import OAuthModal from './modals/OAuthModal';
import GitHubLogin from 'react-github-login';
class Authentication extends Component {
  state = {
    toDashboard: true,
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
    if (e.currentTarget.value === 'github') {
      githubLogin()
      checkAuth().then((resp) => {
        console.log(resp.json());
        return resp.json();
      })
        .then((resp) => {
          if (resp.message === 'success') {
            console.log('Successful Authentication');
            this.props.authHandler();
            this.dashHandler();
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
