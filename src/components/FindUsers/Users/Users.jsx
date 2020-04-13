import React from 'react';
import './Users.css';
import {NavLink} from "react-router-dom";
import {Pagination} from "./Pagination/Pagination";
import {Preloader} from "../../../Preloader";

const Users = props => {
    return (
        props.isFatching
            ? <Preloader/>
            : <div className="users-list">
                {props.UsersData.map(el => (
                    <div key={el.id} className="user">
                        <NavLink to={"/profile/" + el.id}>
                            <img className="user__avatar"
                                 src={el.photos.large ? el.photos.large : "https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg"}
                                 alt=""/>
                        </NavLink>
                        <div className="user__description">
                            <h3 className="user__description-item">{el.name}</h3>
                            {el.status && <p className="user__description-item-status">{el.status}</p>}
                        </div>
                        {el.followed
                            ? <button onClick={() => props.unfollow(el.id)}
                                      className={props.isFollowingProcess.some(id => id === el.id) ? "btn user__unfollow-btn-disable" : "btn user__unfollow-btn"}>{props.isFollowingProcess.some(id => id === el.id) ? "Unfollowing" : "Unfollow"}</button>
                            : <button onClick={() => props.follow(el.id)}
                                      className={props.isFollowingProcess.some(id => id === el.id) ? "btn user__follow-btn-disable" : "btn user__follow-btn"}>{props.isFollowingProcess.some(id => id === el.id) ? "Following" : "Follow"}</button>}
                    </div>
                ))}
                <Pagination {...props}/>
            </div>
    )
};


export default Users;