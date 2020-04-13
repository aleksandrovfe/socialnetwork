import React, {useState} from 'react';
import './ProfileInfo.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import ProfileDataFormREduxForm from "./ProfileDataForm";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileInfo = props => {
    const [editMode, setEditMode] = useState(false);
    const onMainPhotoUpdate = event => {
        if (event.target.files.length) {
            props.savePhotoThunk(event.target.files[0]);
        }
    };

    const handleSubmit = (event) => {
        props.saveProfileInfoThunk(event, props.profile.userId);
        setEditMode(false);
    };

    return (
        <div>
            {editMode ? <ProfileDataFormREduxForm initialValues={props.profile} onSubmit={handleSubmit}
                                                  profile={props.profile}/> : null}
            <div className="main__profile-img">
                <img className="main__img"
                     src="https://images.pexels.com/photos/1726964/pexels-photo-1726964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                     alt=""/>
            </div>
            <div className="description">
                <div className="description__wrapper">
                    <div className="avatar">
                        <img className="avatar__img"
                             src={props.profile.photos.large ? props.profile.photos.large : 'https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg'}
                             alt=""/>
                        {props.isOwner && <><input id="load-photo-btn" className="personal-information__load-photo-btn"
                                                   onChange={onMainPhotoUpdate} type="file"/><label
                            className="personal-information__load-photo-lable" htmlFor="load-photo-btn">Upload new
                            photo</label></>}
                    </div>
                    <div className="personal-information">
                        <div className="personal-information__items-presents">
                            <p className="personal-information__item personal-information__name">{props.profile.fullName}</p>
                            {props.isOwner && <button onClick={() => setEditMode(true)}
                                                      className="btn personal-information__edit-btn">Edit
                                information</button>}
                        </div>
                        <ProfileStatus {...props}/>
                        <div className="personal-information__job-wrapper">
                            <p className={props.profile.lookingForAJob ? "personal-information__loking-for-job" : "personal-information__item-not-loking-for-job"}>{props.profile.lookingForAJob ? "Looking for a job" : "Not looking for a job"}</p>
                            <p className="personal-information__item-skills"><p
                                className="personal-information__item-skills-sign">Skills:</p> {props.profile.lookingForAJobDescription || "absent"}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="personal-information__links-posts-wrapper">
                    <div>
                        <div className="personal-information__about-me"><p
                            className="personal-information__about-me-sign">About
                            me</p>{props.profile.aboutMe || "Information about myself..."}</div>
                        <ProfileData {...props}/>
                    </div>
                    <MyPostsContainer/>
                </div>
            </div>
        </div>
    )
};

const ProfileData = ({profile}) => {
    return (
        <div className="personal-information__items-list-contacts">
            <p className="personal-information__items-list-contacts-sign">Links</p>
            <div className="personal-information__item-present">
                <p className="personal-information__bold-text">Facebook</p> - {profile.contacts.facebook ? profile.contacts.facebook : "absent"}
            </div>
            <div className="personal-information__item-present">
                <p className="personal-information__bold-text">Website</p> - {profile.contacts.website ? profile.contacts.website : "absent"}
            </div>
            <div className="personal-information__item-present">
                <p className="personal-information__bold-text">Twitter</p> - {profile.contacts.twitter ? profile.contacts.twitter : "absent"}
            </div>
            <div className="personal-information__item-present">
                <p className="personal-information__bold-text">Instagram</p> - {profile.contacts.instagram ? profile.contacts.instagram : "absent"}
            </div>
            <div className="personal-information__item-present">
                <p className="personal-information__bold-text">YouTube</p> - {profile.contacts.youtube ? profile.contacts.youtube : "absent"}
            </div>
            <div className="personal-information__item-present">
                <p className="personal-information__bold-text">GitHub</p> - {profile.contacts.github ? profile.contacts.github : "absent"}
            </div>
            <div className="personal-information__item-present">
                <p className="personal-information__bold-text">Main
                    Link</p> - {profile.contacts.mainLink ? profile.contacts.mainLink : "absent"}
            </div>
        </div>
    )
};

export default ProfileInfo;