import React from "react";
import "./modal.css";
const Modal = ({btnClick,parentClick}) => {
  return (
    <>
    <div className="modal-wrapper" onClick={parentClick}></div>
      <div className="modal-box">
        <h1>Hi this is modal title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque
          deleniti labore porro architecto assumenda eligendi, modi mollitia
          fuga illum magni at dolore iusto id velit sit excepturi blanditiis
          cupiditate?
        </p>
        <button onClick={btnClick}>Submit</button>
      </div>
    </>
  );
};

export default Modal;
