import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navigation">
            <NavLink className="navigation__link" activeClassName="active-link" to="/profile">Profile</NavLink>
            <NavLink className="navigation__link" activeClassName="active-link" to="/dialogs">Message</NavLink>
            <NavLink className="navigation__link" to="">News</NavLink>
            <NavLink className="navigation__link" to="">Music</NavLink>
            <NavLink className="navigation__link" activeClassName="active-link" to="/find-users">Find Users</NavLink>
            <NavLink className="navigation__link" to="">Settings</NavLink>
        </nav>

    </div>
  )
};

export default Navbar;