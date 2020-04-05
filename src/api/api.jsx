import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "f7009aa5-0463-4d80-85c7-bde16051bd70",
    }
});

export const getUsersRequest = (currentPage, pageSize) => (
    instance.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
);

export const authMeRequest = () => (
    instance.get(`${baseUrl}auth/me`)
        .then(response => response.data)
);

export const followRequest = id => (
    instance.post(`${baseUrl}follow/${id}`)
);

export const unFollowRequest = id => (
    instance.delete(`${baseUrl}follow/${id}`)
);

export const getProfile = id => (
    instance.get(`${baseUrl}profile/${id}`)
);

export const getUsersStatus = id => (
    instance.get(`${baseUrl}profile/status/${id}`)
);

export const updateUserStatus = status => (
    instance.put(`${baseUrl}profile/status`, {status: status})
);

export const loginAPI = (email, password, rememberMe = false) => (
    instance.post(`${baseUrl}auth/login`, {email, password, rememberMe})
);

export const logoutAPI = () => (
    instance.delete(`${baseUrl}auth/login`)
);
