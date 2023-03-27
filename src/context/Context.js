import React, { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "../reducer/reducer";

export const TodoList = createContext();
const { Provider } = TodoList;

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const value = {
    state,
    dispatch,
  };
  return <Provider value={value}>{children}</Provider>;
};

export default Context;
