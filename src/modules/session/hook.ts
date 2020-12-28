import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "modules";
import { ILoginForm } from "types/data/Session";
import { ISessionActionTypes } from './duck';

export function useSession() {

  const session = useSelector((store: IRootState) => store.session);
  const dispatch = useDispatch<Dispatch<ISessionActionTypes>>();

  const loginDispatch = React.useCallback((form: ILoginForm) => {
    dispatch({ type: 'LOGIN_REQUEST', payload: { ...form } })
  }, [dispatch])

  const logoutDispatch = React.useCallback(() => {
    dispatch({ type: 'LOGOUT_REQUEST' })
  }, [dispatch])

  return { session, logoutDispatch, loginDispatch };
}