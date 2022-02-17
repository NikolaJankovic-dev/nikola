import React from 'react'
import style from './AboutSection2.module.css'

const AboutSection2 = () => {
  return (
    <div><div className={style.passionWrap}>
    <div className={style.passionHead}>
      <p className={style.headingNum}>2</p>
      <div className={style.passionHeading}>
        <h2>PASSION</h2>
      </div>
    </div>
    <div className={style.passionCont}>
      <ul>
        
        <li>
          <div>
            <img src="https://i.imgur.com/zcamAaD.png" />
          </div>
          <h1>DESIGN</h1>
          <p>
          I think design is like a "magic wand". If a service or product is magic to solve a problem, it is the role of design to act as an intermediary for the user to master it. I strive every day to create a "magic wand" that matches the user.
          </p>
        </li>
        <li>
          {" "}
          <div>
            <img src="https://i.imgur.com/0TakKSj.png" />
          </div>
          <h1>TECHNOLOGY</h1>
          <p>
          Technology has the power to change the lives of the world and individuals. Thor once said: "Your ancestors called it magic but you call it science. I come from a land where they are one and the same". I want to be a person who can always catch up with the latest technology and respond to changes. I think the mission of designers and engineers is to promote innovation.
          </p>
        </li>
        <li>
          {" "}
          <div>
            <img src="https://i.imgur.com/Tlm1ii8.png" />
          </div>
          <h1>STORY</h1>
          <p>
          I assume that by now you figured out that I am a big science fiction fan. I like to see good visual effects, but for me, the story is the most important factor. Stories can get people's attention and make things easier to understand and remember. 
          </p>
        </li>
      </ul>
    </div></div></div>
  )
}

export default AboutSection2