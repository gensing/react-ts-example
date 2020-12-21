import { useCallback, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import { RootState } from "../datalayer";
import { sessionActions } from "../datalayer/session/sessionDuck";
import { loginApi } from "../api/sessionApi";
import { loginSchema, memberSchema } from "../types/membe";
import { ILoginRequest } from "../types/session";
import { setSession } from "../utils/token";

export function useSession() {
  const dispatch = useDispatch();
  const session = useSelector((store: RootState) => store.auth);
  return session;
}

export function useLogout() {
  let history = useHistory();
  const dispatch = useDispatch();

  const logoutAction = useCallback(() => {
    dispatch(sessionActions.logout())
    history.push("/")
  }, [dispatch])

  return { logoutAction };
}
