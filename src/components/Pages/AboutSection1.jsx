import React from "react";
import style from './AboutSection1.module.css'

const AboutSection1 = () => {
  return (
    <div>
      <div className={style.aboutCont}>
        <p className={style.headingNum}>01</p>
        <div className={style.aboutTextWrap}>
          <h2 className={style.heading}>WHO I AM</h2>
          <div className={style.aboutText}>
            <div className={style.aboutName}>
              <h3>NIKOLA</h3>
              <p>JANKOVIC</p>
            </div>
            <div className={style.aboutme}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              totam aliquam et, porro eligendi quos autem doloribus repellendus
              delectus, voluptatibus asperiores facilis illo itaque architecto
              ipsa. Debitis ipsam nesciunt quo?
            </div>
            <div className={style.aboutPhoto} style={{ width: "100%" }}>
              <img
                src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.18169-9/10422089_750165585071959_3676698997905328907_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=4HFYTBlYldIAX9ZKsOQ&_nc_ht=scontent.fbeg2-1.fna&oh=00_AT_BgmSKSuNxB9UiLCCizUa_oyTb-rqhb1SgqDNvfZQYlw&oe=622D3E8F"
                alt="KUON YAGI"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
