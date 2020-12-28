import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { loginApi } from './api';
import * as Duck from './duck';
import { ILogin } from 'types/data/Session';

function* loginAsyncWorker(action: Duck.ILoginRequestAction) {
    try {
        const { data }: AxiosResponse<ILogin> = yield call(loginApi, action.payload)
        yield put<Duck.ILoginSuccessAction>({ type: 'LOGIN_SUCCESS', payload: data })
    } catch (error) {
        yield put<Duck.ILoginFaiureAction>({ type: 'LOGIN_FAILURE' })
    }
}

export function* watcher() {
    yield takeEvery<Duck.ILoginRequestAction>(Duck.LOGIN_REQUEST, loginAsyncWorker)
}