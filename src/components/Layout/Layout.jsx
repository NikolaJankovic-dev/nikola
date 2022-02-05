import React, { useState, useEffect, useLayoutEffect } from "react";
import style from "./Layout.module.css";

const Layout = ({ page, phase }) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  useLayoutEffect(() => {
    window.document.addEventListener("mousemove", function (e) {
      setPosX(e.clientX / 50);
      setPosY(e.clientY / 50);
    });
    return window.document.removeEventListener("mousemove", function (e) {
      setPosX(e.clientX / 50);
      setPosY(e.clientY / 50);
    });
  }, []);
  return (
    <div className={style.layout}>
      <div
        // className={!page ? style.lights : style.lightsPage}
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          right: "-10vw",
          top: "-0vh",
          transform: `translateX(${-posX + 200}px) translateY(${-posY}px)`,
          transformStyle: "preserve-3d",
          backgroundImage: "url(https://i.imgur.com/6B0tcn6.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          zIndex: "1",

          // opacity:0.1
        }}
      >
        <div
          className={!page ? style.starscont : style.starscontPage}
          style={{
            transform: `translateX(${posX / 10}%) translateY(${posY / 10}%)`,
          }}
        ></div>
        {/* <div className={!page ? style.deathstarcont : style.deathstarcont}>
          <div
            className={
              (!page && phase === 1) || phase === 0
                ? style.deathstar
                : style.deathstarpassive
            }
            style={{
              transform: `translateX(${-50 + posX / 10}%) translateY(${
                -50 + posY / 10
              }%)`,
            }}
          ></div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Layout;
