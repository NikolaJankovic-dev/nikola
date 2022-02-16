import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import mail from "react-useanimations/lib/mail";

const Menu = ({ menuUp, setMenuUp, setPhase, setFromPage }) => {
  const handleHome = () => {
    setMenuUp(true);
    setPhase(1);
    setFromPage(false);
  };
  const handleProjects = () => {
    setMenuUp(true);
  };
  const handleAboutMe = () => {
    setMenuUp(true);
    setPhase(3);
  };
  const handleContact = () => {
    setMenuUp(true);
    setPhase(4);
  };
  return (
    <div className={menuUp ? style.menuUp : style.menu}>
      <div className={style.menuCont}>
        <Link to="/" onClick={handleHome}>
          HOME
        </Link>
        <Link to="/projects" onClick={handleProjects}>
          PROJECTS
        </Link>
        <Link to="/aboutme" onClick={handleAboutMe}>
          ABOUT ME
        </Link>
        <Link to="/" onClick={handleContact}>
          CONTACT
        </Link>
        <div className={style.icons}>
          <a href="mailto:dzoni6usb@gmail.com" target="_blank">
            <UseAnimations animation={mail} strokeColor="white" size={56} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikola-jankovic-bbb7a9220/"
            target="_blank"
          >
            <UseAnimations
              animation={linkedin}
              strokeColor="white"
              size={56}
              style={{ overflow: "visible" }}
            />
          </a>
          <a href="https://github.com/NikolaJankovic-dev" target="_blank">
            <UseAnimations animation={github} strokeColor="white" size={56} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
