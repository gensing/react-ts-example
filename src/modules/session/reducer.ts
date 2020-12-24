import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./constants";
import { IAuthState, ISessionAction } from "./types";

const initState: IAuthState = {
    loading: false,
    error: false,
    success: false,
    isLogin: false,
    data: null
}

export default function reducer(state = initState, action: ISessionAction): IAuthState {
    switch (action.type) {
        case LOGIN_REQUEST: return { ...state, isLogin: false, loading: true, error: false };
        case LOGIN_SUCCESS: return { ...state, isLogin: true, loading: false, error: false };
        case LOGIN_FAILURE: return { ...state, isLogin: false, loading: false, error: true };
        case LOGOUT_REQUEST: return { ...state, isLogin: false, data: null };
        default: return state;
    }
}
