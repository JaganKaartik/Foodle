import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ authstate, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (authstate === true ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

export default PrivateRoute;
