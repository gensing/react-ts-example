import { GET_MEMBER, GET_MEMBERS, IMemberState, IMemberActions } from "./types"

export default function reducer(state: IMemberState = {
    detail: {
        loading: false,
        error: false,
        data: null
    },
    list: {
        loading: false,
        error: false,
        data: []
    }
}, action: IMemberActions): IMemberState {
    switch (action.type) {
        case GET_MEMBER: return { ...state, detail: { ...action.payload } };
        case GET_MEMBERS: return { ...state, list: { ...action.payload } };
        default: return state;
    }
}