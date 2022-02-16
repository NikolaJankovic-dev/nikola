import React from "react";
import Modal from "react-modal";
import style from "./ModalElement.module.css";
import { Button } from "@mui/material";

const ModalElement = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
        className={style.modal}
        overlayClassName={style.overlay}
        preventScroll={true}
      >
        <button onClick={props.closeModal} className={style.closebtn}>
          X
        </button>
        <div className={style.modalText}>
          To get access you will need to download and start the database (npm
          start). Login parameters: <br />
          username - dev@dev.com <br /> password - developer.
        </div>

        
        <div className={style.buttons}>
          <a
            href="https://www.dropbox.com/s/ikerwc6edzu5aa3/interviews-reports-api-mock.zip?dl=0"
            target="_blank"
            
          >
            <Button variant="contained" className={style.downloadbtn}>Download</Button>
          </a>{" "}
          <a
            href="https://job-book.vercel.app/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained">Visit</Button>
          </a>
          <Button variant="contained" className={style.cancel} onClick={props.closeModal}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalElement;
