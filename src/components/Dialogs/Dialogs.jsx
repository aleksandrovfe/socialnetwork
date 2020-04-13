import React, {useEffect} from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import MessagesContainer from "./Messagess/MessagesConteiner";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {getUserAvatarThunk} from '../../redux/profile-reducer';
import {compose} from "redux";
import {connect} from "react-redux";

const Dialogs = props => {
    useEffect(() => {
        props.getUserAvatarThunk(props.authorizedUserId);
    }, []);

    return (
        <div className="dialogs">
            <div>
                <DialogItem/>
            </div>
            <div>
                <MessagesContainer/>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    authorizedUserId: state.authReducer.userId,
});

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        getUserAvatarThunk,
    })
)(Dialogs);

