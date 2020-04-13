import {follow, getUsersThunkCreator, setCurrentPage, unfollow} from "../../redux/findUsersReducer";
import {connect} from "react-redux";
import React from 'react';
import Users from "./Users/Users";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getisFatchingSelector, getisFollowingProcessSelector,
    getPageSizeSelector, getPortionSizeSelector,
    getTotalCountSelector,
    getUsersSelector, getIdSelector
} from "../../redux/users-selectors";
import {getUserAvatarThunk} from '../../redux/profile-reducer';

class FindUserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        this.props.getUserAvatarThunk(this.props.authorizedUserId);
    }

    onChangePage = pageNumber => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            <Users onChangePage={this.onChangePage} {...this.props}/>
        </>
    }
}

const mapStateToProps = state => ({
    UsersData: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalCount: getTotalCountSelector(state),
    portionSize: getPortionSizeSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFatching: getisFatchingSelector(state),
    isFollowingProcess: getisFollowingProcessSelector(state),
    authorizedUserId: getIdSelector(state),
});

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        getUsersThunkCreator,
        follow,
        unfollow,
        getUserAvatarThunk,
    }),
)(FindUserContainer);

