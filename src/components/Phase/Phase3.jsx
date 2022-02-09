import React from "react";
import { Link } from "react-router-dom";
import style from "./Phase3.module.css";
import LightSaber from "./LightSaber/LightSaber";


const Phase3 = ({ phase, setPhase, page, setPage }) => {
  return (
    <div>
    <div className={style.phase2}>
      
      <div className={style.phase2cont}>
        <h1>
          
          About me
        </h1>
        <LightSaber />
        <Link to='/aboutme' className={page ? style.linkPage : style.link}>
        <button className={style.showMore}>SHOW ME MORE</button></Link>
      </div>
      <div className={page ? style.imageDivPage : style.imageDiv}></div> 
    </div>
    </div>
  );
};

export default Phase3;
