export const getUsersSelector = (state) => {
    return state.findUsersReducer.UsersData;
};

export const getPageSizeSelector = (state) => {
    return state.findUsersReducer.pageSize;
};

export const getTotalCountSelector = (state) => {
    return state.findUsersReducer.totalCount;
};

export const getCurrentPageSelector = (state) => {
    return state.findUsersReducer.currentPage;
};

export const getisFatchingSelector = (state) => {
    return state.findUsersReducer.isFatching;
};

export const getisFollowingProcessSelector = (state) => {
    return state.findUsersReducer.isFollowingProcess;
};

export const getPortionSizeSelector = (state) => {
    return state.findUsersReducer.portionSize;
};

