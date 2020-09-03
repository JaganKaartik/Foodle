import React, { Component } from "react";
import { githubLogin, loginHelper } from "../services/helpers";
import { Redirect } from "react-router-dom";
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
      <div>
        <div className="hoverable">
          <h3 className="foodle">
            <center>Log In to Enjoy Foodleness!</center>
          </h3>
          <form className="container ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                onChange={this.changeHandler.bind(this, "username")}
                name="username"
                value={this.state.username}
              ></input>
            </div>
            <div className="field">
              <label>Password </label>
              <input
                type="password"
                placeholder="password"
                onChange={this.changeHandler.bind(this, "password")}
                name="password"
                value={this.state.password}
              ></input>
            </div>
            <div>
              <button
                className="z-depth-5 center-align ui facebook button"
                onClick={this.valueHandler}
              >
                Log In
                <i className="angle right icon" />
              </button>

              <button
                value="github"
                className="z-depth-5 center-align ui secondary button"
                onClick={this.valueHandler}
              >
                <i className="github icon" />
                Github
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Authentication;
