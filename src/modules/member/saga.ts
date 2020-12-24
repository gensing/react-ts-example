import { call, put, takeEvery } from 'redux-saga/effects';
import { getApi, postApi, deletApi, putApi } from './api';
import {
    getMemberSuccessAction, getMemberFailureAction,
    insertMemberSuccessAction, insertMemberFailureAction,
    updateMemberSuccessAction, updateMemberFailureAction,
    deleteMemberSuccessAction, deleteMemberFailureAction
} from './actions';
import { AxiosResponse } from 'axios';
import { IMemberDetail, IGetMemberRequestAction, IInsertMemberRequestAction, IUpdateMemberRequestAction, IDeleteMemberRequestAction } from './types';
import { MEMBER_DELETE_REQUEST, MEMBER_GET_REQUEST, MEMBER_INSERT_REQUEST, MEMBER_UPDATE_REQUEST } from './constants';

function* fetchMemberAsyncSaga(action: IGetMemberRequestAction) {
    try {
        const { data }: AxiosResponse<IMemberDetail> = yield call(getApi, action.payload.id)
        yield put(getMemberSuccessAction(data))
    } catch (error) {
        yield put(getMemberFailureAction())
    }
}

function* insertMemberAsyncSaga(action: IInsertMemberRequestAction) {
    try {
        const { params } = action.payload;
        yield call(postApi, params)
        yield put(insertMemberSuccessAction())
    } catch (error) {
        yield put(insertMemberFailureAction())
    }
}

function* updateMemberAsyncSaga(action: IUpdateMemberRequestAction) {
    try {
        const { id, params } = action.payload;
        yield call(putApi, id, params)
        yield put(updateMemberSuccessAction())
    } catch (error) {
        yield put(updateMemberFailureAction())
    }
}

function* deleteMemberAsyncSaga(action: IDeleteMemberRequestAction) {

    try {
        const { id } = action.payload;
        yield call(deletApi, id)
        yield put(deleteMemberSuccessAction())
    } catch (error) {
        yield put(deleteMemberFailureAction())
    }
}

export function* watcher() {
    yield takeEvery(MEMBER_GET_REQUEST, fetchMemberAsyncSaga);
    yield takeEvery(MEMBER_INSERT_REQUEST, insertMemberAsyncSaga);
    yield takeEvery(MEMBER_UPDATE_REQUEST, updateMemberAsyncSaga);
    yield takeEvery(MEMBER_DELETE_REQUEST, deleteMemberAsyncSaga);
}
