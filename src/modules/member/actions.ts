import {
    MEMBER_GET_REQUEST, MEMBER_GET_SUCCESS, MEMBER_GET_FAILURE,
    MEMBER_INSERT_REQUEST, MEMBER_INSERT_SUCCESS, MEMBER_INSERT_FAILURE,
    MEMBER_UPDATE_REQUEST, MEMBER_UPDATE_FAILURE, MEMBER_UPDATE_SUCCESS,
    MEMBER_DELETE_REQUEST, MEMBER_DELETE_SUCCESS, MEMBER_DELETE_FAILURE,
} from './constants';
import { IMemberDetail, IMemberActions, IMemberForm, IMemberUpdateForm } from './types'

export const getMemberAction = (id: number): IMemberActions => ({ type: MEMBER_GET_REQUEST, payload: { id } })
export const getMemberSuccessAction = (data: IMemberDetail): IMemberActions => ({ type: MEMBER_GET_SUCCESS, payload: data })
export const getMemberFailureAction = (): IMemberActions => ({ type: MEMBER_GET_FAILURE })
export const insertMemberAction = (params: IMemberForm): IMemberActions => ({ type: MEMBER_INSERT_REQUEST, payload: { params } })
export const insertMemberSuccessAction = (): IMemberActions => ({ type: MEMBER_INSERT_SUCCESS })
export const insertMemberFailureAction = (): IMemberActions => ({ type: MEMBER_INSERT_FAILURE })
export const updateMemberAction = (id: number, params: IMemberUpdateForm): IMemberActions => ({ type: MEMBER_UPDATE_REQUEST, payload: { id, params } })
export const updateMemberSuccessAction = (): IMemberActions => ({ type: MEMBER_UPDATE_SUCCESS })
export const updateMemberFailureAction = (): IMemberActions => ({ type: MEMBER_UPDATE_FAILURE })
export const deleteMemberAction = (id: number): IMemberActions => ({ type: MEMBER_DELETE_REQUEST, payload: { id } })
export const deleteMemberSuccessAction = (): IMemberActions => ({ type: MEMBER_DELETE_SUCCESS })
export const deleteMemberFailureAction = (): IMemberActions => ({ type: MEMBER_DELETE_FAILURE })