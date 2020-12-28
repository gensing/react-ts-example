import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "modules";
import { IMemberForm, IMemberUpdateForm } from "types/data/Member";
import { IMemberActionTypes } from "./duck";

export function useMember() {

  const member = useSelector((store: IRootState) => store.member)

  const dispatch = useDispatch<Dispatch<IMemberActionTypes>>();

  const getMember = React.useCallback((id: number) => {
    dispatch({ type: "MEMBER_GET_REQUEST", payload: { id } })
  }, [dispatch])

  const insertMember = React.useCallback((form: IMemberForm) => {
    dispatch({ type: "MEMBER_INSERT_REQUEST", payload: { params: form } })
  }, [dispatch])

  const updateMember = React.useCallback((id: number, form: IMemberUpdateForm) => {
    dispatch({ type: "MEMBER_UPDATE_REQUEST", payload: { id, params: form } })
  }, [dispatch])

  const deleteMember = React.useCallback((id: number) => {
    dispatch({ type: "MEMBER_DELETE_REQUEST", payload: { id } })
  }, [dispatch])

  return { member, getMember, insertMember, updateMember, deleteMember };
}
