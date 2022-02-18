import React, { useContext, useState } from "react";
import { transactionContext } from "../Context/transactionContext";
import Axios from "axios";

const AddTransaction = () => {
  const { addTransaction } = useContext(transactionContext);

  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");

  let buttonDisabled = true;
  if (newName && newAmount) {
    buttonDisabled = false;
  }

  const add = () => {
    Axios.post("http://localhost:3001/new", {
      name: newName,
      amount: newAmount,
    }).then((response) => {
      addTransaction(newName, newAmount, response.data);
      setNewAmount("qwe");
      setNewName("qwe");
    });
  };
  return (
    <div className="flex justify-around items-center" style={{ height: "20%" }}>
      <div className="w-10/12 flex">
        <input
          className="w-3/6 p-2 m-2 bg-gray-300 placeholder-black placeholder-opacity-40 font-semibold rounded-lg"
          type="text"
          value={newName}
          placeholder="Transaction Name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          className="w-3/6 p-2 m-2 bg-gray-300 placeholder-black placeholder-opacity-40 font-semibold rounded-lg"
          type="text"
          value={newAmount}
          placeholder="Transaction Amount"
          onChange={(e) => setNewAmount(e.target.value)}
        />
      </div>
      <button
        className="w-fit h-fit p-2  border-black border-2 rounded-lg  hover:bg-gray-300 hover:border-2 transition ease-in-out duration-150 hover:scale-110"
        onClick={add}
        disabled={buttonDisabled}
      >
        ADD
      </button>
    </div>
  );
};

export default AddTransaction;
