import React from "react";
import LightSaber from "./LightSaber/LightSaber";
import style from "./Phase1.module.css";

const Phase1 = ({phase, setPhase, page, setPage}) => {
  return (
    <div>
    <div className={!page ? style.phase2 : style.phase5}>
      
      <div className={!page ? style.phase2contactive : style.phase2cont}>
        <h1>
          
          PROJECTS
        </h1>
        <LightSaber />
        
        <p>Frontend Developer</p>
      </div>
      <div className={page ? style.imageDivPage : style.imageDiv}></div> 
    </div>
    </div>
  );
};

export default Phase1;
