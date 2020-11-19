import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Navigation extends Component {
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
            <li>
              <NavLink to="/superadmin">Super Admin</NavLink>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i class="arrow alternate circle right outline icon"></i>
                <button class="ui button" onClick={this.props.authHandler}>
                  Logout
                </button>
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
