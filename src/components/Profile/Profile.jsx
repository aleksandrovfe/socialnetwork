import React from 'react';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {Preloader} from "../../Preloader";

const Profile = props => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className="profile">
            <ProfileInfo {...props}/>
        </div>
    )
};

export default Profile;