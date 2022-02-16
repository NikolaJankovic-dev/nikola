import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Phase3 from "../Phase/Phase3";
import style from "./AboutMe.module.css";
import AboutSection3 from "./AboutMeSections/AboutSection3";
import AboutSection1 from "./AboutMeSections/AboutSection1";
import AboutSection2 from "./AboutMeSections/AboutSection2";
const AboutMe = ({ phase, setPhase, page, setPage, fromPage, setFromPage }) => {
  useLayoutEffect(() => {
    setPage(true);
    setFromPage(true);
    setPhase(3);
    if (phase === 1) {
      setPhase(3);
    }
  }, []);
  return (
    <div>
      <Phase3
        phase={phase}
        page={page}
        fromPage={fromPage}
        setFromPage={setFromPage}
      />
      <div className={style.aboutWrap}>
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        <div className={style.footer}>
          <a href="mailto:dzoni6usb@gmail.com">dzoni6usb@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
