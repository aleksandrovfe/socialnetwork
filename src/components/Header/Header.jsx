import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = props => {
  return (
    <header className="header">
          <p className="header__login-name">{props.login}</p>
          <p className="header__sign">social network</p>
          <div className="header__login-btn">
              {props.isAuth
                  ? <NavLink onClick={props.logoutThunk} className="header__login-link" to="/login">Logout</NavLink>
                  : <NavLink  className="header__login-link" to="/login">Login</NavLink>
              }
          </div>
    </header>
  )
};

export default Header;