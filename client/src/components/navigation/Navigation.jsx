import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoSVG from '../../assets/images/logo.svg';
class Navigation extends Component {
  handleLogoutClick = () => {
    window.open(process.env.REACT_APP_SERVER_URL + '/auth/logout', '_self');
  };

  render() {
    return (
      <div>
        <header className="bg-blue-200 lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
          <div className="flex-1 flex">
            <NavLink to="/">
              <img src={logoSVG} width="32" heigsht="36" alt="Andy Leverenz" />
            </NavLink>
          </div>
          <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>{this.displayNav()}</nav>
            {this.displayUser()}
          </div>
        </header>
      </div>
    );
  }
  displayNav() {
    if (this.props.authstate === true) {
      return (
        <ul className="nav-text lg:flex items-center justify-between text-base text-blue-500 pt-4 lg:pt-0">
          <li>
            <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </div>
          </li>
          <li>
            <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
              <NavLink to="/profile">Profile</NavLink>
            </div>
          </li>
          <li>
            <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
              <NavLink to="/search">Search</NavLink>
            </div>
          </li>
          <li>
            <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
              <NavLink to="/">
                <button
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                  onClick={this.handleLogoutClick}
                >
                  Logout
                </button>
              </NavLink>
            </div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-text lg:flex items-center justify-between text-base text-blue-500  pt-4 lg:pt-0">
          <li>
            <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
              <NavLink to="/login">Login</NavLink>
            </div>
          </li>
        </ul>
      );
    }
  }

  displayUser() {
    if (this.props.authstate === true) {
      return (
        <div className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
          <img
            className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Andy Leverenz"
          />
        </div>
      );
    }
  }
}

export default Navigation;
