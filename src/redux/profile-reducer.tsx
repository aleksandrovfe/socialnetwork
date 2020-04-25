import { getProfile, getUsersStatus, savePhotoAPI, saveProfileInfoAPI, updateUserStatus } from "../api/api";
import { ProfileDataType, profileType } from "../types/types";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_PHOTO = "SAVE_PHOTO";
const GET_USER_AVATAR = "GET_USER_AVATAR";

const initalState = {
  ProfileData: [
    { post: "Hi", id: 1 },
    { post: "How Are U?", id: 2 },
    { post: "Where are you from?", id: 3 },
    { post: "Happy!", id: 4 },
  ] as Array<ProfileDataType>,
  profile: null as profileType | null,
  status: null,
  userAvatar: "",
};

type initalStateType = typeof initalState;

export const profileReducer = (state = initalState, action: any): initalStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        ProfileData: [...state.ProfileData, { post: action.messageBody, id: Date.now() }],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SAVE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.file } as profileType,
      };

    case GET_USER_AVATAR:
      return {
        ...state,
        userAvatar: action.avatar,
      };
    default:
      return state;
  }
};

type addPostActionType = {
  type: typeof ADD_POST;
  messageBody: string;
};

export const addPost = (messageBody: string): addPostActionType => ({
  type: ADD_POST,
  messageBody,
});

type setUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: profileType;
};

export const setUserProfile = (profile: profileType): setUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

type setUserStatusSctionType = {
  type: typeof SET_USER_STATUS;
  status: string;
};

export const setUserStatus = (status: string): setUserStatusSctionType => ({
  type: SET_USER_STATUS,
  status,
});

type savePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO;
  file: string;
};

export const savePhotoSuccess = (file: string): savePhotoSuccessActionType => ({
  type: SAVE_PHOTO,
  file,
});

type getUserAvatarActionType = {
  type: typeof GET_USER_AVATAR;
  avatar: string;
};

export const getUserAvatar = (avatar: string): getUserAvatarActionType => ({
  type: GET_USER_AVATAR,
  avatar,
});

export const getProfileThunk = (id: number) => {
  return async (dispatch: any) => {
    const response = await getProfile(id);
    dispatch(setUserProfile(response.data));
  };
};

export const getUserAvatarThunk = (id: number) => {
  return async (dispatch: any) => {
    const response = await getProfile(id);
    dispatch(getUserAvatar(response.data.photos.large));
  };
};

export const getStatusThunk = (id: number) => {
  return async (dispatch: any) => {
    const response = await getUsersStatus(id);
    dispatch(setUserStatus(response.data));
  };
};

export const updateStatusThunk = (status: string) => {
  return async (dispatch: any) => {
    const response = await updateUserStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };
};

export const savePhotoThunk = (file: any) => {
  return async (dispatch: any) => {
    const response = await savePhotoAPI(file);

    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };
};

export const saveProfileInfoThunk = (data: any, userId: number) => {
  return async (dispatch: any) => {
    const response = await saveProfileInfoAPI(data);

    if (response.data.resultCode === 0) {
      dispatch(getProfileThunk(userId));
    }
  };
};
