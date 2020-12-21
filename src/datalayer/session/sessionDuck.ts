
import { ILoginResponse } from "../../types/session"

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

interface ILoginAction {
    type: typeof LOGIN
    payload: ILoginResponse
}
interface ILogoutAction {
    type: typeof LOGOUT
}
type ISessionAction = ILoginAction | ILogoutAction

interface IAuthState {
    isLogin: boolean,
    data: ILoginResponse | null
}

export default function reducer(state: IAuthState = {
    isLogin: false,
    data: null
}, action: ISessionAction): IAuthState {
    switch (action.type) {
        case LOGIN: return { ...state, isLogin: true, data: action.payload };
        case LOGOUT: return { ...state, isLogin: false, data: null };
        default: return state;
    }
}

export const sessionActions = {
    login: (props: ILoginResponse): ISessionAction => ({ type: LOGIN, payload: props }),
    logout: (): ISessionAction => ({ type: LOGOUT })
}