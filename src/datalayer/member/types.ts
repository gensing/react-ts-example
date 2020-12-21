import { IMemberDetail } from "../../types/membe";

export const GET_MEMBER = 'MEMBER';
export const GET_MEMBERS = 'MEMBERS';

interface IFetchState {
    loading: boolean;
    error: boolean;
}

export interface IMemberDetailState extends IFetchState {
    data: IMemberDetail | null
}

export interface IMemberListState extends IFetchState {
    data: IMemberDetail[]
}

export interface IMemberState {
    detail: IMemberDetailState
    list: IMemberListState
}

interface IGetMemberAction {
    type: typeof GET_MEMBER
    payload: IMemberDetailState
}

interface IGetMemberListAction {
    type: typeof GET_MEMBERS
    payload: IMemberListState
}

export type IMemberActions = IGetMemberAction | IGetMemberListAction;
