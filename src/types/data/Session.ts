import * as yup from 'yup'
import { name, password } from './validate'

export const schema = yup.object({
    username: name,
    password,
})

export type ILoginForm = yup.InferType<typeof schema>
export interface ILogin {
    id: number,
    username: string,
    accessToken: string;
    refreshToken: string;
}

