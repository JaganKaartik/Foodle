import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ authstate, component: Component, userInfo, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authstate === true ? <Component userInfo={userInfo} {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
