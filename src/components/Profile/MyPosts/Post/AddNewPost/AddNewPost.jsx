import React from 'react';
import './AddNewPost.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utilities/Vaalidators";
import {TextArea} from "../../../../common/FormsControls";

const maxLength10 = maxLengthCreator(140);

const AddNewPost = props => {
    return (
        <form onSubmit={props.handleSubmit} className="new-post">
                <Field
                    name="newPostBody"
                    component={TextArea}
                    validate={[required, maxLength10]}
                    className="new-post__text-area"
                    placeholder="Write post"
                />
            <button className="btn btn__new-post">New Post</button>
        </form>
    )
};

const AddNewPostResuxForm = reduxForm({
    form: "AddNewPost",
})(AddNewPost);

export default AddNewPostResuxForm;