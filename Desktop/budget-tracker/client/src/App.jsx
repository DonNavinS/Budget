import { useState, useContext } from "react";
import "./App.css";
import { ContextProvider, transactionContext } from "./Context/transactionContext";


function App() {
  const transactions = useContext(transactionContext)

  console.log(transactions)
  return (
    <ContextProvider>
      <div>{transactions.transactions[0].name}</div>

    </ContextProvider>
  )
}

export default App;
