import React from 'react';
import './Navbar.css';
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';

const Navbar = props => {
    return (
        <div>
            {props.isAuth
                ? <nav className="navigation">
                    <NavLink className="navigation__link" activeClassName="active-link" to="/profile">Profile</NavLink>
                    <NavLink className="navigation__link" activeClassName="active-link" to="/dialogs">Message</NavLink>
                    {/* <NavLink className="navigation__link" to="">News</NavLink> */}
                    {/* <NavLink className="navigation__link" to="">Music</NavLink> */}
                    <NavLink className="navigation__link" activeClassName="active-link" to="/find-users">Find
                        Users</NavLink>
                    {/* <NavLink className="navigation__link" to="">Settings</NavLink> */}
                </nav>
                : ""
            }
        </div>
    )
};

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, {})(Navbar);
