import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoSVG from '../../assets/images/logo.svg';
import { connect } from 'react-redux';
import FoodModal from '../modals/FoodModal';
import * as thunkActions from '../../redux';
import { logout } from '../../services/token';
class Navigation extends Component {
  state = {
    id: '',
    modal: false
  };

  handleLogout = (e) => {
    e.preventDefault();
    logout();
    this.props.authHandler();
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      id: e.target.value
    });
  };

  formHandler = (e) => {
    e.preventDefault();
    this.props.fetchdish(this.state.id);
    this.modalHandler();
  };

  modalHandler = () => {
    this.state.modal ? this.setState({ modal: false }) : this.setState({ modal: true });
  };

  render() {
    return (
      <div>
        <header className="bg-blue-100 lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
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
          </div>
          <div className="container">
            {this.state.modal && (
              <FoodModal dish={this.props.data.dish} onClose={this.modalHandler} />
            )}
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
              <NavLink to="/logout" onClick={this.handleLogout.bind(this)}>
                {/* <button
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                  onClick={this.handleLogoutClick}
                > */}
                Logout
                {/* </button> */}
              </NavLink>
            </div>
          </li>
          <li>
            <form className="ui form" onSubmit={this.formHandler}>
              <input
                name="dish-id"
                placeholder="Search Dish by ID"
                onChange={this.changeHandler.bind(this)}
                type="text"
                required
                value={this.state.value}
              />
            </form>
          </li>
          <li>
            <div className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
              <img
                className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Andy Leverenz"
              />
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
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchOne
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchdish: (dishid) => {
      dispatch(thunkActions.thunkFetchOneDish(dishid)).catch((err) => {
        this.setState({
          modal: false
        });
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
