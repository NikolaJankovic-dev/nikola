import React, { useLayoutEffect, useState } from "react";
import style from './Cards.module.css'

const Card1 = () => {
    const [cardX, setCardX] = useState(10);
  const [cardY, setCardY] = useState(1);
  const [opacity, setOpacity] = useState(0.3);
  const handleMouseMove = (e) => {
    const card = document.getElementById("tembo");
    setCardX(window.innerWidth / 2 - e.pageX);
    setCardY(
      (card.offsetParent.offsetTop +
        card.offsetTop +
        card.offsetHeight / 2 -
        e.pageY) /
        90
    );
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setCardX(0);
    setCardY(0);
    setOpacity(0);
  };
  return (
    <div
    id="tembo"
    className={style.resetCont}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  >
    <img
      src="https://i.imgur.com/4dVUGm8.png"
      className={style.shadowMask}
      style={{
        willChange: "transform",
        transform: `translate3d(${cardX / 25}px,${cardY}px,0)`,
        transformStyle: "preserve-3d",
        opacity: `${opacity}`,
      }}
    />
    <div className={style.cardHodler}>
      <div className={style.perspectiveHolder}>
        <a
          href="https://reset-10ae0.web.app/"
          target="_blank"
          className={style.case}
          style={{
            willChange: "transform",
            transform: `rotateY(${
              -cardX / 90
            }deg)`,
            transformStyle: "preserve-3d",
            opacity: "1",
          }}
        >
          <div className={style.holder1}>
            <div className={style.column1}>
              <div><img  className={style.logo1} src="https://i.imgur.com/2QhJiKO.png"/> </div>
              <div className={style.aboutProject}>
              Reset is a voting platform. Users choose the biggest hit of 2021 in several categories. Reset was very popular on social media on December 2021 and January 2022.
              </div>
            </div>
            <div className={style.column2}>
              <div
                className={style.imageCase}
                style={{
                  opacity: "1",
                }}
              >
                <img
                  src="https://assets.website-files.com/5d27763c46ba9e561dc5b972/5f43b0ed916fd9db04a3eaa4_1231235f3fb3205e35062caf540258_5d3203df882ef3018f9f55f1_Level%204%20444.png"
                  className={style.noimg}
                />
                <img
                  src="https://i.imgur.com/MGrBQ3U.png"
                  className={style.phone}
                  style={{
                    willChange: "transform",
                    transform: `translate3d(${-cardX / 50}px,${
                      -cardY / 1
                    }px,0)`,
                    transformStyle: "preserve-3d",
                    opacity: "1",
                  }}
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  );
};

export default Card1;
