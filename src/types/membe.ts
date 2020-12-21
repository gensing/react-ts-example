
import * as yup from 'yup';

export interface IMemberDetail {
  name: string;
  email: string;
}

export interface IMemberInsert extends IMemberDetail, IMemberUpdate {
}

export interface IMemberUpdate {
  password: string;
}






interface IPasswordConfirm {
  passwordConfirm: string;
}

export interface IMemberInsertForm extends IMemberInsert, IPasswordConfirm {
}

export interface IMemberUpdateForm extends IMemberUpdate, IPasswordConfirm {
}

const name = yup.string().required('username is required');
const email = yup.string().email().required('Email is required');
const password = yup.string().required('Password is requred').matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
const passwordConfirm = yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')

export const loginSchema = yup.object({ username: name, password })
export const memberSchema = yup.object().shape({ name, email, password, passwordConfirm })
export const memberUpdateSchema = yup.object().shape({ password, passwordConfirm })