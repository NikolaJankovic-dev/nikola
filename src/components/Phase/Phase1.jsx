import React from "react";
import LightSaber from "./LightSaber/LightSaber";
import style from "./Phase1.module.css";

const Phase1 = ({phase}) => {
  return (
    <div className={style.phase1}>
      <div className={phase === 1 ? style.phase1contactive : style.phase1cont}>
        <h1>
          Nikola <br /> Jankovic
        </h1>
        <LightSaber />

        <p>Frontend Developer</p>
      </div>
    </div>
  );
};

export default Phase1;
