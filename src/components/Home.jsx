import React, { useState, useEffect } from "react";
import Aside from "./Aside/Aside";
import Navbar from "./Navbar/Navbar";
import Phase1 from "./Phase/Phase1";
import Phase2 from "./Phase/Phase2";
import style from "./Home.module.css";
import Phase3 from "./Phase/Phase3";
import Phase4 from "./Phase/Phase4";

const Home = ({phase, setPhase, page, setPage, fromPage, setFromPage}) => {
  const [styling, setStylin] = useState(style.one);
//   const [posX, setPosX] = useState(0);
//   const [posY, setPosY] = useState(0);


//   useEffect(() => {
//     window.document.addEventListener("mousemove", function (e) {
//       setPosX(e.clientX / 50);
//       setPosY(e.clientY / 50);
//     });
//   }, []);
useEffect(() => {
  setPage(false)
},[]);
  useEffect(
    (e) => {
      if (phase === 1) {
        setStylin(style.one);
      }
      if (phase === 2) {
        setStylin(fromPage ? style.twoFromPage : style.two);
      }
      if (phase === 3) {
        setStylin(style.three);
      }
      if (phase === 4) {
        setStylin(style.four);
      }
    },
    [phase]
  );
  return (
    <div className={style.home}>
      <div className={phase === 0 ? style.animediv : style.animedivmove}></div>
      <div className={styling}>     
        <Phase1 phase={phase}/>
        <Phase2 phase={phase} setPhase={setPhase} setPage={setPage} page={page} fromPage={fromPage} setFromPage={setFromPage}/>
        <Phase3 phase={phase} />
        <Phase4 phase={phase} />
      </div>
    </div>
  );
};

export default Home;
