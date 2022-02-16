import React, { useState } from "react";
import style from "./Cards.module.css";
import { Button, TextField } from "@mui/material";
import Modal from "react-modal";
import ModalElement from "./ModalElement";

const Card4 = () => {
  Modal.setAppElement(document.getElementById("root"));
  let subtitle;
  const [buttonStyle, setButtonStyle] = useState(style.letstalkfirst);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    window.document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    window.document.body.style.overflowY = "visible";
  };
  const [cardX, setCardX] = useState(10);
  const [cardY, setCardY] = useState(1);
  const [opacity, setOpacity] = useState(0.3);
  const handleMouseMove = (e) => {
    const card = document.getElementById("tembo");
    setCardX(window.innerWidth / 2 - e.pageX);
    setCardY(
      (card.offsetParent.offsetTop +
        card.offsetTop +
        card.offsetHeight / 2 -
        e.pageY / 2) /
        90
    );
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setCardX(0);
    setCardY(0);
    setOpacity(0);
  };
  return (
    <div
      id="tembo"
      className={style.temboCont}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="https://i.imgur.com/4dVUGm8.png"
        className={style.shadowMask}
        style={{
          willChange: "transform",
          transform: `translate3d(${cardX / 25}px,${cardY}px,0)`,
          transformStyle: "preserve-3d",
          opacity: `${opacity}`,
        }}
      />
      <div className={style.cardHodler}>
        <div className={style.perspectiveHolder}>
          <div
            onClick={openModal}
            className={style.case}
            style={{
              willChange: "transform",
              transform: `rotateY(${-cardX / 90}deg)`,
              transformStyle: "preserve-3d",
              opacity: "1",
            }}
          >
            <div className={style.holder4}>
              <div className={style.column1}>
                <div className={style.logo2}>Job-Book</div>
                <div className={style.aboutProject}>
                  Certification project at BIT. On this web app, you can track,
                  create and delete candidates and interview reports.
                </div>
              </div>
              <div className={style.column2}>
                <div
                  className={style.imageCase}
                  style={{
                    opacity: "1",
                  }}
                >
                  <img
                    src="https://assets.website-files.com/5d27763c46ba9e561dc5b972/5f43b0ed916fd9db04a3eaa4_1231235f3fb3205e35062caf540258_5d3203df882ef3018f9f55f1_Level%204%20444.png"
                    className={style.noimg}
                  />
                  <img
                    src="https://i.imgur.com/F52kFyp.png"
                    className={style.laptop}
                    style={{
                      willChange: "transform",
                      transform: `translate3d(${-cardX / 50}px,${
                        -cardY / 1
                      }px,0)`,
                      transformStyle: "preserve-3d",
                      opacity: "1",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <ModalElement closeModal={closeModal} modalIsOpen={modalIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default Card4;
