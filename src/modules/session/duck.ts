import { IFetchState } from "types/IFetchState";
import { ILogin, ILoginForm } from "types/data/Session";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

// session actions interface 
export interface ILoginRequestAction {
    type: typeof LOGIN_REQUEST
    payload: ILoginForm
}
export interface ILoginSuccessAction {
    type: typeof LOGIN_SUCCESS
    payload: ILogin
}
export interface ILoginFaiureAction {
    type: typeof LOGIN_FAILURE
}
export interface ILogoutAction {
    type: typeof LOGOUT_REQUEST
}

export type ISessionActionTypes = ILoginRequestAction | ILoginSuccessAction | ILoginFaiureAction | ILogoutAction

// session state interface
export interface IAuthState {
    state: IFetchState,
    isLogin: boolean,
    data: ILogin | null
}


const initState: IAuthState = {
    state: "init",
    isLogin: false,
    data: null
}

export default function reducer(state = initState, action: ISessionActionTypes): IAuthState {
    switch (action.type) {
        case LOGIN_REQUEST: return { ...state, isLogin: false, state: "loading" };
        case LOGIN_SUCCESS: return { ...state, isLogin: true, state: "success", data: action.payload };
        case LOGIN_FAILURE: return { ...state, isLogin: false, state: "failure" };
        case LOGOUT_REQUEST: return { ...state, isLogin: false, data: null };
        default: return state;
    }
}
