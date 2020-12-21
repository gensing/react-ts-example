import { IMemberDetail } from '../../types/membe'
import { GET_MEMBER, GET_MEMBERS, IMemberActions } from './types'

export function getMemberAction(data: IMemberDetail): IMemberActions {
    return { type: GET_MEMBER, payload: { loading: false, error: false, data } }
}
export function loadMemberAction(): IMemberActions {
    return { type: GET_MEMBER, payload: { loading: true, error: false, data: null } }
}
export function failMemberAction(): IMemberActions {
    return { type: GET_MEMBER, payload: { loading: false, error: true, data: null } }
}
export function getMemberListAction(data: IMemberDetail[]): IMemberActions {
    return { type: GET_MEMBERS, payload: { loading: false, error: false, data } }
}
export function loadMembersAction(): IMemberActions {
    return { type: GET_MEMBER, payload: { loading: true, error: false, data: null } }
}
export function failMembersAction(): IMemberActions {
    return { type: GET_MEMBER, payload: { loading: false, error: true, data: null } }
}
