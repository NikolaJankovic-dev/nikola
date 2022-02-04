import React, { useEffect, useState } from 'react';
import style from './LightSaber.module.css'

const LightSaber = () => {
    const [lightColor, setLightColor] = useState(style.lightblue)
    const [numclick, setNumclick] =useState(0)
    const counter = () => {
        setNumclick(numclick+1)
        if (numclick === 3){
            setNumclick(0)
        }
        console.log(numclick + " " + lightColor)
    }
    useEffect(()=>{
        if (numclick === 0){
            setLightColor(style.lightblue)
        }
        if (numclick === 1){
            setLightColor(style.lightred)
        }
        if (numclick === 2){
            setLightColor(style.lightgreen)

        }
        if (numclick === 3){
            setLightColor(style.lightyellow)

        }
    }, [numclick])
  return <div className={style.lightsaber}>
  <span className={lightColor}></span>
  <span className={style.generator}>
      <span className={style.guard}>
          {/* {console.log(numclick)} */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span style={{cursor: "pointer"}} onClick={counter}></span>
      </span>
      <span className={style.handlestart}>
          <span></span>
          <span></span>
      </span>
      <span className={style.handle}>
          <span></span>
          <span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
          <span className={style.long}></span>
          <span className={style.long}></span>
          <span className={style.box}></span>
      </span>
      <span className={style.wings}>
          <span className={style.wing1}></span>
          <span className={style.wing2}></span>
          <span className={style.wing3}></span>
      </span>

      {/* <span className={style.light}></span> */}
  </span>
</div>
};

export default LightSaber;
