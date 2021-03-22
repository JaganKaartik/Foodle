import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodTable from './foodtable/FoodTable';
import Auth from './Auth';
import { Home, Navigation, PrivateRoute, AuthHomeRoute, User, SearchDish } from './navigation';

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
    var query = queryString.parse(window.location.search);
    if (query.token) {
      window.localStorage.setItem('foodle-jwt', query.token);
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
            path="/search"
            exact
            component={SearchDish}
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
