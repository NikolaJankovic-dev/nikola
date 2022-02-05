import React from "react";
import { Link } from "react-router-dom";
import style from "./Phase3.module.css";
import LightSaber from "./LightSaber/LightSaber";


const Phase3 = ({ phase, setPhase, page, setPage }) => {
  return (
    <div>
    <div className={!page ? style.phase2 : style.phase5}>
      
      <div className={!page ? style.phase2contactive : style.phase2cont}>
        <h1>
          
          About me
        </h1>
        <LightSaber />
        <Link to='/aboutme'>
        <p>Frontend Developer</p></Link>
      </div>
      <div className={page ? style.imageDivPage : style.imageDiv}></div> 
    </div>
    </div>
  );
};

export default Phase3;
