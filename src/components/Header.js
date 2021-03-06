import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="nav">
    <header className="menuItems">
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/projects" activeClassName="is-active">Projects</NavLink>
    </header>
  </div>
);

export default Header;