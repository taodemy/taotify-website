import React from 'react'
import style from "./index.module.scss";
import fontClasses from "@/styles/font-styles-className";

function index() {
  return (
    <section className={style.get_started}>
      <div className={style.get_started_content}>
        <div>
          <h1 className={fontClasses.font_get_started_content_title}>
            Your Ultimate Destination for Seamless
          </h1>
          <span className={fontClasses.font_get_started_content_title_blue}>
            Music&nbsp;
          </span>
          <span className={fontClasses.font_get_started_content_title}>
            Streaming
          </span>
        </div>

        <p className={fontClasses.font_get_started_content_p}>
          TAOTIFY, Immerse Yourself in a World of Music with Our Intuitive and Stylish Streaming Platform. Discover, Play, and Share Your Favorite Tunes Effortlessly.
        </p>
        <div className={style.get_started_button_group}>
          <button className={style.get_started_button}>
            <span className={fontClasses.font_get_started_button_watch_video_text}>Get Started</span>
          </button>
          <button className={style.get_started_button_watch_video}>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <g clip-path="url(#clip0_1582_1366)">
                <path d="M27.9998 51.3334C15.1128 51.3334 4.6665 40.887 4.6665 28C4.6665 15.113 15.1128 4.66669 27.9998 4.66669C40.8868 4.66669 51.3332 15.113 51.3332 28C51.3332 40.887 40.8868 51.3334 27.9998 51.3334ZM27.9998 46.6667C32.9505 46.6667 37.6985 44.7 41.1992 41.1993C44.6998 37.6987 46.6665 32.9507 46.6665 28C46.6665 23.0493 44.6998 18.3014 41.1992 14.8007C37.6985 11.3 32.9505 9.33335 27.9998 9.33335C23.0491 9.33335 18.3012 11.3 14.8005 14.8007C11.2998 18.3014 9.33317 23.0493 9.33317 28C9.33317 32.9507 11.2998 37.6987 14.8005 41.1993C18.3012 44.7 23.0491 46.6667 27.9998 46.6667ZM24.7845 19.635L36.1688 27.223C36.2969 27.3082 36.4018 27.4237 36.4745 27.5593C36.5471 27.6948 36.5851 27.8462 36.5851 28C36.5851 28.1538 36.5471 28.3052 36.4745 28.4408C36.4018 28.5763 36.2969 28.6918 36.1688 28.777L24.7822 36.365C24.6418 36.4581 24.4788 36.5114 24.3105 36.5194C24.1423 36.5273 23.975 36.4896 23.8265 36.4102C23.6779 36.3307 23.5536 36.2126 23.4668 36.0683C23.3799 35.9239 23.3338 35.7588 23.3332 35.5904V20.4097C23.3335 20.2409 23.3796 20.0753 23.4665 19.9306C23.5535 19.7859 23.6781 19.6675 23.827 19.588C23.9759 19.5085 24.1436 19.4709 24.3123 19.4792C24.4809 19.4875 24.6441 19.5413 24.7845 19.635Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1582_1366">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className={fontClasses.font_get_started_button_watch_video_text}>Watch Video</span>
          </button>
        </div>
      </div>
      <div className={style.get_started_background_title + " " + fontClasses.font_get_started_h2}>
        TAOTIFY MUSIC & LIFE
      </div>
    </section>
  )
}

export default index