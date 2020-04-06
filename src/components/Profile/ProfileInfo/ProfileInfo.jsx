import React, {useState} from 'react';
import './ProfileInfo.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = props => {
    const [editMode, setEditMode] = useState(false);
    const onMainPhotoUpdate = event => {
        if (event.target.files.length) {
            props.savePhotoThunk(event.target.files[0]);
        }
    };

    return (
        <div>
            <div className="main__profile-img">
                <img className="main__img"
                     src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
                        {props.isOwner && <><input id="load-photo-btn" className="personal-information__load-photo-btn" onChange={onMainPhotoUpdate} type="file"/><label className="personal-information__load-photo-lable" htmlFor="load-photo-btn">upload new photo</label></>}
                        {props.isOwner && <button onClick={() => setEditMode(true)} className="btn">Edit information</button>}
                    </div>
                </div>
                {editMode ? <ProfileDataForm /> : <ProfileData {...props}/>}
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
                <b>Facebook</b> - {profile.contacts.facebook ? profile.contacts.facebook : "absent"}
            </p>
            <p className={profile.contacts.website ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b>Website</b> - {profile.contacts.website ? profile.contacts.website : "absent"}</p>
            <p className={profile.contacts.VK ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b>VK</b> - {profile.contacts.VK ? profile.contacts.VK : "absent"}</p>
            <p className={profile.contacts.twitter ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b>Twitter</b> - {profile.contacts.twitter ? profile.contacts.twitter : "absent"}</p>
            <p className={profile.contacts.instagram ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b>Instagram</b> - {profile.contacts.instagram ? profile.contacts.instagram : "absent"}
            </p>
            <p className={profile.contacts.youtube ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b>YouTube</b> - {profile.contacts.youtube ? profile.contacts.youtube : "absent"}</p>
            <p className={profile.contacts.github ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b>GitHub</b> - {profile.contacts.github ? profile.contacts.github : "absent"}</p>
            <p className={profile.contacts.mainLink ? "personal-information__item-present" : "personal-information__item-absent"}>
                <b>Main Link</b> - {profile.contacts.mainLink ? profile.contacts.mainLink : "absent"}
            </p>
        </div>
    )
};

export default ProfileInfo;