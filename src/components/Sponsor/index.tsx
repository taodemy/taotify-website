import React from "react";
import style from "./index.module.scss";
import fontClasses from "@/styles/font-styles-className";
import GoogleIcon from "@/assets/GoogleSponsorIcon.svg";
import MicrosoftIcon from "@/assets/MicrosoftSponsorIcon.svg";
import AirbnbIcon from "@/assets/AirbnbSponsorIcon.svg";
import AxureIcon from "@/assets/AxureSponsorIcon.svg";
import AppleIcon from "@/assets/AppleSponsorIcon.svg";
import FacebookIcon from "@/assets/FacebookSponsorIcon.svg";
import NokiaIcon from "@/assets/NokiaSponsorIcon.svg";
import OracleIcon from "@/assets/OracleSponsorIcon.svg";

const sponser = () => {
  return (
    <section className={style.sponsor_background}>
      <div className={style.sponsor_div}>
        <h2 className={fontClasses.h2_headline + "light-colored-text"}>Our Sponsors</h2>
        <div className={style.sponsor_image_div}>
          <div className={style.sponsor_images}>
            <div>
              <GoogleIcon />
            </div>
            <div>
              <MicrosoftIcon />
            </div>
            <div>
              <AirbnbIcon />
            </div>
            <div>
              <AxureIcon />
            </div>
          </div>
          <div className={style.sponsor_images}>
            <div>
              <AppleIcon />
            </div>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <NokiaIcon />
            </div>
            <div>
              <OracleIcon />
            </div>
          </div>
        </div>
        <button className={fontClasses.h5_headline + style.sponsor_button}>Become a Sponsor</button>
      </div>
    </section>
  );
};

export default sponser;
