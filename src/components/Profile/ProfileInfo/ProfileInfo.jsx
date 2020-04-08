import React, {useState} from 'react';
import './ProfileInfo.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import ProfileDataFormREduxForm from "./ProfileDataForm";

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
            <div className="main__profile-img">
                <img className="main__img"
                     src="https://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_023.jpg"
                     alt=""/>
            </div>
            <div className="description">
                <div className="description__wrapper">
                    <div className="avatar">
                        <img className="avatar__img"
                             src={props.profile.photos.large ? props.profile.photos.large : 'https://images.pexels.com/photos/3249412/pexels-photo-3249412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                             alt=""/>
                    </div>
                    <div className="personal-information">
                    <div className="personal-information__items-presents">
                        <p className="personal-information__item personal-information__name">{props.profile.fullName}</p>
                    </div>
                        <ProfileStatus {...props}/>
                    <div className="personal-information__items-presents">
                        <p className="personal-information__item personal-information__about-me">{props.profile.aboutMe || "about me"}</p>
                    </div>
                    </div>
                </div>
                {props.isOwner && <><input id="load-photo-btn" className="personal-information__load-photo-btn" onChange={onMainPhotoUpdate} type="file"/><label className="personal-information__load-photo-lable" htmlFor="load-photo-btn">upload new photo</label></>}
                {props.isOwner && <button onClick={() => setEditMode(true)} className="btn personal-information__edit-btn">Edit information</button>}
                {editMode ? <ProfileDataFormREduxForm initialValues={props.profile} onSubmit={handleSubmit} profile={props.profile}/> : <ProfileData {...props}/>}
            </div>
        </div>
    )
};

const ProfileData = ({profile}) => {
    return (
        <div className="personal-information__items-list-contacts">
            <p className="personal-information__item personal-information__item-loking-for-job">Looking for a job
                - {profile.lookingForAJob ? "Yes" : 'No'}</p>
            <p className="personal-information__item personal-information__item-loking-for-job">Skills
                - {profile.lookingForAJobDescription || "absent"}</p>
            <p className={profile.contacts.facebook ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b className="personal-information__bold-text">Facebook</b> - {profile.contacts.facebook ? profile.contacts.facebook: "absent"}
            </p>
            <p className={profile.contacts.website ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b className="personal-information__bold-text">Website</b> - {profile.contacts.website ? profile.contacts.website : "absent"}</p>
            <p className={profile.contacts.twitter ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b className="personal-information__bold-text">Twitter</b> - {profile.contacts.twitter ? profile.contacts.twitter : "absent"}</p>
            <p className={profile.contacts.instagram ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b className="personal-information__bold-text">Instagram</b> - {profile.contacts.instagram ? profile.contacts.instagram : "absent"}
            </p>
            <p className={profile.contacts.youtube ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b className="personal-information__bold-text">YouTube</b> - {profile.contacts.youtube ? profile.contacts.youtube : "absent"}</p>
            <p className={profile.contacts.github ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b className="personal-information__bold-text">GitHub</b> - {profile.contacts.github ? profile.contacts.github : "absent"}</p>
            <p className={profile.contacts.mainLink ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b className="personal-information__bold-text">Main Link</b> - {profile.contacts.mainLink ? profile.contacts.mainLink : "absent"}
            </p>
        </div>
    )
};

export default ProfileInfo;