import React from "react";
import Modal from "./Modal";

const HourlyBtn = ({ setShowModal }) => {
  let modalHanller = () => {
    setShowModal("overly show-modal");
  };

  return (
    <button onClick={modalHanller} className="Hourly-btn">
      Hourly Frocast
    </button>
  );
};

export default HourlyBtn;
