import React, { useEffect, useRef, useState } from "react";
import style from "./AboutSection3.module.css";

const AboutSection3 = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootMargin: "500px",
    threshold: 1.0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  return (
    <div>
      <div className={style.skillsWrap}>
        <div className={style.passionHead}>
          <p className={style.headingNum}>3</p>
          <div className={style.passionHeading}>
            <h2>SKILL SET</h2>
          </div>
        </div>
        <div className={style.skillCont} >
          {/* {console.log(inViewport)} */}
          <ul className={style.skillList}   ref={containerRef}>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://i.imgur.com/eTZqX0b.png" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle}>HTML</h4>
                    <p className={style.skillTime}>1YEAR</p>
                  </div>
                  <p className={style.skillProcent}>90%</p>
                </div>

                <div className={isVisible ? style.skillBar90 : style.skillBar}></div>
              </div>
            </li>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://i.imgur.com/YsgpKyx.png" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle}>CSS</h4>
                    <p className={style.skillTime}>1YEAR</p>
                  </div>
                  <p className={style.skillProcent}>90%</p>
                </div>

                <div className={isVisible ? style.skillBar90 : style.skillBar}></div>
              </div>
            </li>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://i.imgur.com/nSUe8pq.png" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle}>Sass</h4>
                    <p className={style.skillTime}>1YEAR</p>
                  </div>
                  <p className={style.skillProcent}>80%</p>
                </div>

                <div className={isVisible ? style.skillBar80 : style.skillBar}></div>
              </div>
            </li>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://itelofilho.gallerycdn.vsassets.io/extensions/itelofilho/chakra-ui-cheatsheet/0.1.2/1602346378840/Microsoft.VisualStudio.Services.Icons.Default" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle}>Chakra UI</h4>
                    <p className={style.skillTime}>1YEAR</p>
                  </div>
                  <p className={style.skillProcent}>70%</p>
                </div>

                <div className={isVisible ? style.skillBar70 : style.skillBar}></div>
              </div>
            </li>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://vscodeshift.gallerycdn.vsassets.io/extensions/vscodeshift/material-ui-snippets/3.3.8/1632893578939/Microsoft.VisualStudio.Services.Icons.Default" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle} >Material UI</h4>
                    <p className={style.skillTime}>1YEAR</p>
                  </div>
                  <p className={style.skillProcent}>70%</p>
                </div>

                <div className={isVisible ? style.skillBar70 : style.skillBar}></div>
              </div>
            </li>
          </ul>
          <ul className={style.skillList}>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://i.imgur.com/2jR5Mwb.png" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle}>Javascript</h4>
                    <p className={style.skillTime}>1YEAR</p>
                  </div>
                  <p className={style.skillProcent}>90%</p>
                </div>

                <div className={isVisible ? style.skillBar90 : style.skillBar}></div>
              </div>
            </li>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://i.imgur.com/0dE2uHj.png" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle}>React</h4>
                    <p className={style.skillTime}>1YEAR</p>
                  </div>
                  <p className={style.skillProcent}>80%</p>
                </div>

                <div className={isVisible ? style.skillBar80 : style.skillBar}></div>
              </div>
            </li>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://i.imgur.com/1f2FD7y.png" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle}>Node JS</h4>
                    <p className={style.skillTime}>1YEAR</p>
                  </div>
                  <p className={style.skillProcent}>70%</p>
                </div>

                <div className={isVisible ? style.skillBar70 : style.skillBar}></div>
              </div>
            </li>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://i.imgur.com/q90a3l5.png" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle}>Typescript</h4>
                    <p className={style.skillTime}>5MONTHS</p>
                  </div>
                  <p className={style.skillProcent}>60%</p>
                </div>

                <div className={isVisible ? style.skillBar60 : style.skillBar}></div>
              </div>
            </li>
            <li className={style.skillItem}>
              <div className={style.skillIcon}>
                <img src="https://i.imgur.com/5Q7Hjl1.png" />
              </div>
              <div className={style.skillDetail}>
                <div className={style.skillMeta}>
                  <div className={style.skillName}>
                    <h4 className={style.skillTitle}>React Native</h4>
                    <p className={style.skillTime}>3MONTHS</p>
                  </div>
                  <p className={style.skillProcent}>50%</p>
                </div>

                <div className={isVisible ? style.skillBar50 : style.skillBar}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
