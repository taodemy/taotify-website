import React from "react";
import style from "./index.module.scss";

import PhoneIcon from "@/assets/PhoneIcon.svg";
import EmailIcon from "@/assets/EmailIcon.svg";
import PositionIcon from "@/assets/Location.svg";
import Decoration1 from "@/assets/FooterDecoration1.svg";

const LeftContactUs = () => {
  const contactList = [
    {
      icon: <PhoneIcon />,
      content: "+92 333 6527366",
    },
    {
      icon: <EmailIcon />,
      content: "abuzer@greelogix.com",
    },
    {
      icon: <PositionIcon />,
      content: "Plot 252, Block L Phase 2 Johar Town, Lahore, PK",
    },
  ];

  return (
    <section className={style.contactus_section_left + " primary-colored-background"}>
      <div className={style.contactus_left_content}>
        <h2 className="font_h2_headline">Contact us</h2>
        <p className="font_subtitle_regular light-colored-text-with-opacity">
          Have an inquiry? We’ll be happy to assist you
        </p>
        <ul className={style.contactus_left_detail}>
          {contactList.map((obj, index) => {
            return (
              <li key={index}>
                {obj.icon}
                <h5 className="font_h5_headline light-colored-text">{obj.content}</h5>
              </li>
            );
          })}
        </ul>
      </div>
      <Decoration1 className={style.decor1} />
    </section>
  );
};

export default LeftContactUs;
