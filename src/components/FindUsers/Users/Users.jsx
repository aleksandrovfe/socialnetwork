import React from 'react';
import './Users.css';
import {NavLink} from "react-router-dom";
import {Pagination} from "./Pagination/Pagination";
import {Preloader} from "../../../Preloader";

const Users = props => {
    return (
        <div className="users-list">
                <Pagination {...props}/>
            {props.isFatching
                ? <Preloader />
                : props.UsersData.map(el => (
                        <div key={el.id} className="user">
                            <div className="user__avatar-container">
                                <NavLink to={"/profile/" + el.id}>
                                    <img className="user__avatar" src={el.photos.large ? el.photos.large : "https://images.pexels.com/photos/3249412/pexels-photo-3249412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt=""/>
                                </NavLink>
                                {el.followed
                                    ? <button onClick={() => props.unfollow(el.id)} className={props.isFollowingProcess.some(id => id === el.id) ? "btn user__unfollow-btn-disable" : "btn user__unfollow-btn"}>{props.isFollowingProcess.some(id => id === el.id) ? "Unfollowing" : "Unfollow"}</button>
                                    : <button onClick={() => props.follow(el.id)} className={props.isFollowingProcess.some(id => id === el.id) ? "btn user__follow-btn-disable" : "btn user__follow-btn"}>{props.isFollowingProcess.some(id => id === el.id) ? "Following" : "Follow"}</button>}
                            </div>
                            <div className="user__description">
                                <h3 className="user__description-item">{el.name}</h3>
                                {el.status && <p className="user__description-item-status">{el.status}</p>}
                            </div>
                        </div>
                    ))
            }
        </div>
    )
};


export default  Users;