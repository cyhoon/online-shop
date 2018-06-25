import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
      status: 'INIT',
    },
    register: {
      status: 'INIT',
    },
    status: {
      isLoggedIn: false,
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
        default:
            return state;
    }
}

export default authReducer;