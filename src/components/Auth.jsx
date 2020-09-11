import React, { Component } from 'react';
import { githubLogin, checkAuth } from '../services/helpers';
import { Redirect } from 'react-router-dom';
import OAuthModal from './modals/OAuthModal';
class Authentication extends Component {
  state = {
    toDashboard: false,
    github: false
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
  componentDidMount() {
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
  valueHandler = (e) => {
    e.preventDefault();
    if (e.currentTarget.value === 'github') {
      githubLogin()
      this.setState({
        github: true,
        toDashboard: true
      })
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
