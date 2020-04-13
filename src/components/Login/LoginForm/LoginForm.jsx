import React, {useState} from "react";
import './LoginForm.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls";
import {required} from "../../utilities/Vaalidators";

const LoginForm = props => {
    const [toggle, changeToggle] = useState(true);

    const handleToggleClick = () => {
        changeToggle(!toggle)
    }

    return (
        <div>
            <div className="login-form__background"/>
            <form onSubmit={props.handleSubmit} className="login-form">
                <div className="login-form__wrapper">
                    <h2 className="login-form__sign">Login to your account</h2>
                    <div className="login-form__item">
                        <Field validate={[required]} component={Input} name="email"
                               className={props.error && props.error === "Enter valid Email" ? "login-form__item-input-error" : "login-form__item-input"}
                               placeholder="Email"/>
                        {props.error && props.error === "Enter valid Email" ?
                            <div className="login-form__item-error-email">{props.error}</div> : null}
                    </div>
                    <div className="login-form__item">
                        <Field validate={[required]} component={Input} type="password" name="password"
                               className="login-form__item-input" placeholder="Password"/>
                    </div>
                    <div className="login-form__item login-form__checkbox-wrapper">
                        <Field component={Input} name="rememberMe" id="rememberMe" className="login-form__item-checkbox"
                               type="checkbox"/><label onClick={handleToggleClick}
                                                       className={toggle ? "login-form__item-label" : "login-form__item-label--checked"}
                                                       htmlFor="rememberMe"> Remember me</label>
                    </div>
                    {props.error && props.error !== "Enter valid Email" ?
                        <div className="login-form__item-error">{props.error}</div> : null}
                    <div className="login-form__item">
                        <button className="btn login-form__item-btn">Login</button>
                    </div>
                    <p>or</p>
                    <div className="login-form__item">
                        <a href="https://social-network.samuraijs.com/login"
                           className="btn login-form__item-btn login-form__item-btn-sign-up">Sign up</a>
                    </div>
                </div>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

export default LoginReduxForm;