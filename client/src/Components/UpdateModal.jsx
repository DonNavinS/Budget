import React, { useContext, useState } from "react";
import Axios from "axios";
import { transactionContext } from "../Context/transactionContext";

const UpdateModal = ({ setShowModal, item, setHover }) => {
  const [newName, setNewName] = useState(item.name);
  const [newAmount, setNewAmount] = useState(item.amount);
  const { updateTransactionState } = useContext(transactionContext);

  let buttonDisabled;
  newName && newAmount ? (buttonDisabled = false) : (buttonDisabled = true);

  let modalGreen;
  item.income ? (modalGreen = "bg-green-400") : (modalGreen = "bg-red-400");

  const updateTransaction = (item) => {
    Axios.put(`http://localhost:3001/update/${item._id}`, {
      name: newName,
      amount: newAmount,
    });
    setShowModal(false);
    updateTransactionState(newName, newAmount, item._id, item.income);
  };

  return (
    <div
      className={`absolute inset-y-36 inset-x-80 rounded-lg ${modalGreen} flex flex-col justify-center items-center`}
    >
      <div className="" style={{ height: "20%" }}>
        <h1 className="text-4xl font-semibold">Update Transaction</h1>
      </div>
      <div
        className=" flex flex-col items-align justify-center"
        style={{ height: "40%" }}
      >
        <div className=" flex justify-around">
          <input
            type="text"
            value={newName}
            className="rounded p-1 m-2"
            placeholder="Updated Name"
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="number"
            value={newAmount}
            className="rounded p-1 m-2"
            placeholder="Updated Amount"
            onChange={(e) => setNewAmount(e.target.value)}
          />
        </div>
        <div className="flex justify-around">
          <button
            className="rounded p-1 m-2 border-2 border-black hover:text-white hover:scale-110 transition duration-100"
            disabled={buttonDisabled}
            onClick={() => {
              updateTransaction(item);
              setHover(true);
            }}
          >
            Update
          </button>
          <button
            className="rounded p-1 m-2 border-2 border-black hover:text-white hover:scale-110 transition duration-100"
            onClick={() => {
              setShowModal(false);
              setHover(true);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
