import React from 'react';
import { NavLink } from 'react-router-dom';
import space from '../assets/space.png';
import './navbar.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="nav-bar">
      <img src={space} className="logo" alt="Logo" />
      <h1 className="main-heading">
        Space Hub
      </h1>
      <ul className="navlinks">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className="link"
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
