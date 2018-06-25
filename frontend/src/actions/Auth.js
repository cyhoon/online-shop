import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
} from './ActionTypes';

import axios from 'axios';

const HOST = 'http://localhost:8080';

export function loginRequest(id, pw) {
    return (dispatch) => {
        try {
            return axios.post(HOST + '/login', {
                id,
                pw
            }).then((response) => {
                const { code, description, user } = response.data;

                console.log('code: ', code);

                if (code !== 0) { // 실패
                    dispatch(loginFailure('login error'));
                } else { // 성공
                    dispatch(loginSuccess(user));
                }
            });
        } catch (error) {
            dispatch(loginFailure('login error'))
        }
    };
};

export function loginSuccess(user) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        user
    };
};

export function loginFailure(message) {
    return {
        type: AUTH_LOGIN_FAILURE,
        message,
    };
};

export function registerRequest() {

};

export function registerSuccess() {

};

export function registerFailure() {

};