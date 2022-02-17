import React, { useState } from "react";
import Axios from "axios";

const UpdateModal = ({ setUpdate, item }) => {
  const [newName, setNewName] = useState("initial");
  const [newAmount, setNewAmount] = useState(0);

  const updateTransaction = (item) => {
    Axios.put(`http://localhost:3001/update/${item._id}`, {
      name: newName,
      amount: newAmount,
    });
    setUpdate(false);
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
