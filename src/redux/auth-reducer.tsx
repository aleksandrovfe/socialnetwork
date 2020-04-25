import { authMeRequest, loginAPI, logoutAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
  userId: 0,
  email: null,
  login: null,
  isAuth: false,
};

type initialStateType = typeof initialState;

export const authReducer = (state = initialState, action: any): initialStateType => {
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

type setAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean | null;
};

type setAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA;
  payload: setAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean | null
): setAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const authMeRequestThunk = () => {
  return async (dispatch: any) => {
    const response = await authMeRequest();
    const { id, email, login } = response.data;
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const loginThunk = (email: string, password: string, rememberMe: boolean) => {
  return async (dispatch: any) => {
    const response = await loginAPI(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(authMeRequestThunk());
    } else {
      const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const logoutThunk = () => {
  return async (dispatch: any) => {
    const response = await logoutAPI();

    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};
