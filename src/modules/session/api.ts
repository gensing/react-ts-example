import axios from "../../utils/axios";
import { ILoginForm, ILogin } from "./types";

export function loginApi(data: ILoginForm) {
    return axios.post<ILogin>("/login", JSON.stringify(data));
}