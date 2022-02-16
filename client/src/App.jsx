import { useState, useContext } from "react";
import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import TransactionList from "./Components/TransactionList";
import { ContextProvider } from "./Context/transactionContext";


function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
  <ContextProvider>
    <AddTransaction />
    <TransactionList />
  </ContextProvider>
    </div>
  )
}

export default App;
