import React, { useContext, useState } from "react";
import Axios from "axios";
import { transactionContext } from "../Context/transactionContext";

const UpdateModal = ({ setUpdate, item }) => {
  const [newName, setNewName] = useState("initial");
  const [newAmount, setNewAmount] = useState(0);
  const { updateTransactionState } = useContext(transactionContext);

  const updateTransaction = (item) => {
    Axios.put(`http://localhost:3001/update/${item._id}`, {
      name: newName,
      amount: newAmount,
    });
    setUpdate(false);
    updateTransactionState(newName, newAmount, item._id);
  };

  return (
    <div className="absolute inset-y-36 inset-x-72 rounded-lg bg-red-400">
      <input
        type="text"
        placeholder="Updated Name"
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Updated Amount"
        onChange={(e) => setNewAmount(e.target.value)}
      />
      <button onClick={() => setUpdate(false)}>Close</button>
      <button onClick={() => updateTransaction(item)}>Update</button>
    </div>
  );
};

export default UpdateModal;
