import React, { createContext, useEffect, useReducer, ReactNode } from "react";
import { useLocalStorage } from "../hooks/usePersist";
import reducer, { initialState, State } from "./reducer";
import { Action } from "./actions";

interface ContextProps {
  Provider: React.FC<{ children: ReactNode }>;
  Consumer: React.Consumer<[State, React.Dispatch<Action>]>;
  AppContext: React.Context<[State, React.Dispatch<Action>]>;
}

const AppContext = createContext<[State, React.Dispatch<Action>]>([initialState, () => {}]);

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useLocalStorage("globalState");
  const initialStore = Object.keys(value)?.length > 0 ? value : initialState;
  const store = useReducer(reducer, initialStore);

  useEffect(() => {
    setValue(store[0]);
  }, [setValue, store, value]);

  return (
    <AppContext.Provider value={store}>{children}</AppContext.Provider>
  );
};

const Consumer = AppContext.Consumer;

const Context: ContextProps = {
  Provider,
  Consumer,
  AppContext,
};

export default Context;
