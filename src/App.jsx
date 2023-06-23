import React, { useState } from "react";
import Modal from "./modal/modal";
const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="parent-modal" onClick={()=>{setIsShowModal(isShowModal? false : true)}}>
      <button onClick={()=>{setIsShowModal(true)}} className="btn-create"> Create Modal </button>
      {isShowModal && <Modal btnClick={()=>{setIsShowModal(false)}}/>}
    </div>
  );
};

export default App;
