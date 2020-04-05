import {followRequest, getUsersRequest, unFollowRequest} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_ITEMS_AMOUNT = 'SET_ITEMS_AMOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FETCHING';

const initislState = {
    UsersData: [],
    pageSize: 10,
    totalCount: 0,
    portionSize: 10,
    currentPage: 1,
    isFatching: false,
    isFollowingProcess: [],
};

export const findUsersReducer = (state = initislState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                UsersData: state.UsersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }

                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                UsersData: state.UsersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }

                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                UsersData: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_ITEMS_AMOUNT:
            return {
                ...state,
                totalCount: action.totalCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFatching: action.isFatching,
            };
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowingProcess: action.isFollowing
                    ? [...state.isFollowingProcess, action.userId]
                    : state.isFollowingProcess.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};

export const followClick = userId => ({
    type: FOLLOW,
    userId
});

export const unfollowClick = userId => ({
    type: UNFOLLOW,
    userId
});

export const setUsers = users => ({
    type: SET_USERS,
    users
});

export const setCurrentPage = currentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersItem = totalCount => ({
    type: SET_ITEMS_AMOUNT,
    totalCount
});

export const toggleIsFatching = isFatching => ({
    type: TOGGLE_IS_FETCHING,
    isFatching
});

export const toggleIsFollowing = (isFollowing, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFatching(true));
        dispatch(setCurrentPage(currentPage));
        const response = await getUsersRequest(currentPage, pageSize);
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersItem(response.totalCount));
        dispatch(toggleIsFatching(false));
    }
};

export const follow = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, id));
        const response = await followRequest(id);

        if (response.data.resultCode === 0) {
            dispatch(followClick(id));
        }
        dispatch(toggleIsFollowing(false, id));
    };
};

export const unfollow = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, id));
        const response = await unFollowRequest(id);

        if (response.data.resultCode === 0) {
            dispatch(unfollowClick(id));
        }
        dispatch(toggleIsFollowing(false, id));
    };
};