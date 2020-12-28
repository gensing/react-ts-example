import http, { authHeader } from "utils/http";
import { IMemberForm, IMemberUpdateForm, IMemberDetail } from "types/data/Member";

function getApi(id: number) {
    return http.get<IMemberDetail>(`/member/${id}`, authHeader);
}

function deletApi(id: number) {
    return http.delete<void>(`/member/${id}`, authHeader);
}

function putApi(id: number, data: IMemberUpdateForm) {
    const { password } = data;
    return http.put<void>(`/member/${id}`, { password }, authHeader);
}

function postApi(data: IMemberForm) {
    const { email, name, password } = data;
    return http.post<void>("/member", { email, name, password });
}

export { getApi, postApi, putApi, deletApi }