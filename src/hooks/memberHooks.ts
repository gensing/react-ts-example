import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import { IMemberInsertForm, IMemberUpdateForm, memberSchema, memberUpdateSchema } from "../types/membe";
import { RootState } from "../datalayer";
import { failMemberAction, getMemberAction, loadMemberAction } from "../datalayer/member/actions";
import { sessionActions } from "../datalayer/session/sessionDuck";
import { getApi, postApi, putApi, deletApi } from "../api/memberApi";


export function useMemberDetail(id: number) {
  let history = useHistory();
  const dispatch = useDispatch();
  const member = useSelector((store: RootState) => store.member);

  const onClick = useCallback(() => {
    deletApi(id).then(() => {
      dispatch(sessionActions.logout)
      history.push("/")
    }).catch(() => {

    });
  }, []);

  useEffect(() => {
    dispatch(loadMemberAction());
    getApi(id).then((resp) => {
      dispatch(getMemberAction(resp.data))
    }).catch(() => {
      dispatch(failMemberAction())
    });
  }, [id])

  return { member, onClick };
}

export function useMemberInsertForm() {
  let history = useHistory();
  const formMethods = useForm<IMemberInsertForm>({ resolver: yupResolver(memberSchema) })

  const handleSubmit = useCallback(formMethods.handleSubmit((formValues) => {
    postApi(formValues).then(() => {
      history.push("/")
    }).catch((err) => {
      alert(err)
    });
  }), []);

  return { ...formMethods, handleSubmit };
}


export function useMemberUpdateForm(id: number) {
  let history = useHistory();

  const dispatch = useDispatch();
  const formMethods = useForm<IMemberUpdateForm>({ resolver: yupResolver(memberUpdateSchema) })

  const handleSubmit = useCallback(formMethods.handleSubmit((formValues) => {
    putApi(id, formValues).then(() => {
      history.push("/")
      dispatch(sessionActions.logout())
    }).catch(() => {

    });
  }), [id]);

  return { ...formMethods, handleSubmit };
}
