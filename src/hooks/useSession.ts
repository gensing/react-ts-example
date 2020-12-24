import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "modules";
import { ILoginForm } from "modules/session/types";
import { actions } from "modules/session/actions";
import { getSession, setSession } from "utils/token";

export function useSession() {

  const session = useSelector((store: IRootState) => store.session);
  const dispatch = useDispatch();
  let history = useHistory()

  const initAction = React.useCallback(() => dispatch({}), [dispatch, actions])
  const loginAction = React.useCallback((form: ILoginForm) => dispatch(actions.login(form)), [dispatch, actions])
  const logoutAction = React.useCallback(() => dispatch(actions.logout()), [dispatch, actions])

  return { session, initAction, logoutAction, loginAction };
}
