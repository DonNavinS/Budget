import React, {createContext, useReducer} from "react"
import stateReducer from "./stateReducer"

export const transactionContext = createContext({
    transactions: [
        {name: "First", ID: 1, Amount: 10},
        {name: "Second", ID: 2, Amount: 20}
    ]
})

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(stateReducer, transactionContext)
    return (
        <transactionContext.Provider value={state.transactions}>
            {children}
        </transactionContext.Provider>
    )
}