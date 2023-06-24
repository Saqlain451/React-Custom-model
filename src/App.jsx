import React, { useState } from "react";
import Modal from "./modal/Modal";

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsShowModal(true);
        }}
        className="btn-create"
      >
       
        Create Modal
      </button>
      {isShowModal && (
        <Modal
          btnClick={() => {
            setIsShowModal(false);
          }}
          parentClick={() => {
            setIsShowModal(false);
          }}
        />
      )}
    </>
  );
};

export default App;
