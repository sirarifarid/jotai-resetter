import React from "react";
import { createStore, Provider } from "jotai";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
const ResetContext = createContext<CallableFunction>(() => {});

const reset = 0;

const reset_reducer = () => {
  return Math.random();
};

export const ResetProvider = (
  props: PropsWithChildren & {
    store?: ReturnType<typeof createStore>;
  }
) => {
  const [reset_a, reset_atoms] = useReducer(reset_reducer, reset);

  return (
    <ResetContext.Provider value={reset_atoms}>
      <Provider key={reset_a} children={props.children} store={props.store} />
    </ResetContext.Provider>
  );
};

export const useResetJotai = () => useContext(ResetContext);
