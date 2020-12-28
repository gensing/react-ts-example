import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { getApi, postApi, deletApi, putApi } from './api';
import * as Duck from './duck';
import { IMemberDetail } from 'types/data/Member';

export function* watcher() {

    yield takeEvery<Duck.IGetMemberRequestAction>(Duck.MEMBER_GET_REQUEST, function* (action) {
        try {
            const { data }: AxiosResponse<IMemberDetail> = yield call(getApi, action.payload.id)
            yield put<Duck.IGetMemberSuccessAction>({ type: Duck.MEMBER_GET_SUCCESS, payload: data })
        } catch (error) {
            yield put<Duck.IMemberFaiureActions>({ type: Duck.MEMBER_GET_FAILURE })
        }
    });

    yield takeEvery<Duck.IInsertMemberRequestAction>(Duck.MEMBER_INSERT_REQUEST, function* (action) {
        try {
            yield call(postApi, action.payload.params)
            yield put<Duck.IInsertMemberSuccessAction>({ type: Duck.MEMBER_INSERT_SUCCESS })
        } catch (error) {
            yield put<Duck.IMemberFaiureActions>({ type: Duck.MEMBER_INSERT_FAILURE })
        }
    });

    yield takeEvery<Duck.IUpdateMemberRequestAction>(Duck.MEMBER_UPDATE_REQUEST, function* (action) {
        try {
            yield call(putApi, action.payload.id, action.payload.params)
            yield put<Duck.IInsertMemberSuccessAction>({ type: Duck.MEMBER_INSERT_SUCCESS })
        } catch (error) {
            yield put<Duck.IMemberFaiureActions>({ type: Duck.MEMBER_UPDATE_FAILURE })
        }
    });

    yield takeEvery<Duck.IDeleteMemberRequestAction>(Duck.MEMBER_DELETE_REQUEST, function* (action) {
        try {
            yield call(deletApi, action.payload.id)
            yield put<Duck.IDeleteMemberSuccessAction>({ type: Duck.MEMBER_DELETE_SUCCESS })
        } catch (error) {
            yield put<Duck.IMemberFaiureActions>({ type: Duck.MEMBER_DELETE_FAILURE })
        }
    });
}
