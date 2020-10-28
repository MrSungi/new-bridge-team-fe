import React from 'react';
import { Link } from 'react-router-dom';

const NavBarView = () => (
  <>
    <Link to="/boards"> Boards </Link>
    <Link to="/profile"> Profile </Link>
  </>
);

export default NavBarView;
