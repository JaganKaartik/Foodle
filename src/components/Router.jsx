import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodTable from './foodtable/FoodTable';
import Auth from './Auth';
import { Home, Navigation, PrivateRoute, User, SearchDish } from './navigation';
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
    console.log('Authenticated : ' + this.state.isAuthenticated);
  }

  //Auth Handler to change the auth state [This being the parent component]

  componentDidMount = () => {
    checkAuth()
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        if (resp.success === true) {
          console.log('Successful Authentication @ Router');
          this.authHandler();
          this.setState({ userInfo: resp.user });
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
              userInfo={this.state.userInfo}
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
