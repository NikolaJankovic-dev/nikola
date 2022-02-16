import React from "react";
import { Link } from "react-router-dom";
import style from "./Phase2.module.css";
import LightSaber from "./LightSaber/LightSaber";

const Phase2 = ({ phase, setPhase, page, setPage }) => {
  return (
    <div>
      <div className={style.phase2}>
        <div className={style.phase2cont}>
          <h1>Projects</h1>
          <LightSaber />
          <Link to="/projects" className={page ? style.linkPage : style.link}>
            <button className={style.showMore}>Show me more</button>
          </Link>
        </div>
        <div className={page ? style.imageDivPage : style.imageDiv}></div>
      </div>
    </div>
  );
};

export default Phase2;
