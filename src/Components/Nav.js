import React from 'react';
import { NavLink } from 'react-router-dom';

//routes for default image searches
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/sloths">Sloths</NavLink></li>
        <li><NavLink to="/brooklyn">Brooklyn</NavLink></li>
        <li><NavLink to="/mountains">Mountains</NavLink></li>
      </ul>
    </nav>
    );
  }

export default Nav;