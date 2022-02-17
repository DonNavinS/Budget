import React, { useState } from "react";
import UpdateModal from "./UpdateModal";

const UpdateTransaction = ({ item }) => {
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <button onClick={() => setUpdate(true)}>UPDATE</button>
      {update && <UpdateModal setUpdate={setUpdate} item={item} />}
    </div>
  );
};

export default UpdateTransaction;
