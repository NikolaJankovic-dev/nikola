import React, { useLayoutEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import archive from "react-useanimations/lib/archive";
import style from "./Icons.module.css";

const Icons = ({ color, menuUp }) => {
  const [iconColor, setIconColor] = useState("white");
  const [menuColor, setMenuColor] = useState("white")
  useLayoutEffect(() => {
    
    //   setIconColor("black");
      if (!color) {
        setIconColor("black");
      }
      if (color) {
        setIconColor("white");
      }
    
    
  }, [color]);
  return (
    <div>
      {" "}
      <div className={style.icons}>
        <a href="mailto:dzoni6usb@gmail.com" target="_blank">
          <UseAnimations
            animation={archive}
            strokeColor={menuUp ? iconColor : menuColor}
            size={48}
            // marginHeight={10}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nikola-jankovic-bbb7a9220/"
          target="_blank"
        >
          <UseAnimations
            animation={linkedin}
            strokeColor={menuUp ? iconColor : menuColor}
            size={56}
            style={{overflow:"visible"}}
          />
        </a>
        <a href="https://github.com/NikolaJankovic-dev" target="_blank">
          <UseAnimations animation={github} strokeColor={menuUp ? iconColor : menuColor} size={56} />
        </a>
      </div>
    </div>
  );
};

export default Icons;
