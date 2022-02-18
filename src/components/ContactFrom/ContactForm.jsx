import { Button, TextField } from "@mui/material";
import React, { useState, useRef } from "react";
import Modal from "react-modal";
import style from "./ContactForm.module.css";
import ModalMail from "./ModalMail";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  Modal.setAppElement(document.getElementById("root"));
  const [modalIsOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r30wdqf",
        "template_49s5kmp",
        form.current,
        "user_nOYVsuehfChhCO58SJ0gB"
      )
      .then(
        (result) => {
          setStatus("Message sent!");
        },
        (error) => {
          setStatus(error.text);
        },
        openModal()
      );
  };
  const openModal = () => {
    setIsOpen(true);
    window.document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    window.document.body.style.overflowY = "visible";
  };

  const label = style.label;
  return (
    <div>
      <form className={style.form} ref={form} onSubmit={sendEmail}>
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
              name="from_name"
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
              name="from_email"
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
              name="message"
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
