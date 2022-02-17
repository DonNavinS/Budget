import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { transactionContext } from "../Context/transactionContext";
import UpdateTransaction from "./UpdateTransaction";

const TransactionList = () => {
  const { state, retrieveTransactions, deleteTransactionFromState } =
    useContext(transactionContext);

  const deleteTransaction = (item) => {
    Axios.delete(`http://localhost:3001/delete/${item._id}`);
    deleteTransactionFromState(item._id);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/retrieve").then((response) => {
      retrieveTransactions(response.data);
    });
  }, []);
  return (
    <div className="flex flex-col">
      {state &&
        state.map((item) => (
          <div key={item._id} className="flex justify-between gap-4">
            <div className=" flex justify-center">
              <h1>{item.name}</h1>
            </div>
            <div className="flex justify-center">
              <h1>{item.amount}</h1>
            </div>
            <div className="flex justify-center">
              <button onClick={() => deleteTransaction(item)}>DELETE</button>
            </div>
            <div className="flex justify-center">
              <UpdateTransaction item={item} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default TransactionList;
