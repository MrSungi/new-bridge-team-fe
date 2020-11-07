import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import NavBarView from '../NavBar/NavBar';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavBarView />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
