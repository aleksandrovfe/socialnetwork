import { follow, getUsersThunkCreator, setCurrentPage, unfollow } from "../../redux/findUsersReducer";
import { connect } from "react-redux";
import React from "react";
import Users from "./Users/Users";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPageSelector,
  getisFatchingSelector,
  getisFollowingProcessSelector,
  getPageSizeSelector,
  getTotalCountSelector,
  getUsersSelector,
  getIdSelector,
} from "../../redux/users-selectors";
import { getUserAvatarThunk } from "../../redux/profile-reducer";
import { UsersDataType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapDispatchToPropsType = {
  unfollow: (id: number) => void;
  follow: (id: number) => void;
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
  getUserAvatarThunk: (authorizedUserId: number) => void;
  setCurrentPage: (pageNumber: number) => void;
};

type MapStateToPropsType = {
  authorizedUserId: number;
  UsersData: Array<UsersDataType>;
  isFollowingProcess: Array<number>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
};

type OwnPropsType = {
  onChangePage: (pageNumber: number) => void;
};

type PropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType;

class FindUserContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    this.props.getUserAvatarThunk(this.props.authorizedUserId);
  }

  onChangePage = (pageNumber: number) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <Users
          isFatching={this.props.isFetching}
          UsersData={this.props.UsersData}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          isFollowingProcess={this.props.isFollowingProcess}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          onChangePage={this.onChangePage}
          currentPage={this.props.currentPage}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  UsersData: getUsersSelector(state),
  pageSize: getPageSizeSelector(state),
  totalCount: getTotalCountSelector(state),
  currentPage: getCurrentPageSelector(state),
  isFetching: getisFatchingSelector(state),
  isFollowingProcess: getisFollowingProcessSelector(state),
  authorizedUserId: getIdSelector(state),
});

export default compose(
  WithAuthRedirect,
  connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    setCurrentPage,
    getUsersThunkCreator,
    follow,
    unfollow,
    getUserAvatarThunk,
  })
)(FindUserContainer);
