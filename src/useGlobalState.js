import { useState } from "react";

export const useGlobalState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setGlobalState = (key, value) =>
    setState((prev) => ({ ...prev, [key]: value }));
  return [state, setGlobalState];
};
