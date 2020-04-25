import { AppStateType } from "./redux-store";

export const getUsersSelector = (state: AppStateType) => {
    return state.findUsersReducer.UsersData;
};

export const getPageSizeSelector = (state: AppStateType) => {
    return state.findUsersReducer.pageSize;
};

export const getTotalCountSelector = (state: AppStateType) => {
    return state.findUsersReducer.totalCount;
};

export const getCurrentPageSelector = (state: AppStateType) => {
    return state.findUsersReducer.currentPage;
};

export const getisFatchingSelector = (state: AppStateType) => {
    return state.findUsersReducer.isFatching;
};

export const getisFollowingProcessSelector = (state: AppStateType) => {
    return state.findUsersReducer.isFollowingProcess;
};


export const getIdSelector = (state: AppStateType) => {
    return state.authReducer.userId;
};