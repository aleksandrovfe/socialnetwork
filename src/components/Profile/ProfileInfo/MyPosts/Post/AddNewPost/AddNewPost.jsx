import React from 'react';
import './AddNewPost.css';
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../../../../common/FormsControls";

const AddNewPost = props => {
    return (
        <form onSubmit={props.handleSubmit} className="new-post">
            <Field
                name="newPostBody"
                component={TextArea}
                className="new-post__text-area"
                placeholder="Write post"
                type="text" maxlength="200"
            />
            <button className="btn btn__new-post">New Post</button>
        </form>
    )
};

const AddNewPostResuxForm = reduxForm({
    form: "AddNewPost",
})(AddNewPost);

export default AddNewPostResuxForm;