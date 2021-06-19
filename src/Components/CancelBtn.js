import React from "react";

function CancelBtn({ setShowModal }) {
  let hideModal = () => {
    setShowModal("overly");
  };
  return (
    <button onClick={hideModal} className="close-modal">
      X
    </button>
  );
}

export default CancelBtn;
