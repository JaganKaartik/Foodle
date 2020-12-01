import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthHomeRoute = ({ authstate, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authstate === true ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);

export default AuthHomeRoute;
