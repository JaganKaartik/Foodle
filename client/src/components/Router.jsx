import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodTable from './foodtable/FoodTable';
import Auth from './Auth';
import { Home, Navigation, PrivateRoute, AuthHomeRoute, User } from './navigation';
import { login } from '../services/token';
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

  componentDidMount = () => {
    let params = new URL(document.location).searchParams;
    let authToken = params.get('token');
    let userId = params.get('userid');
    if (authToken) {
      login(authToken, userId);
      this.authHandler();
    }
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
            path="/profile"
            exact
            component={User}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
