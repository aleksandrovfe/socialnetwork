import React from 'react';
import {Input, TextArea} from "../../common/FormsControls";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="personal-information__form">
            <div className="personal-information__form-personal-inf-edit">
                <div className="personal-information__form-field"><b>Name</b>  <Field className="personal-information__input" placeholder="Name" name="fullName"  component={Input}/></div>
                <div className="personal-information__form-field"><b>Skills</b>  <Field className="personal-information__input"  placeholder="looking For A Job Description" name="lookingForAJobDescription"  component={Input}/></div>
                <div className="personal-information__form-field"><b>Looking for a job</b>  <Field className="personal-information__checbox"  type="checkbox" name="lookingForAJob"  component={Input}/></div>
                <div className="personal-information__form-field"><b>About me</b>  <Field className="personal-information__text-area"  placeholder="about me"  name="aboutMe"  component={TextArea}/></div>
            </div>
            <div className="personal-information__form-links-edit">
                <div className="personal-information__form-field"><b>Facebook</b>  <Field className="personal-information__input"  placeholder="Name" name="contacts.facebook"  component={Input}/></div>
                <div className="personal-information__form-field"><b>Website</b>  <Field className="personal-information__input" placeholder="Name" name="contacts.website"  component={Input}/></div>
                <div className="personal-information__form-field"><b>Twitter</b>  <Field className="personal-information__input" placeholder="Name" name="contacts.twitter"  component={Input}/></div>
                <div className="personal-information__form-field"><b>Instagram</b>  <Field className="personal-information__input" placeholder="Name" name="contacts.instagram"  component={Input}/></div>
                <div className="personal-information__form-field"><b>YouTube</b>  <Field  className="personal-information__input" placeholder="Name" name="contacts.youtube"  component={Input}/></div>
                <div className="personal-information__form-field"><b>GitHub</b>  <Field className="personal-information__input"  placeholder="Name" name="contacts.github"  component={Input}/></div>
                <div className="personal-information__form-field"><b>Main Link</b>  <Field  className="personal-information__input" placeholder="Name" name="contacts.mainLink"  component={Input}/></div>
            </div>
            <button className="btn personal-information__edit-btn personal-information__save-btn">Save</button>
        </form>
    )
};

const ProfileDataFormREduxForm = reduxForm({
    form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormREduxForm;