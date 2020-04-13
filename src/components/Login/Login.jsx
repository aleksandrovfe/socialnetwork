import React from "react";
import './Login.css';
import LoginResuxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = props => {
    const onSubmit = (event) => {
        props.loginThunk(event.email, event.password, event.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <LoginResuxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, {
    loginThunk,
    logoutThunk,
})(Login)