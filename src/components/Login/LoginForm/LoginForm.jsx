import React from "react";
import './LoginForm.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls";
import {required} from "../../utilities/Vaalidators";

const LoginForm = props => {
    return (
        <div>
            <h5 className="login__sign">
                To register / log in to the social network, you need to go to the <a className="login__link" href="https://social-network.samuraijs.com/login" title="https://social-network.samuraijs.com/login">registration page</a> , register / log in and go back
            </h5>
            <form onSubmit={props.handleSubmit} className="login-form">
                <div className="login-form__item">
                    <Field validate={[required]} component={Input} name="email" className="login-form__item-input" placeholder="Email"/>
                </div>
                <div className="login-form__item">
                    <Field validate={[required]} component={Input} type="password" name="password" className="login-form__item-input" placeholder="Password"/>
                </div>
                <div className="login-form__item login-form__checkbox-wrapper">
                    <Field component={Input} name="rememberMe" id="rememberMe" className="login-form__item-checkbox" type="checkbox"/><label className="login-form__item-label" htmlFor="rememberMe"> Remember me</label>
                </div>
                <div className="login-form__item">
                    <button className="btn login-form__item-btn">Login</button>
                </div>
                {props.error ? <div className="login-form__item-error">{props.error}</div> : null}
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

export default LoginReduxForm;