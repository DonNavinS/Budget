import React, { useState } from "react";
import UpdateModal from "./UpdateModal";

const UpdateTransaction = ({ item, setHover }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
          setHover(false);
        }}
      >
        UPDATE
      </button>
      {showModal && (
        <UpdateModal
          item={item}
          setShowModal={setShowModal}
          setHover={setHover}
        />
      )}
    </div>
  );
};

export default UpdateTransaction;
