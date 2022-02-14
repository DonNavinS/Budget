import { createContext, useReducer } from "react";
import { stateReducer } from "./StateReducer";

const initialState = {
  transactions: [{ description: "", amount: 0, ID: 1 }],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
