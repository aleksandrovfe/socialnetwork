import { followRequest, getUsersRequest, unFollowRequest } from "../api/api";
import { UsersDataType } from "../types/types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_ITEMS_AMOUNT = "SET_ITEMS_AMOUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FETCHING";

const initialState = {
  UsersData: [] as Array<UsersDataType>,
  pageSize: 6,
  totalCount: 0,
  portionSize: 10,
  currentPage: 1,
  isFatching: false,
  isFollowingProcess: [] as Array<number>,
};

type initialStateType = typeof initialState;

export const findUsersReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        UsersData: state.UsersData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }

          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        UsersData: state.UsersData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }

          return u;
        }),
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
          : state.isFollowingProcess.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

type followClickActionType = {
  type: typeof FOLLOW;
  userId: number;
};

export const followClick = (userId: number): followClickActionType => ({
  type: FOLLOW,
  userId,
});

type unfollowClickActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};

export const unfollowClick = (userId: number): unfollowClickActionType => ({
  type: UNFOLLOW,
  userId,
});

type setUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UsersDataType>;
};

export const setUsers = (users: Array<UsersDataType>): setUsersActionType => ({
  type: SET_USERS,
  users,
});

type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type setTotalUsersItemActionType = {
  type: typeof SET_ITEMS_AMOUNT;
  totalCount: number;
};

export const setTotalUsersItem = (totalCount: number): setTotalUsersItemActionType => ({
  type: SET_ITEMS_AMOUNT,
  totalCount,
});

type toggleIsFatchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFatching: boolean;
};

export const toggleIsFatching = (isFatching: boolean): toggleIsFatchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFatching,
});

type toggleIsFollowingActionType = {
  type: typeof TOGGLE_IS_FOLLOWING;
  isFollowing: boolean;
  userId: number;
};

export const toggleIsFollowing = (isFollowing: boolean, userId: number): toggleIsFollowingActionType => ({
  type: TOGGLE_IS_FOLLOWING,
  isFollowing,
  userId,
});

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFatching(true));
    dispatch(setCurrentPage(currentPage));
    const response = await getUsersRequest(currentPage, pageSize);
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersItem(response.totalCount));
    dispatch(toggleIsFatching(false));
  };
};

export const follow = (id: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFollowing(true, id));
    const response = await followRequest(id);

    if (response.data.resultCode === 0) {
      dispatch(followClick(id));
    }
    dispatch(toggleIsFollowing(false, id));
  };
};

export const unfollow = (id: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFollowing(true, id));
    const response = await unFollowRequest(id);

    if (response.data.resultCode === 0) {
      dispatch(unfollowClick(id));
    }
    dispatch(toggleIsFollowing(false, id));
  };
};
