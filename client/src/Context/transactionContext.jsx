import React, { createContext, useReducer } from "react";
import stateReducer from "./stateReducer";

const initialState = {
  transactions: [],
};
export const transactionContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState.transactions);

  const retrieveTransactions = (transactions) => {
    dispatch({
      type: "RETRIEVE",
      payload: transactions,
    });
  };

  const addTransaction = (name, amount, id) => {
    dispatch({
      type: "ADD",
      payload: {
        name: name,
        amount: amount,
        _id: id,
      },
    });
  };

  const deleteTransactionFromState = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const updateTransactionState = (name, amount, id) => {
    dispatch({
      type: "UPDATE",
      payload: {
        name: name,
        amount: amount,
        _id: id,
      },
    });
  };

  return (
    <transactionContext.Provider
      value={{
        state: state,
        addTransaction,
        retrieveTransactions,
        deleteTransactionFromState,
        updateTransactionState,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
};
