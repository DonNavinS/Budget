import React, { useContext, useState } from "react";
import { transactionContext } from "../Context/transactionContext";
import DeleteTransaction from "./DeleteTransaction";
import UpdateTransaction from "./UpdateTransaction";

const RecentTransactions = () => {
  const { state } = useContext(transactionContext);
  const [update, setUpdate] = useState(false);

  let hoverEffects;
  !update
    ? (hoverEffects =
        "hover:scale-105 hover:bg-gray-400 transition duration-75")
    : (hoverEffects = "");

  return (
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
  );
};

export default RecentTransactions;
