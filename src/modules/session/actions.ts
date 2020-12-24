import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./constants"
import { ILoginForm, ILogin, ISessionAction } from "./types"

export const actions = {
    login: (props: ILoginForm): ISessionAction => ({ type: LOGIN_REQUEST, payload: props }),
    loginSuccess: (props: ILogin): ISessionAction => ({ type: LOGIN_SUCCESS, payload: props }),
    loginFailure: (): ISessionAction => ({ type: LOGIN_FAILURE }),
    logout: (): ISessionAction => ({ type: LOGOUT_REQUEST })
}
