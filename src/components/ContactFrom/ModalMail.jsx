import React from "react";
import Modal from "react-modal";
import style from './ModalMail.module.css'

const ModalMail = ({modalIsOpen, closeModal, message}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
         className={style.modal}
         overlayClassName={style.overlay}
        preventScroll={true}
      > 
        <button onClick={closeModal} className={style.closebtn}>
          X
        </button>
          <div className={style.message}>{message}</div>
      </Modal>
    </div>
  );
};

export default ModalMail;
