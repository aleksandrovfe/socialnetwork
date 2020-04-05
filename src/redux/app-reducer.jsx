import {authMeRequestThunk} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initislState = {
    initialized: false,
};

export const appReducer = (state = initislState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => {
    return (dispatch) => {
        const promise = dispatch(authMeRequestThunk());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    };
};