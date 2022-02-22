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
    Axios.get("https://navin-budget-tracker.herokuapp.com/retrieve").then(
      (response) => {
        retrieveTransactions(response.data);
      }
    );
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
          className="my-5 font-medium text-lg link link-underline link-underline-black"
        >
          Recent Transactions
        </button>
        <button
          onClick={() => {
            setRecentList("incomes");
          }}
          className="my-5 font-medium text-lg link link-underline link-underline-black"
        >
          Recent Income
        </button>
        <button
          onClick={() => {
            setRecentList("expenses");
          }}
          className="my-5 font-medium text-lg link link-underline link-underline-black"
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
