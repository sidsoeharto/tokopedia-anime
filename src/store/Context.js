import React, { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/usePersist";
import reducer, { initialState } from "./reducer";

function Context() {
  const AppContext = createContext(initialState);

  const Provider = (props) => {
    const [value, setValue] = useLocalStorage("globalState");
    const initialStore = Object.keys(value).length > 0 ? value : initialState;
    const store = useReducer(reducer, initialStore);

    useEffect(() => {
      setValue(store[0]);
    }, [setValue, store, value]);

    return (
      <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
    );
  };

  const Consumer = AppContext.Consumer;
  
  return {
    Provider,
    Consumer,
    AppContext,
  };
}

export default Context();