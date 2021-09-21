import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/projects" activeClassName="is-active">Projects</NavLink>
  </header>
);

export default Header;
