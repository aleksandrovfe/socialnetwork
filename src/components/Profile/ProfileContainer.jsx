import React from 'react';
import './Profile.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, savePhotoThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile isOwner={!this.props.match.params.userId} {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth,
});

export default compose(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        getProfileThunk,
        getStatusThunk,
        updateStatusThunk,
        savePhotoThunk,
    })
)(ProfileContainer);

