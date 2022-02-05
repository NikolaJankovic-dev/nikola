import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = ({ menuUp, setMenuUp, setPhase, setFromPage }) => {
    const handleHome = () => {
        setMenuUp(true)
        setPhase(1)
        setFromPage(false)
    }
    const handleProjects = () => {
        setMenuUp(true)
    }
    const handleAboutMe = () => {
        setMenuUp(true)
        setPhase(3)
    }
    const handleContact = () => {
        setMenuUp(true)
        setPhase(4)
    }
  return <div className={menuUp ? style.menuUp : style.menu}>
      <div className={style.menuCont}>
      <Link to="/" onClick={handleHome}>HOME</Link>
      <Link to="/projects" onClick={handleProjects}>PROJECTS</Link>
      <Link to="/aboutme" onClick={handleAboutMe}>ABOUT ME</Link>
      <Link to="/" onClick={handleContact}>CONTACT</Link></div>
  </div>;
};

export default Menu;
