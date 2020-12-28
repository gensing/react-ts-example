import { ILogin, ILoginForm } from "types/data/Session";
import http from "utils/http";

export function loginApi(data: ILoginForm) {
    return http.post<ILogin>("/login", data);
}