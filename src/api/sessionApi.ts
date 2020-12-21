import axios from "../utils/axios";
import { ILoginRequest, ILoginResponse } from "../types/session";

export function loginApi(data: ILoginRequest) {
    return axios.post<ILoginResponse>("/login", JSON.stringify(data));
}