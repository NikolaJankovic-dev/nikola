import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Aside.module.css'

const Aside = ({page, phase, setPhase}) => {
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
  return <div className={style.aside}>
      <aside className={!page ? style.aside : style.asidePage}>
      <span onClick={scrollUp} className={!page ? style.back : style.backPage}></span>
      <button  onClick={scrollUp}>Klik</button>
        <span
          className={phase === 1 ? style.spanactive : style.spanpassive}
          onClick={() => setPhase(1)}
        ></span>
        <span
          className={phase === 2 ? style.spanactive : style.spanpassive}
          onClick={() => setPhase(2)}
        ></span>
        <span
          className={phase === 3 ? style.spanactive : style.spanpassive}
          onClick={() => setPhase(3)}
        ></span>
        <span
          className={phase === 4 ? style.spanactive : style.spanpassive}
          onClick={() => setPhase(4)}
        ></span>
      </aside>
  </div>;
};

export default Aside;
