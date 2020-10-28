import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

const Login = ({ currentUser, isAuthenticating }) => (
  <div>
    <LoginForm />
    {isAuthenticating && <div>loading</div>}
    {currentUser && <Redirect to="/boards" />}
  </div>
);

export default Login;
