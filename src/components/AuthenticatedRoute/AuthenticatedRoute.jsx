import { Redirect, Route } from 'react-router-dom';
import React from 'react';

const AuthenticatedRoute = ({ isAuthenticated, ...props }) => {
  if (isAuthenticated) {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};

export default AuthenticatedRoute;
