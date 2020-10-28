import React, { useState } from 'react';

const LoginForm = ({ authenticateUser }) => {
  const [loginData, setLoginData] = useState({ user: '', pass: '' });

  const authenticateUserAction = () => {
    authenticateUser('user@email.com');
  };

  const handleChange = e => {
    const { name } = e.target;
    const { value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <form>
      <input
        type="text"
        name="user"
        value={loginData.user}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <input
        type="text"
        name="pass"
        value={loginData.pass}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <div>
        <button onClick={authenticateUserAction} type="button">
          login
        </button>
        <h6>
          {loginData.user} : {loginData.pass}
        </h6>
      </div>
    </form>
  );
};

export default LoginForm;
