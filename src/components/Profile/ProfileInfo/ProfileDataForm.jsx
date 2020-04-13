import React, {useState} from 'react';
import {Input, TextArea} from "../../common/FormsControls";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit}) => {
    const [toggle, changeToggle] = useState(true);

    const handleToggleClick = () => {
        changeToggle(!toggle)
    }

    return (
        <form onSubmit={handleSubmit} className="personal-information__form">
            <div className="personal-information__background"/>
            <div className="personal-information__form-wrapper">
                <div className="personal-information__form-field">
                    <label htmlFor="form-name" className="personal-information__form-label">Name and surname</label>
                    <Field id="form-name" className="personal-information__input" placeholder="Name" name="fullName"
                           component={Input}/>
                </div>
                <div className="personal-information__form-field">
                    <label htmlFor="form-skills" className="personal-information__form-label">Skills</label>
                    <Field maxlength="100" id="form-skills" className="personal-information__input"
                           placeholder="looking For A Job Description" name="lookingForAJobDescription"
                           component={Input}/>
                </div>
                <div className="personal-information__form-field">
                    <Field id="form-lookingForAJob" className="personal-information__checbox" type="checkbox"
                           name="lookingForAJob" component={Input}/>
                    <label onClick={handleToggleClick} htmlFor="form-lookingForAJob"
                           className={toggle ? "personal-information__form-label--not-checked" : "personal-information__form-label--checked"}>I
                        am looking for a job</label>
                </div>
                <div className="personal-information__form-field">
                    <label htmlFor="form-aboutMe" className="personal-information__form-label">About me</label>
                    <Field maxlength="150" id="form-aboutMe" className="personal-information__text-area"
                           placeholder="Write about yourself" name="aboutMe" component={TextArea}/>
                </div>
                <div className="personal-information__form-field">
                    <label htmlFor="form-facebook" className="personal-information__form-label">Facebook</label>
                    <Field id="form-facebook" className="personal-information__input" placeholder="Name"
                           name="contacts.facebook" component={Input}/>
                </div>
                <div className="personal-information__form-field">
                    <label htmlFor="form-website" className="personal-information__form-label">Website</label>
                    <Field id="form-website" className="personal-information__input" placeholder="Name"
                           name="contacts.website" component={Input}/>
                </div>
                <div className="personal-information__form-field">
                    <label htmlFor="form-twitter" className="personal-information__form-label">Twitter</label>
                    <Field id="form-twitter" className="personal-information__input" placeholder="Name"
                           name="contacts.twitter" component={Input}/>
                </div>
                <div className="personal-information__form-field">
                    <label htmlFor="form-instagram" className="personal-information__form-label">Instagram</label>
                    <Field id="form-instagram" className="personal-information__input" placeholder="Name"
                           name="contacts.instagram" component={Input}/>
                </div>
                <div className="personal-information__form-field">
                    <label htmlFor="form-youTube" className="personal-information__form-label">YouTube</label>
                    <Field id="form-youTube" className="personal-information__input" placeholder="Name"
                           name="contacts.youtube" component={Input}/>
                </div>
                <div className="personal-information__form-field">
                    <label htmlFor="form-gitHub" className="personal-information__form-label">GitHub</label>
                    <Field id="form-gitHub" className="personal-information__input" placeholder="Name"
                           name="contacts.github" component={Input}/>
                </div>
                <div className="personal-information__form-field">
                    <label htmlFor="form-mainLink" className="personal-information__form-label">Main Link</label>
                    <Field id="form-mainLink" className="personal-information__input" placeholder="Name"
                           name="contacts.mainLink" component={Input}/>
                </div>
                <button className="btn personal-information__save-btn">Save</button>
            </div>
        </form>
    )
};

const ProfileDataFormREduxForm = reduxForm({
    form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormREduxForm;