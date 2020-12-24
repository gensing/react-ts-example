import axios, { authHeader } from "../../utils/axios";
import { IMemberForm, IMemberUpdateForm, IMemberDetail } from "./types";

function getApi(id: number) {
    return axios.get<IMemberDetail>(`/member/${id}`, authHeader);
}

function deletApi(id: number) {
    return axios.delete<void>(`/member/${id}`, authHeader);
}

function putApi(id: number, data: IMemberUpdateForm) {
    const { password } = data;
    return axios.put<void>(`/member/${id}`, JSON.stringify({ password }), authHeader);
}

function postApi(data: IMemberForm) {
    const { email, name, password } = data;
    return axios.post<void>("/member", JSON.stringify({ email, name, password }));
}

export { getApi, postApi, putApi, deletApi }