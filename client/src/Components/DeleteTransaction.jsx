import React, { useContext } from "react";
import Axios from "axios";
import { transactionContext } from "../Context/transactionContext";

const DeleteTransaction = ({ item }) => {
  const { deleteTransactionFromState } = useContext(transactionContext);

  const deleteTransaction = (item) => {
    Axios.delete(`http://localhost:3001/delete/${item._id}`);
    deleteTransactionFromState(item._id);
  };
  return <button onClick={() => deleteTransaction(item)}>DELETE</button>;
};

export default DeleteTransaction;
