import React from 'react'
import style from "./index.module.scss";
import fontClasses from "@/styles/font-styles-className";

function index() {
  return (
    <section className={style.get_started}>
      <div className={style.get_started_content}>
        <h1 className={fontClasses.font_get_started_content_title}>
          Your Ultimate Destination for Seamless
        </h1>
        Music
        <h1 className={fontClasses.font_get_started_content_title}>
          Streaming
        </h1>
        <p className={style.get_started_content_p}>TAOTIFY, Immerse Yourself in a World of Music with Our Intuitive and Stylish Streaming Platform. Discover, Play, and Share Your Favorite Tunes Effortlessly.</p>
        <div className={style.get_started_button_group}>
          <button className={style.get_started_button}>Get Started</button>
          <button className={style.get_started_button_watch_video}>Watch Video</button>
        </div>
      </div>
      <div className={style.get_started_background_title + " " + fontClasses.font_get_started_h2}>
        TAOTIFY MUSIC & LIFE
      </div>
    </section>
  )
}

export default index