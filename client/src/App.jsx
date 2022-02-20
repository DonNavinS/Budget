import { useState, useContext } from "react";
import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Header from "./Components/Header";
import TransactionList from "./Components/TransactionList";
import { ContextProvider } from "./Context/transactionContext";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <div
        className="flex flex-col items-center w-5/12 border-black border-2 bg-slate-100"
        style={{ height: "80%" }}
      >
        <Header />

        <ContextProvider>
          <AddTransaction />
          <TransactionList />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
