import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Phase2 from "../Phase/Phase2";
import style from "./Projects.module.css";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";

const Projects = ({
  phase,
  setPhase,
  page,
  setPage,
  fromPage,
  setFromPage,
}) => {
  

  useLayoutEffect(() => {
    setPage(true);
    setFromPage(true);
    setPhase(2);
    if (phase === 1) {
      setPhase(2);
    }
  }, []);


 

  return (
    <div id="top">
      <Phase2
        phase={phase}
        page={page}
        fromPage={fromPage}
        setFromPage={setFromPage}
      />
      <div className={style.projectsCont}>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4/>
      </div>
    </div>
  );
};

export default Projects;
