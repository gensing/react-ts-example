
import * as yup from 'yup';

export const name = yup.string().required('username is required');
export const email = yup.string().email().required('Email is required');
export const password = yup.string().required('Password is requred').matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
export const passwordConfirm = yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')