import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from './actions';
import { loginApi } from './api';
import { LOGIN_REQUEST } from './constants';
import { ILogin, ILoginRequestAction } from './types';

function* loginAsyncWorker(action: ILoginRequestAction) {
    try {
        const { data }: AxiosResponse<ILogin> = yield call(loginApi, action.payload)
        yield put(actions.loginSuccess(data))
    } catch (error) {
        yield put(actions.loginFailure())
    }
}

export function* watcher() {
    yield takeEvery(LOGIN_REQUEST, loginAsyncWorker)
}