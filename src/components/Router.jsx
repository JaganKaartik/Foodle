import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodTable from './foodtable/FoodTable';
import User from './navigation/User';
import Home from './navigation/Home';
import Navigation from './navigation/Navigation';
import Auth from './Auth';
import PrivateRoute from './navigation/PrivateRoute';
import SearchDish from '../components/navigation/searchDish';
import { checkAuth } from '../services/helpers';

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
    console.log(this.state.isAuthenticated);
  }

  //Auth Handler to change the auth state [This being the parent component]

  componentDidMount = () => {
    checkAuth()
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        if (resp.success === true) {
          console.log('Successful Authentication');
          this.authHandler();
          // window.open('/dashboard', '_self');
        }
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Navigation authHandler={this.authHandler} authstate={this.state.isAuthenticated} />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

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
        </div>
      </Router>
    );
  }
}

export default Routes;
