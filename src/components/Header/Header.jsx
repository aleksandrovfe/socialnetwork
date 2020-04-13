import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = props => {
    return (
        <header className="header">
            <div className="header__wrapper"/>
            <NavLink className="header__sign" to="/profile">Social Network</NavLink>
            <div className="header__user-auth">
                {props.isAuth
                    ? <img className="header__avatar" src={props.userAvatar} alt=""/>
                    : ""}
                <div className="header__sign-btn">
                    {props.isAuth
                        ?
                        <NavLink onClick={props.logoutThunk} className="header__sign-link" to="/login">Logout</NavLink>
                        : <>
                            <NavLink className="header__sign-link" to="/login">Login</NavLink>
                            <a className="header__sign-link header__sign-link-sign-up"
                               href="https://social-network.samuraijs.com/login">Sign up</a>
                        </>
                    }
                </div>
            </div>
        </header>
    )
};

export default Header;