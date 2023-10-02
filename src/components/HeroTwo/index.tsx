import React from "react";
import style from "./index.module.scss";
import Bg2SVG from "@/assets/Hero2BgImg.svg";
import Effect from "@/assets/EffectOnHero2.svg";
import Apple from "@/assets/Apple.svg";
import Android from "@/assets/Android.svg";
import fontClasses from "@/styles/font-styles-className";
import { Open_Sans, Roboto } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto( {
  subsets: ["latin"],
  weight: "900"
} );

export default function HeroTwo() {
  return (
    <section className={style.hero_outter_wrapper}>
      <div className={style.hero_inner_wrapper}>
        <div style={openSans.style} className={style.hero_background_text + " light-colored-text"}>
          <p className={style.text_first_line}>UI MUSIC</p>
          <p className={style.text_second_line}>NEWWAY</p>
        </div>

        <div className={style.hero_front_section}>
          <div className={style.front_inner_section}>
            <Bg2SVG className={style.front_inner_image}/>
            <div className={fontClasses.h1_headline_bold + "light-colored-text " + style.front_inner_slogan}>
              <p>
                Taotify.
              </p>
              <p>
                The Heat Is On
              </p>
            </div>
            <Effect className={style.front_inner_effect}/>
            <div className={style.front_inner_cta}>
              <Apple/>
              <Android/>
              <button className={`light-colored-background primary-colored-text ${fontClasses.h5_headline}`}>
                PLAY MUSIC
              </button>
            </div>
            <div style={openSans.style} className={style.front_inner_mini}>
              <p>Enjoy Life</p>
              <p>Enjoy Mysic</p>
            </div>
            <div style={roboto.style} className={style.inner_main_text + " primary-colored-text"}>
              <p>5000Followers +</p>
              <p>On May</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
