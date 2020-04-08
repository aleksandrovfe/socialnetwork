import {getProfile, getUsersStatus, savePhotoAPI, saveProfileInfoAPI, updateUserStatus} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
const SAVE_PROFILE = 'SAVE_PROFILE';

const initalState = {
        ProfileData: [
            {post: 'Hi'},
            {post: 'How Are U?'},
            {post: 'Where are you from?'},
            {post: 'Happy!'},
        ],
        profile: null,
        status: null,
};

export const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                ProfileData: [...state.ProfileData, {post: action.messageBody}],
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
                profile: {...state.profile, photos: action.file},
            };
        case SAVE_PROFILE:
            return {
                ...state,
                profile: {...state.profile, data: action.file},
            };

        default:
            return state;
    }
};

export const addPost = messageBody => ({
    type: ADD_POST,
    messageBody,
});

export const setUserProfile = profile => ({
    type: SET_USER_PROFILE,
    profile,
});

export const setUserStatus = status => ({
    type: SET_USER_STATUS,
    status,
});

export const savePhotoSuccess = file => ({
    type: SAVE_PHOTO,
    file,
});

export const saveProfileSuccess = profile => ({
    type: SAVE_PROFILE,
    profile,
});

export const getProfileThunk = (id) => {
    return async(dispatch) => {
        const response = await getProfile(id);
        dispatch(setUserProfile(response.data));
    };
};

export const getStatusThunk = (id) => {
    return async(dispatch) => {
        const response = await getUsersStatus(id);
        dispatch(setUserStatus(response.data));
    };
};

export const updateStatusThunk = (status) => {
    return async(dispatch) => {
        const response = await updateUserStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    };
};

export const savePhotoThunk = (file) => {
    return async(dispatch) => {
        const response = await savePhotoAPI(file);

        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    };
};

export const saveProfileInfoThunk = (data, userId) => {
    return async(dispatch) => {
        const response = await saveProfileInfoAPI(data);

        if (response.data.resultCode === 0) {
            dispatch(getProfileThunk(userId));
        } 
    };
};

