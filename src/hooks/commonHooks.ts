import { useState } from "react";

interface IState {
  loading: boolean;
  error: boolean;
}

export function useCoustomState() {
  return useState<IState>({
    loading: false, error: false
  });
}