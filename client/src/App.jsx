import { useState, useContext } from "react";
import "./App.css";
import TransactionList from "./Components/TransactionList";
import { ContextProvider } from "./Context/transactionContext";


function App() {
  return (
  <ContextProvider>
    <TransactionList />
  </ContextProvider>
  )
}

export default App;
