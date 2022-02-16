import React from "react";
import style from "./AboutSection1.module.css";

const AboutSection1 = () => {
  return (
    <div>
      <div className={style.aboutCont}>
        <p className={style.headingNum}>01</p>
        <div className={style.aboutTextWrap}>
          <h2 className={style.heading}>WHO I AM</h2>
          <div className={style.aboutText}>
            <div className={style.aboutName}>
              <h3>NIKOLA</h3>
              <p>JANKOVIC</p>
            </div>
            <div className={style.aboutme}>
              Born in Belgrade in 1993. My career started in 2013. when I got a
              job as a salesman in the largest IT company in Serbia. During the
              pandemic, I started learning about programming and soon fell in
              love with it. I wanted to learn more, so I decided to take a part
              in a coding bootcamp course. I finished it with an advanced
              diploma.
            </div>
            <div className={style.aboutPhoto} style={{ width: "100%" }}>
              <img src="https://i.imgur.com/GT1rUg9.jpg" alt="KUON YAGI" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
