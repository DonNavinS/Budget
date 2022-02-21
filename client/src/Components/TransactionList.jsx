import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { transactionContext } from "../Context/transactionContext";
import UpdateTransaction from "./UpdateTransaction";
import DeleteTransaction from "./DeleteTransaction";

const TransactionList = () => {
  const { state, retrieveTransactions } = useContext(transactionContext);
  const [update, setUpdate] = useState(false);
  const [recentList, setRecentList] = useState("all");

  let hoverEffects;
  !update
    ? (hoverEffects =
        "hover:scale-105 hover:bg-gray-400 transition duration-75")
    : (hoverEffects = "");

  useEffect(() => {
    Axios.get("http://localhost:3001/retrieve").then((response) => {
      retrieveTransactions(response.data);
    });
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center w-full "
      style={{ height: "70%" }}
    >
      <div className="flex gap-x-6" style={{ height: "20%" }}>
        <button
          onClick={() => {
            setRecentList("all");
          }}
          className="my-3 font-medium text-lg"
        >
          Recent Transactions
        </button>
        <button
          onClick={() => {
            setRecentList("incomes");
          }}
          className="my-3 font-medium text-lg"
        >
          Recent Income
        </button>
        <button
          onClick={() => {
            setRecentList("expenses");
          }}
          className="my-3 font-medium text-lg"
        >
          Recent Expenses
        </button>
      </div>
      <div
        className="w-full flex flex-col items-center overflow-auto"
        style={{ height: "80%" }}
      >
        {state &&
          state.map((item) => (
            <div
              key={item._id}
              className={`flex justify-between w-10/12 rounded ${hoverEffects}`}
            >
              {item.income === true ? (
                <div className="bg-green-500" style={{ width: "1%" }}></div>
              ) : (
                <div className="bg-red-500" style={{ width: "1%" }}></div>
              )}
              <div className="flex justify-center w-3/12 ">
                <h1>{item.name}</h1>
              </div>
              {item.income ? (
                <div className="flex justify-center w-3/12 ">
                  <h1>{item.amount}</h1>
                </div>
              ) : (
                <div className="flex justify-center w-3/12 ">
                  <h1>-{item.amount}</h1>
                </div>
              )}
              <div className="flex justify-center w-3/12 ">
                <DeleteTransaction item={item} />
              </div>
              <div className="flex justify-center w-3/12 ">
                <UpdateTransaction
                  item={item}
                  update={update}
                  setUpdate={setUpdate}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TransactionList;
