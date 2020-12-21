export interface ILoginRequest {
    username: string;
    password: string;
}

export interface ILoginResponse {
    id: number,
    username: string,
    accessToken: string;
    refreshToken: string;
}