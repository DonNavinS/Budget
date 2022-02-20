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

  let transactionType;

  const add = () => {
    Axios.post("http://localhost:3001/new", {
      name: newName,
      amount: newAmount,
      income: transactionType,
    }).then((response) => {
      addTransaction(newName, newAmount, response.data);
      setNewAmount("");
      setNewName("");
    });
  };
  return (
    <div className="flex justify-around items-center" style={{ height: "20%" }}>
      <div className="w-9/12 flex">
        <input
          className="w-3/6 p-2 m-2 bg-gray-300 placeholder-black placeholder-opacity-40 font-semibold rounded-lg"
          type="text"
          value={newName}
          placeholder="Transaction Name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          className="w-3/6 p-2 m-2 bg-gray-300 placeholder-black placeholder-opacity-40 font-semibold rounded-lg"
          type="number"
          value={newAmount}
          placeholder="Transaction Amount"
          onChange={(e) => setNewAmount(e.target.value)}
        />
      </div>
      <div className="flex flex-col text-sm items-center justify-center">
        <button
          className="w-fit h-fit p-1 border-black border-2 rounded-lg  hover:bg-green-300 hover:border-2 transition ease-in-out duration-150 hover:scale-110"
          onClick={() => {
            transactionType = true;
            add();
          }}
          disabled={buttonDisabled}
        >
          Add Income
        </button>
        <button
          className="w-fit h-fit p-1 border-black border-2 rounded-lg  hover:bg-red-300 hover:border-2 transition ease-in-out duration-150 hover:scale-110"
          onClick={() => {
            transactionType = false;
            add();
          }}
          disabled={buttonDisabled}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;
