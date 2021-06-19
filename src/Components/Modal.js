import React, { children, useState } from "react";
import "../App.scss";
import CancelBtn from "./CancelBtn";

const Modal = ({ showModal, setShowModal, data, children }) => {
  let modalHandller = () => {
    setShowModal("overly");
  };

  return (
    <div className={showModal} onClick={modalHandller}>
      <div className="modal-container">
        <div className="modal-header">
          <p> {data ? data.date : null} </p>
          <CancelBtn setShowModal={setShowModal} />
        </div>
        <div className="modal-main"> {children} </div>
      </div>
    </div>
  );
};

export default Modal;
