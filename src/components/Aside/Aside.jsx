import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Aside.module.css'

const Aside = ({page, phase, setPhase, setFromPage}) => {
  const navigate = useNavigate()
  const scrollUp = () => {
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    const timer = setTimeout(()=>{
      navigate(-1)
    },1000)      
  }
  return <div>
      <aside className={!page ? style.aside : style.asidePage}>
      {/* <span onClick={scrollUp} className={!page ? style.back : style.backPage}></span> */}
        <span
          className={phase === 1 ? style.spanactive : style.spanpassive}
          onClick={() => {setPhase(1); setFromPage(false)}}
        ></span>
        <span
          className={phase === 2 ? style.spanactive : style.spanpassive}
          onClick={() => {setPhase(2); setFromPage(false)}}
        ></span>
        <span
          className={phase === 3 ? style.spanactive : style.spanpassive}
          onClick={() => {setPhase(3); setFromPage(false)}}
        ></span>
        <span
          className={phase === 4 ? style.spanactive : style.spanpassive}
          onClick={() => {setPhase(4); setFromPage(false)}}
        ></span>
      </aside>
  </div>;
};

export default Aside;
