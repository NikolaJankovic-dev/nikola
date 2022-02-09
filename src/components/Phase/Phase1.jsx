import React from "react";
import LightSaber from "./LightSaber/LightSaber";
import style from "./Phase1.module.css";

const Phase1 = ({phase, setPhase, page, setPage}) => {
  return (
    <div>
    <div className={style.phase2}>
      
      <div className={style.phase2cont}>
        <h1>
          
          Portfolio
        </h1>
        <LightSaber />
        
        <p>Frontend Developer</p>
      </div>
      <div className={style.imageDiv}></div> 
    </div>
    </div>
  );
};

export default Phase1;
