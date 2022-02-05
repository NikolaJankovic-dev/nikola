import React, { useEffect } from "react";
import style from "./Navbar.module.css";
import styles from "../../App.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu3";
import Menu from "./Menu";

const Navbar = ({ page, setPhase, setFromPage }) => {
  const navigate = useNavigate();
  const [color, setColor] = useState(style.navbar);
  const [menuUp, setMenuUp] = useState(true);
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
        <div className={style.menu}>
          <div onClick={()=>setMenuUp(!menuUp)} className={!menuUp ? style.menuActive : style.menuPassive}>
            <span style={color === style.navbar?{backgroundColor:"white"}:{backgroundColor:"black"}}></span>
            <span  style={color === style.navbar?{backgroundColor:"white"}:{backgroundColor:"black"}}></span>
            <span  style={color === style.navbar?{backgroundColor:"white"}:{backgroundColor:"black"}}></span>
          </div>
          {/* <UseAnimations
            onClick={() => setMenuUp(!menuUp)}
            strokeColor={color === style.navbar ? "white" : "black"}
            animation={menu}
            size={56}
            options={setMenuUp}
            style={{ padding: 100, color: "#fff" }}
          />{" "} */}
        </div>

        <BsArrowLeft
          className={page ? style.arrow : style.arrowHome}
          onClick={scrollUp}
        />
      </div>
      <Menu menuUp={menuUp} setMenuUp={setMenuUp} setPhase={setPhase} setFromPage={setFromPage}/>
    </div>
  );
};

export default Navbar;
