import React from 'react';
import { NavLink } from 'react-router-dom';

//route & add header html to top of page
const Nav = () => {
  <nav className="main-nav">
    <ul>
      <li><NavLink to="">Sloths</NavLink></li>
      <li><NavLink to="">New York</NavLink></li>
      <li><NavLink to="">Mountains</NavLink></li>
    </ul>
  </nav>
  }

export default Nav;