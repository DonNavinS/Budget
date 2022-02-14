import { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Transactions from "./components/Transactions";
import { GlobalContext, GlobalProvider } from "./context/GlobalState";

function App() {
  const context = useContext(GlobalContext);
  console.log(context);
  return (
    <GlobalProvider>
      <div className="container is-flex justify-content-center">
        <div>{context.transactions[0].ID}</div>
      </div>
    </GlobalProvider>
  );
}

export default App;
