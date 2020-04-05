import {authMeRequest, loginAPI, logoutAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initislState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state = initislState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth},
});

export const authMeRequestThunk = () => {
    return async (dispatch) => {
        const response = await authMeRequest();
        const {id, email, login} = response.data;
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login, true));
        }
    };
};

export const loginThunk = (email, password, rememberMe) => {
    return async (dispatch) => {
        const response = await loginAPI(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            dispatch(authMeRequestThunk());
        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    };
};

export const logoutThunk = () => {
    return async (dispatch) => {
        const response = await logoutAPI();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    };
};

