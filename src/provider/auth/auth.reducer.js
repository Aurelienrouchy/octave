import { AuthInitialState } from './auth.state';
import {
    LOGIN,
    SET_LOADING,
    LOGOUT,
} from './auth.type';

export const AuthReducer = (state = AuthInitialState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case LOGIN: {
            return {
                ...state,
                isLogin: true,
                token: action.payload
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isLogin: true,
            }
        }
        default:
          return state
    }
};
