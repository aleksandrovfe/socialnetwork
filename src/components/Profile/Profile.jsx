import React from 'react';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Preloader} from "../../Preloader";

const Profile = props => {
    if (!props.profile) {
        return <Preloader />
    }

  return (
    <div className="profile">
        <ProfileInfo {...props}/>
        <MyPostsContainer />
    </div>
  )
};

export default Profile;