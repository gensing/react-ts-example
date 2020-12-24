import { IFetchState } from "types/IFetchState";
import {
    MEMBER_GET_REQUEST, MEMBER_GET_SUCCESS, MEMBER_GET_FAILURE,
    MEMBER_INSERT_REQUEST, MEMBER_INSERT_SUCCESS, MEMBER_INSERT_FAILURE,
    MEMBER_UPDATE_REQUEST, MEMBER_UPDATE_FAILURE, MEMBER_UPDATE_SUCCESS,
    MEMBER_DELETE_REQUEST, MEMBER_DELETE_SUCCESS, MEMBER_DELETE_FAILURE,
} from './constants';

// data interface
export interface IMemberDetail {
    name: string;
    email: string;
}

export interface IMemberForm extends IMemberDetail, IMemberUpdateForm {
}

export interface IMemberUpdateForm {
    password: string;
}

// state interface
export interface IMemberState {
    detail: { state: IFetchState, data?: IMemberDetail }
    insert: { state: IFetchState }
    delete: { state: IFetchState }
    update: { state: IFetchState }
}

// action interface
export interface IGetMemberRequestAction {
    type: typeof MEMBER_GET_REQUEST
    payload: { id: number }
}

export interface IGetMemberSuccessAction {
    type: typeof MEMBER_GET_SUCCESS
    payload: IMemberDetail
}

export interface IInsertMemberRequestAction {
    type: typeof MEMBER_INSERT_REQUEST
    payload: { params: IMemberForm }
}

export interface IInsertMemberSuccessAction {
    type: typeof MEMBER_INSERT_SUCCESS
}

export interface IUpdateMemberRequestAction {
    type: typeof MEMBER_UPDATE_REQUEST
    payload: { id: number, params: IMemberUpdateForm }
}

export interface IUpdateMemberSuccessAction {
    type: typeof MEMBER_UPDATE_SUCCESS
}

export interface IDeleteMemberRequestAction {
    type: typeof MEMBER_DELETE_REQUEST
    payload: { id: number }
}

export interface IDeleteMemberSuccessAction {
    type: typeof MEMBER_DELETE_SUCCESS
}

interface IMemberFaiureActions {
    type: typeof MEMBER_GET_FAILURE
    | typeof MEMBER_UPDATE_FAILURE
    | typeof MEMBER_INSERT_FAILURE
    | typeof MEMBER_DELETE_FAILURE
}

export type IMemberActions =
    | IGetMemberRequestAction | IGetMemberSuccessAction
    | IInsertMemberRequestAction | IInsertMemberSuccessAction
    | IUpdateMemberRequestAction | IUpdateMemberSuccessAction
    | IDeleteMemberRequestAction | IDeleteMemberSuccessAction
    | IMemberFaiureActions;
