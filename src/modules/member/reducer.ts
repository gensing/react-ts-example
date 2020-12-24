import {
    MEMBER_GET_REQUEST, MEMBER_GET_SUCCESS, MEMBER_GET_FAILURE,
    MEMBER_INSERT_REQUEST, MEMBER_INSERT_SUCCESS, MEMBER_INSERT_FAILURE,
    MEMBER_UPDATE_REQUEST, MEMBER_UPDATE_FAILURE, MEMBER_UPDATE_SUCCESS,
    MEMBER_DELETE_REQUEST, MEMBER_DELETE_SUCCESS, MEMBER_DELETE_FAILURE,
} from "./constants";
import { IMemberState, IMemberActions } from "./types"


const initState: IMemberState = {
    detail: { state: "init", data: undefined },
    insert: { state: "init" },
    delete: { state: "init" },
    update: { state: "init" },
}

function reducer(state = initState, action: IMemberActions): IMemberState {
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