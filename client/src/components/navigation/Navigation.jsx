import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoSVG from '../../assets/images/logo.svg';
import { connect } from 'react-redux';
import FoodModal from '../modals/FoodModal';
import * as thunkActions from '../../redux';
import { logout } from '../../services/token';
import Toggler from '../commons/Toggle';
import ProfileImage from '../profile';
import ReactGA from 'react-ga';
import { seedDB } from '../../services/helpers';
class Navigation extends Component {
  state = {
    id: '',
    modal: false
  };
  componentDidMount() {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }
  }

  handleSeedClick = (e) => {
    e.preventDefault();
    seedDB();
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
    ReactGA.event({
      category: 'Search',
      action: 'queried an id',
      label: 'search modal',
      value: this.state.id
    });
  };

  modalHandler = () => {
    this.state.modal ? this.setState({ modal: false }) : this.setState({ modal: true });
  };

  render() {
    return (
      <div className="dark">
        <header className="nav-theme lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
          <div className="flex-1 flex justify-between items-center">
            <NavLink to="/">
              <img src={logoSVG} width="32" heigsht="36" alt="Andy Leverenz" />
            </NavLink>
          </div>

          <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
            <svg
              className="fill-current menu-svg"
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

          <div className="hidden lg:flex lg:items-center lg:w-auto w-full " id="menu">
            <nav>{this.displayNav()}</nav>
          </div>
        </header>
        <div className="container">
          {this.state.modal && (
            <FoodModal dish={this.props.data.dish} onClose={this.modalHandler} />
          )}
        </div>
      </div>
    );
  }
  displayNav() {
    if (this.props.authstate === true) {
      return (
        <ul className="nav-text lg:flex items-center justify-between text-base pt-4 lg:pt-0">
          <li>
            <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent lg:mb-0 mb-2">
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow"
                onClick={this.handleSeedClick.bind(this)}
              >
                Re-Seed DB
              </button>
            </div>
          </li>
          <li>
            <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </div>
          </li>
          <li>
            <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
              <NavLink to="/profile">Profile</NavLink>
            </div>
          </li>
          <li>
            <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
              <NavLink to="/logout" onClick={this.handleLogout.bind(this)}>
                Logout
              </NavLink>
            </div>
          </li>
          <li>
            <form
              className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent focus:ring-10 focus:ring-blue-600 lg:mb-0 mb-2 ui form"
              onSubmit={this.formHandler}
            >
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
            <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent lg:mb-0 mb-2">
              <ProfileImage />
            </div>
          </li>
          <li>
            <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent lg:mb-0 mb-2">
              <Toggler />
            </div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-text lg:flex items-center justify-between text-base  pt-4 lg:pt-0">
          <li>
            <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
              <NavLink to="/login">Login</NavLink>
            </div>
          </li>
          <li>
            <div className="foodle text-4xl ">
              <NavLink to="/">Foodle</NavLink>
            </div>
          </li>
          <li>
            <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent lg:mb-0 mb-2">
              <Toggler />
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
