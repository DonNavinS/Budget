import React, {createContext, useReducer} from "react"
import stateReducer from "./stateReducer"

const initialState = {
    transactions: [
    {name: "First", ID: Math.floor(Math.random() * 10000), Amount:"10"},    
    {name: "Second", ID: Math.floor(Math.random() * 10000), Amount:"20"}    
    
    ]
}
export const transactionContext = createContext(initialState)

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(stateReducer, initialState.transactions)


const addTransaction = () => {
    dispatch({
        type: "ADD"
    })
}

    return (
        <transactionContext.Provider value={{state: state, addTransaction}}>
            {children}
        </transactionContext.Provider>
    )
}