import { call, put, takeEvery } from 'redux-saga/effects';
import { getApi } from '../../api/memberApi';
import { getMemberAction, getMemberListAction } from './actions';

function* fetchMember(action: any) {
    //yield put(authActions.request());
    try {
        const { data } = yield call(getApi, action.payload);
        yield put(getMemberAction(data));
    } catch (e) {
        //yield put(authActions.failure());
    }
}

function* authSaga() {
    yield takeEvery('--', fetchMember);
}