import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Navigation extends Component {
  handleLogoutClick = () => {
    window.open(process.env.REACT_APP_SERVER_URL + '/auth/logout', '_self');
  };

  render() {
    return (
      <nav className="all">
        <div className="nav-wrapper">
          <span className="brand-logo center foodle">
            <NavLink to="/">Foodle</NavLink>
          </span>
          {this.displayNav()}
        </div>
      </nav>
    );
  }
  displayNav() {
    if (this.props.authstate === true) {
      return (
        <div>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/">
                <button className="tiny ui inverted button" onClick={this.handleLogoutClick}>
                  Logout
                </button>
                <i className="sign-out alternate icon"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default Navigation;
