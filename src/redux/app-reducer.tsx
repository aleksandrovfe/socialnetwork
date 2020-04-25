import { authMeRequestThunk } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
  initialized: false,
};

type initialStateType = typeof initialState;

export const appReducer = (
  state = initialState,
  action: any
): initialStateType => {
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

type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

export const initializedSuccess = (): initializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => {
  return (dispatch: any) => {
    const promise = dispatch(authMeRequestThunk());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};
