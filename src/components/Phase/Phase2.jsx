import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import style from "./Phase2.module.css";
import style from "./Phase2.module.css";
import LightSaber from "./LightSaber/LightSaber";


const Phase2 = ({phase, page, setPage}) => {
  
  return (
    <div>
    <div className={!page ? style.phase2 : style.phase5}>
      
      <div className={!page ? style.phase2contactive : style.phase2cont}>
        <h1>
          
          PROJECTS
        </h1>
        <LightSaber />
        <Link to='/projects'>
        <p>Frontend Developer</p></Link>
      </div>
      <div className={page ? style.imageDivPage : style.imageDiv}></div> 
    </div>
    </div>
  );
};

export default Phase2;
