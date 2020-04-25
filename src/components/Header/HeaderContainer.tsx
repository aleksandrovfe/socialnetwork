import React from "react";
import "./Header.css";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutThunk } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

type MapDispatchType = {
  logoutThunk: () => void;
};

type MapStateType = {
  userAvatar: string;
  isAuth: boolean;
  login: null | string;
};

type OwnType = {};

type PropType = MapStateType & MapDispatchType & OwnType;

const HeaderContainer: React.FC<PropType> = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state: AppStateType): MapStateType => ({
  userAvatar: state.profileReducer.userAvatar,
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect<MapStateType, MapDispatchType, OwnType, AppStateType>(mapStateToProps, { logoutThunk })(
  HeaderContainer
);
