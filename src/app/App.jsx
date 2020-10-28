import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import Login from '../pages/Login';
import LoginOld from '../pages/LoginOld';
import Boards from '../pages/Boards';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import Profile from '../pages/Profile';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login-old" component={LoginOld} />
        <Route exact path="/login" component={Login} />

        <AuthenticatedRoute exact path="/boards" component={Boards} />
        <AuthenticatedRoute exact path="/profile" component={Profile} />

        <Redirect exact from="/" to="/login" />

        <Route from="*">
          <h2> 404 Page not found</h2>
        </Route>
      </Switch>
    </>
  );
};

export default App;
