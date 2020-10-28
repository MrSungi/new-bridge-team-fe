import React from 'react';
import User from '../../components/User/User';

const LoginOld = ({ currentUser, authenticateUser, isAuthenticating }) => {
  const authenticateUserAction = () => {
    authenticateUser('user@email.com');
  };

  return (
    <div>
      <form>
        <button onClick={authenticateUserAction} type="button">
          Old login
        </button>
      </form>
      {isAuthenticating && <div>loading</div>}
      {currentUser && <User user={currentUser} />}
    </div>
  );
};

export default LoginOld;
