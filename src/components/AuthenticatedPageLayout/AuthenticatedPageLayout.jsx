import React from 'react';
import NavBarView from '../NavBar/NavBar';

export default ({ children }) => {
  return (
    <>
      <NavBarView />
      {children}
    </>
  );
};
