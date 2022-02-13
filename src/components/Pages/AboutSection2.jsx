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
            <img src="https://cdn-icons-png.flaticon.com/512/922/922699.png" />
          </div>
          <h1>DESIGN</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque, quidem! Deserunt iste cupiditate quaerat consectetur,
            suscipit dolorum maxime vel in laudantium repudiandae facilis
            esse reiciendis iure. Quae voluptates aspernatur deleniti.
          </p>
        </li>
        <li>
          {" "}
          <div>
            <img src="https://i.imgur.com/0TakKSj.png" />
          </div>
          <h1>TECHNOLOGY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque, quidem! Deserunt iste cupiditate quaerat consectetur,
            suscipit dolorum maxime vel in laudantium repudiandae facilis
            esse reiciendis iure. Quae voluptates aspernatur deleniti.
          </p>
        </li>
        <li>
          {" "}
          <div>
            <img src="https://cdn-icons.flaticon.com/png/512/2280/premium/2280236.png?token=exp=1644704076~hmac=516a1a97c1e700698f527d223cd1ddab" />
          </div>
          <h1>STORY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque, quidem! Deserunt iste cupiditate quaerat consectetur,
            suscipit dolorum maxime vel in laudantium repudiandae facilis
            esse reiciendis iure. Quae voluptates aspernatur deleniti.
          </p>
        </li>
      </ul>
    </div></div></div>
  )
}

export default AboutSection2