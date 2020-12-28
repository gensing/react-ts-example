import * as yup from 'yup'
import { name, email, password, passwordConfirm } from './validate'

export const memberFormSchema = yup.object({
    name,
    email,
    password,
    passwordConfirm
})

export const memberUpdateFormSchema = yup.object({
    password,
    passwordConfirm
})

export type IMemberForm = yup.InferType<typeof memberFormSchema>
export type IMemberUpdateForm = yup.InferType<typeof memberUpdateFormSchema>
export interface IMemberDetail {
    name: string;
    email: string;
}
