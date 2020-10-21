import React from 'react';
import User from '../user/User';

const Login = ({ currentUser, authenticateUser, isAuthenticating }) => {
  const authenticateUserAction = () => {
    authenticateUser('user@email.com');
  };

  return (
    <div>
      <button onClick={authenticateUserAction} type="button">
        login
      </button>
      {isAuthenticating && <div>loading</div>}
      {currentUser && <User user={currentUser} />}
    </div>
  );
};

export default Login;
