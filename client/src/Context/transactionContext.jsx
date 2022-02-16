import React, {createContext, useReducer} from "react"
import stateReducer from "./stateReducer"

const initialState = {
    transactions: [
    {name: "First", Amount:"10"},    
    {name: "Second", Amount:"20"}    
    ]
}
export const transactionContext = createContext(initialState)

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(stateReducer, initialState.transactions)


const addTransaction = (name, amount) => {
    dispatch({
        type: "ADD",
        payload: {
            name: name,
            amount: amount
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