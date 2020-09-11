import React, { Component } from "react";
import { githubLogin, loginHelper } from "../services/helpers";
import { Redirect } from "react-router-dom";
import OAuthModal from "./modals/OAuthModal"
//import { githubAuthHandler } from "../services/handlers";
class Authentication extends Component {

  // Need to maintain a isAuthenticated State

  state = {
    username: '',
    password: '',
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
    })
  }


  valueHandler = e => {
    e.preventDefault();
    if (e.currentTarget.value === "github") {
      githubLogin()
        .then(resp => {
          console.log(resp.json())
          return resp.json();
        })
        .then(resp => {
          if (resp.message === "success") {
            console.log("Successful Authentication");
            this.props.authHandler()
            this.dashHandler()
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    else {
      const user = this.state.username;
      const pass = this.state.password;
      loginHelper(user, pass)
        .then(resp => {
          return resp.json()
        })
        .then(resp => {
          if (resp.message === 'success') {
            console.log("Successful Authentication");
            this.props.authHandler()
            this.dashHandler()
          }
        })
        .catch(err => {
          console.log("Authentication Failed")
        })
    }
  };

  render() {
    if (this.state.toDashboard) {
      return <Redirect to='/dashboard' />
    }
    return (
      <div className="container">
        <br />
        <br />
        <OAuthModal onClick={this.valueHandler} />
      </div >
    );
  }
}

export default Authentication;
