import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodTable from './foodtable/FoodTable';
import Auth from './Auth';
import { Home, Navigation, PrivateRoute, AuthHomeRoute, User } from './navigation';
import { login, authTokenStatus } from '../services/token';
import { UserProvider } from '../context/User.Context';
class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.authHandler = this.authHandler.bind(this);
  }

  state = {
    isAuthenticated: false
  };

  authHandler() {
    this.setState((prevstate) => ({
      isAuthenticated: !prevstate.isAuthenticated
    }));
  }

  componentDidUpdate = () => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }
  };

  componentDidMount = () => {
    if (!authTokenStatus()) {
      let params = new URL(document.location).searchParams;
      let authToken = params.get('token');
      let userId = params.get('userid');
      if (authToken) {
        login(authToken, userId);
        this.authHandler();
      }
    } else {
      this.authHandler();
    }
  };

  render() {
    return (
      <UserProvider>
        <Router>
          <Navigation authHandler={this.authHandler} authstate={this.state.isAuthenticated} />

          <Switch>
            <AuthHomeRoute authstate={this.state.isAuthenticated} path="/" exact component={Home} />

            <Route path="/login" exact>
              <Auth authHandler={this.authHandler} />
            </Route>

            <PrivateRoute
              authstate={this.state.isAuthenticated}
              path="/dashboard"
              exact
              component={FoodTable}
            />

            <PrivateRoute
              authstate={this.state.isAuthenticated}
              path="/profile"
              exact
              component={User}
            />
          </Switch>
        </Router>
      </UserProvider>
    );
  }
}

export default Routes;
