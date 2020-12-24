import { IFetchState } from "types/IFetchState";
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./constants";

// session data interface
export interface ILoginForm {
    username: string;
    password: string;
}

export interface ILogin {
    id: number,
    username: string,
    accessToken: string;
    refreshToken: string;
}

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
export type ISessionAction = ILoginRequestAction | ILoginSuccessAction | ILoginFaiureAction | ILogoutAction

// session state interface
export interface IAuthState extends IFetchState {
    isLogin: boolean,
    data: ILogin | null
}

//https://github.com/cornflourblue/react-hooks-redux-registration-login-example/tree/master/src
