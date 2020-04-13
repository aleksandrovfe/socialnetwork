import React from 'react';
import './AddMessageForm.css';
import {Field, reduxForm} from "redux-form";

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className="add-message__wrapper">
            <Field
                name="messageBody"
                component="textarea"
                className="dialog__input"
                placeholder="Enter message"
            />
            <button className="btn btn__new-message">Send</button>
        </form>
    )
};

const AddMessageResuxForm = reduxForm({
    form: "dialogAddMessageForm",
})(AddMessageForm);

export default AddMessageResuxForm;