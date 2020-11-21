import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodTable from './foodtable/FoodTable';
import Auth from './Auth';
import { Home, Navigation, PrivateRoute, AuthHomeRoute, User, SearchDish } from './navigation';
import { checkAuth } from '../services/helpers';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.authHandler = this.authHandler.bind(this);
  }

  state = {
    isAuthenticated: false,
    userInfo: {}
  };

  authHandler() {
    this.setState((prevstate) => ({
      isAuthenticated: !prevstate.isAuthenticated
    }));
  }

  componentDidMount = () => {
    checkAuth()
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        if (resp.success === true) {
          this.authHandler();
          this.setState({ userInfo: resp.user });
        }
      });
  };

  render() {
    return (
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
            path="/search"
            exact
            component={SearchDish}
          />

          <PrivateRoute
            authstate={this.state.isAuthenticated}
            path="/profile"
            exact
            component={User}
            userInfo={this.state.userInfo}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
