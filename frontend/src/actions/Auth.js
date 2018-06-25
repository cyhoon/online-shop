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

export function registerRequest(id, pw, name, homeNumber, phoneNumber, mailNumber, address, email) {
    return (dispatch) => {
        try {
            return axios.post(HOST + '/register', {
                id,
                pw,
                name,
                home_number: homeNumber,
                phone_number: phoneNumber,
                mail_number: mailNumber,
                address,
                email,
            }).then((response) => {
                const { code } = response.data;

                if (code !== 0) { // 실패
                    dispatch(registerFailure('register error'));
                } else { // 성공
                    dispatch(registerSuccess('success'));
                }
            });
        } catch (error) {
            dispatch(loginFailure('login error'))
        }
    };
};

export function registerSuccess(message) {
    return {
        type: AUTH_REGISTER_SUCCESS,
        message,
    };
};

export function registerFailure(message) {
    return {
        type: AUTH_REGISTER_FAILURE,
        message,
    };
};