import React from 'react';
import style from './Phase4.module.css'
import LightSaber from "./LightSaber/LightSaber";
import ContactForm from '../ContactFrom/ContactForm';


const Phase4 = ({phase, setPhase, page, setPage}) => {
  return (
    <div>
    <div className={!page ? style.phase2 : style.phase5}>
      
      <div className={!page ? style.phase2contactive : style.phase2cont}>
        <h1>
          
          CONTACT ME
        </h1>
       
        <ContactForm/>
        
      </div>
      <div className={page ? style.imageDivPage : style.imageDiv}></div> 
    </div>
    </div>
  );
};

export default Phase4;
