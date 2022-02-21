import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { transactionContext } from "../Context/transactionContext";
import RecentTransactions from "./RecentTransactions";

const TransactionList = () => {
  const { state, retrieveTransactions } = useContext(transactionContext);
  const [recentList, setRecentList] = useState("all");

  const renderAll = state;
  const renderIncome = state.filter((transaction) => transaction.income);
  const renderExpenses = state.filter((transaction) => !transaction.income);

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
      {recentList === "all" && <RecentTransactions renderType={renderAll} />}
      {recentList === "incomes" && (
        <RecentTransactions renderType={renderIncome} />
      )}
      {recentList === "expenses" && (
        <RecentTransactions renderType={renderExpenses} />
      )}
    </div>
  );
};

export default TransactionList;
