import React from 'react';
import './ProfileInfo.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

const ProfileInfo = props => {
  return (
    <div>
      <div className="main__profile-img">
            <img className="main__img" src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
      </div>
      <div className="description">
        <div className="avatar">
            <img className="avatar__img" src={props.profile.photos.large ? props.profile.photos.large : 'https://images.pexels.com/photos/3249412/pexels-photo-3249412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt=""/>
        </div>
        <div className="personal-information">
            <div className="personal-information__items-presents">
                <p className="personal-information__item personal-information__name">{props.profile.fullName}</p>
                <p className="personal-information__item personal-information__item-loking-for-job">Looking for a job - {props.profile.lookingForAJob ? "Yes" : 'No'}</p>
                <p className="personal-information__item personal-information__item-loking-for-job">{props.profile.lookingForAJobDescription}</p>
            </div>
            <ProfileStatus {...props}/>
            <div className="personal-information__items-list-contacts">
                <p className={props.profile.contacts.facebook ? "personal-information__item-present" : "personal-information__item-absent"}><b>Facebook</b> - {props.profile.contacts.facebook ? props.profile.contacts.facebook : "absent"}</p>
                <p className={props.profile.contacts.website ? "personal-information__item-present" : "personal-information__item-absent"}><b>Website</b> - {props.profile.contacts.website ? props.profile.contacts.website : "absent"}</p>
                <p className={props.profile.contacts.VK ? "personal-information__item-present" : "personal-information__item-absent"}><b>VK</b> - {props.profile.contacts.VK ? props.profile.contacts.VK : "absent"}</p>
                <p className={props.profile.contacts.twitter ? "personal-information__item-present" : "personal-information__item-absent"}><b>Twitter</b> - {props.profile.contacts.twitter ? props.profile.contacts.twitter : "absent"}</p>
                <p className={props.profile.contacts.instagram ? "personal-information__item-present" : "personal-information__item-absent"}><b>Instagram</b> - {props.profile.contacts.instagram ? props.profile.contacts.instagram : "absent"}</p>
                <p className={props.profile.contacts.youtube ? "personal-information__item-present" : "personal-information__item-absent"}><b>YouTube</b> - {props.profile.contacts.youtube ? props.profile.contacts.youtube : "absent"}</p>
                <p className={props.profile.contacts.github ? "personal-information__item-present" : "personal-information__item-absent"}><b>GitHub</b> - {props.profile.contacts.github ? props.profile.contacts.github : "absent"}</p>
                <p className={props.profile.contacts.mainLink ? "personal-information__item-present" : "personal-information__item-absent"}><b>Main Link</b> - {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : "absent"}</p>
            </div>
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;