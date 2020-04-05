import {follow, getUsersThunkCreator, setCurrentPage, unfollow} from "../../redux/findUsersReducer";
import {connect} from "react-redux";
import React from 'react';
import Users from "./Users/Users";
import {Preloader} from "../../Preloader";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getisFatchingSelector, getisFollowingProcessSelector,
    getPageSizeSelector, getPortionSizeSelector,
    getTotalCountSelector,
    getUsersSelector
} from "../../redux/users-selectors";

class FindUserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = pageNumber => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
             <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage} UsersData={this.props.UsersData}
                    unfollowClick={this.props.unfollowClick} followClick={this.props.followClick}
                    onChangePage={this.onChangePage} isFollowingProcess={this.props.isFollowingProcess}
                    follow={this.props.follow} unfollow={this.props.unfollow}
                    portionSize={this.props.portionSize} isFatching={this.props.isFatching}
             />
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
});

export default  compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        getUsersThunkCreator,
        follow,
        unfollow,
    }),
)(FindUserContainer);

