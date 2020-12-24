import { AxiosResponse } from "axios";
import React from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, data: null, error: null, success: false };
    case 'SUCCESS':
      return { loading: false, data: action.data, error: null, success: true };
    case 'ERROR':
      return { loading: false, data: null, error: action.error, success: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function useApi<P, T>(callback: (args: P) => Promise<AxiosResponse<T>>): {
  state: { success: boolean, loading: boolean, error: any, data: T | null },
  fetchData: (args: P) => void
} {
  const [state, dispatch] = React.useReducer(reducer, {
    success: false,
    loading: false,
    error: false,
    data: null,
  });

  const fetchData = React.useCallback(async (param: P) => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback(param);
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  }, [dispatch, callback]);

  return { state, fetchData };
}
