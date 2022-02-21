import React from "react";
import UpdateModal from "./UpdateModal";

const UpdateTransaction = ({ item, update, setUpdate }) => {
  return (
    <div>
      <button onClick={() => setUpdate(true)}>UPDATE</button>
      {update && <UpdateModal setUpdate={setUpdate} item={item} />}
    </div>
  );
};

export default UpdateTransaction;
