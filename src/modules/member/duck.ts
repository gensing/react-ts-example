import { IMemberDetail, IMemberForm, IMemberUpdateForm } from "types/data/Member";
import { IFetchState } from "types/IFetchState";

export const MEMBER_GET_REQUEST = 'MEMBER_GET_REQUEST';
export const MEMBER_GET_SUCCESS = 'MEMBER_GET_SUCCESS';
export const MEMBER_GET_FAILURE = 'MEMBER_GET_FAILURE';
export const MEMBER_INSERT_REQUEST = 'MEMBER_INSERT_REQUEST';
export const MEMBER_INSERT_SUCCESS = 'MEMBER_INSERT_SUCCESS';
export const MEMBER_INSERT_FAILURE = 'MEMBER_INSERT_FAILURE';
export const MEMBER_UPDATE_REQUEST = 'MEMBER_UPDATE_REQUEST';
export const MEMBER_UPDATE_SUCCESS = 'MEMBER_UPDATE_SUCCESS';
export const MEMBER_UPDATE_FAILURE = 'MEMBER_UPDATE_FAILURE';
export const MEMBER_DELETE_REQUEST = 'MEMBER_DELETE_REQUEST';
export const MEMBER_DELETE_SUCCESS = 'MEMBER_DELETE_SUCCESS';
export const MEMBER_DELETE_FAILURE = 'MEMBER_DELETE_FAILURE';

// action interface
export interface IGetMemberRequestAction {
    type: typeof MEMBER_GET_REQUEST
    payload: { id: number }
}
export interface IInsertMemberRequestAction {
    type: typeof MEMBER_INSERT_REQUEST
    payload: { params: IMemberForm }
}
export interface IUpdateMemberRequestAction {
    type: typeof MEMBER_UPDATE_REQUEST
    payload: { id: number, params: IMemberUpdateForm }
}
export interface IDeleteMemberRequestAction {
    type: typeof MEMBER_DELETE_REQUEST
    payload: { id: number }
}
export interface IGetMemberSuccessAction {
    type: typeof MEMBER_GET_SUCCESS
    payload: IMemberDetail
}

export interface IInsertMemberSuccessAction {
    type: typeof MEMBER_INSERT_SUCCESS
}

export interface IUpdateMemberSuccessAction {
    type: typeof MEMBER_UPDATE_SUCCESS
}

export interface IDeleteMemberSuccessAction {
    type: typeof MEMBER_DELETE_SUCCESS
}

export interface IMemberFaiureActions {
    type: typeof MEMBER_GET_FAILURE
    | typeof MEMBER_UPDATE_FAILURE
    | typeof MEMBER_INSERT_FAILURE
    | typeof MEMBER_DELETE_FAILURE
}

export type IMemberActionTypes =
    | IGetMemberRequestAction | IGetMemberSuccessAction
    | IInsertMemberRequestAction | IInsertMemberSuccessAction
    | IUpdateMemberRequestAction | IUpdateMemberSuccessAction
    | IDeleteMemberRequestAction | IDeleteMemberSuccessAction
    | IMemberFaiureActions;

// state interface
export interface IMemberState {
    detail: { state: IFetchState, data?: IMemberDetail }
    insert: { state: IFetchState }
    delete: { state: IFetchState }
    update: { state: IFetchState }
}

const initState: IMemberState = {
    detail: { state: "init", data: undefined },
    insert: { state: "init" },
    delete: { state: "init" },
    update: { state: "init" },
}

function reducer(state = initState, action: IMemberActionTypes): IMemberState {
    switch (action.type) {
        case MEMBER_GET_REQUEST: return { ...state, detail: { state: "loading", data: undefined } };
        case MEMBER_GET_SUCCESS: return { ...state, detail: { state: "success", data: action.payload } };
        case MEMBER_GET_FAILURE: return { ...state, detail: { state: "failure", data: undefined } };
        case MEMBER_INSERT_REQUEST: return { ...state, insert: { state: "loading" } };
        case MEMBER_INSERT_SUCCESS: return { ...state, insert: { state: "success" } };
        case MEMBER_INSERT_FAILURE: return { ...state, insert: { state: "failure" } };
        case MEMBER_UPDATE_REQUEST: return { ...state, update: { state: "loading" } };
        case MEMBER_UPDATE_SUCCESS: return { ...state, update: { state: "success" } };
        case MEMBER_UPDATE_FAILURE: return { ...state, update: { state: "failure" } };
        case MEMBER_DELETE_REQUEST: return { ...state, delete: { state: "loading" } };
        case MEMBER_DELETE_SUCCESS: return { ...state, delete: { state: "success" } };
        case MEMBER_DELETE_FAILURE: return { ...state, delete: { state: "failure" } };
        default: return state;
    }
}

export default reducer;