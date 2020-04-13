import React from 'react';
import './Header.css';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/auth-reducer";

const HeaderContainer = props => {
    return (
        <Header {...props} />
    )
}

const mapStateToProps = state => ({
    userAvatar: state.profileReducer.userAvatar,
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
});

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);