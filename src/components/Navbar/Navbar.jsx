import React from 'react';
import style from './Navbar.module.css'
import styles from "../../App.module.css";
import { Link, NavLink } from 'react-router-dom';


const Navbar = ({page}) => {
  return <div className={style.navbar}>
      {/* <NavLink to="/"><span className={!page ? styles.back : styles.backPage}></span></NavLink>  */}

      <h1>
          Nikola
      </h1>
      <span>X</span>
      
  </div>;
};

export default Navbar;
