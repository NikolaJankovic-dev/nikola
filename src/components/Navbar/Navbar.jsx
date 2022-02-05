import React, { useEffect } from "react";
import style from "./Navbar.module.css";
import styles from "../../App.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import UseAnimations from "react-useanimations";
import menu from 'react-useanimations/lib/menu3'; 


const Navbar = ({ page }) => {
  const navigate = useNavigate();
  const [color, setColor] = useState(style.navbar);
  let distance = window.scrollY + 500;
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const timer = setTimeout(() => {
      navigate(-1);
    }, distance);
  };

  useEffect(() => {
    window.document.addEventListener("scroll", function () {
      if (window.scrollY > window.innerHeight) {
        setColor(style.navbarDown);
      } else {
        setColor(style.navbar);
      }
    });
  }, [window.scrollY]);
  return (
    <div>
      <div className={color}>
        <h1 className={style.titleNav}>Nikola </h1>
        {/* <div className={style.menu}></div> */}
        <div className={style.menu}><UseAnimations strokeColor={color === style.navbar ? "white" : "black"} animation={menu} size={56} style={{padding:100, color:"#fff"}}/> </div>
        
        <BsArrowLeft
          className={page ? style.arrow : style.arrowHome}
          onClick={scrollUp}
        />
      </div>
    </div>
  );
};

export default Navbar;
