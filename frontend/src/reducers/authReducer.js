import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
      status: 'INIT',
      messageOn: false,
      message: null,
    },
    register: {
      status: 'INIT',
      messageOn: false,
      message: null,
    },
    status: {
      isLoggedIn: false,
      token: null,
      refreshToken: null,
      user: null,
    }
};

const authReducer = (state, action) => {
    if (typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS' },
                },
                status: {
                    isLoggedIn: { $set: true },
                    token: { $set: action.token },
                    refreshToken: { $set: action.refreshToken },
                    user: { $set: action.user },
                }
            });
        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: { $set: 'FAILURE' },
                    messageOn: { $set: true },
                    message: { $set: action.message },
                }
            });
        case types.AUTH_REGISTER_SUCCESS:
            return update(state, {
                register: {
                    status: { $set: 'SUCCESS' },
                },
                status: {
                    isLoggedIn: { $set: true },
                    token: { $set: action.token },
                    refreshToken: { $set: action.refreshToken },
                    user: { $set: action.user },
                }
            });
        case types.AUTH_REGISTER_FAILURE:
            return update(state, {
                register: {
                    status: { $set: 'FAILURE' },
                    messageOn: { $set: true },
                    message: { $set: action.message },
                }
            });
        default:
            return state;
    }
}

export default authReducer;