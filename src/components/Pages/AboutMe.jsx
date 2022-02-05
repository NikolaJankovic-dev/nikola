import React, {useEffect} from 'react';
import Phase3 from '../Phase/Phase3';
import style from './AboutMe.module.css'
const AboutMe = ({phase, setPhase, page, setPage, fromPage, setFromPage}) => {
    useEffect(() => {
        setPage(true);
        setFromPage(true);
        setPhase(3);
        if (phase === 1){
        setPhase(3);
        }
      },[]);
  return <div>
      <Phase3 phase={phase} page={page}  fromPage={fromPage} setFromPage={setFromPage}/>
      <div className={style.aboutCont}>
          <h1>About Me</h1>
      </div>
  </div>;
};

export default AboutMe;
