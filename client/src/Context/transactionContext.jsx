import React, {createContext, useReducer} from "react"
import stateReducer from "./stateReducer"

const initialState = {
    transactions: []
}
export const transactionContext = createContext(initialState)

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(stateReducer, initialState.transactions)


const addTransaction = (name, amount, id) => {
    dispatch({
        type: "ADD",
        payload: {
            name: name,
            amount: amount,
            _id: id
        }
    })
}

const retrieveTransactions = (transactions) => {
    dispatch({
        type: "RETRIEVE",
        payload: transactions
    })
}

    return (
        <transactionContext.Provider value={{state: state, addTransaction, retrieveTransactions}}>
            {children}
        </transactionContext.Provider>
    )
}