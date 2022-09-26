import React from 'react';
import './Navigation.scss';
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className='navigation'>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink
              exact
              to='/'
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/about'
            >
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/contact'
            >
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/uhr'
            >
              <span>Uhr</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
