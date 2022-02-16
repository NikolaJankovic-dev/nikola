import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import style from "./ContactForm.module.css";
import ModalMail from "./ModalMail";

const ContactForm = () => {
  Modal.setAppElement(document.getElementById("root"));
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    window.document.body.style.overflow = "hidden";
    window.document.body.querySelectorAll("#btn")[0].style.display = "none";
  };

  const closeModal = () => {
    setIsOpen(false);
    window.document.body.style.overflowY = "visible";
    window.document.body.querySelectorAll("#btn")[0].style.display = "block";
  };

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    let result = await response.json();
    setStatus(result.status);
    openModal();
  };
  const label = style.label;
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formCont}>
          <h4>LET'S TALK!</h4>
          <p>
            I will get back to you within one to two days through email. Also
            please don't forget to check your spam account just in case!
          </p>
          <div>
            {" "}
            <TextField
              label="Name"
              name="name"
              required
              id="name"
              variant="standard"
              className={style.inputs}
              sx={{
                width: "100%",
                input: { color: "#F0F8FF" },
                label: { color: "#F0F8FF" },
                ":hover": { label: { color: "white" } },
                ":focus-within": { label: { color: "white" } },
              }}
            />
          </div>
          <div>
            <TextField
              label="E-mail"
              name="email"
              required
              id="name"
              variant="standard"
              className={style.inputs}
              sx={{
                width: "100%",
                input: { color: "#F0F8FF" },
                label: { color: "#F0F8FF" },
                ":hover": { label: { color: "white" } },
                ":focus-within": { label: { color: "white" } },
              }}
            />
          </div>
          <div>
            <TextField
              multiline
              label="Message"
              id="message"
              required
              variant="standard"
              minRows={2}
              maxRows={4}
              className={style.inputs}
              sx={{
                width: "100%",
                input: { color: "#F0F8FF" },
                label: { color: "#F0F8FF" },
                ":hover": { label: { color: "white" } },
                ":focus-within": { label: { color: "white" } },
              }}
            />
            <div>
              <Button type="submit" variant="contained" className={style.send}>
                SEND REQUEST
              </Button>
            </div>
            <ModalMail
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
              message={status}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
