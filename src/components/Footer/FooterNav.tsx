import React from "react";
import style from "./index.module.scss";
import Facebook from "@/assets/FacebookIcon.svg";
import Twitter from "@/assets/TwitterIcon.svg";
import Linkedin from "@/assets/LinkedinIcon.svg";
import Instagram from "@/assets/InstagramIcon.svg";
import fontClasses from "@/styles/font-styles-className";

const FooterNav = () => {
  const navLinks = ["HOME", "COMPANY", "BLOG", "CONTACT US", "SITEMAP"];

  const socialMediaIcons = [
    { id: 1, icon: <Facebook />, href: "" },
    { id: 2, icon: <Twitter />, href: "" },
    { id: 3, icon: <Linkedin />, href: "" },
    { id: 4, icon: <Instagram />, href: "" },
  ];

  return (
    <section
      className={style.footer_section_nav + " primary-colored-background"}
    >
      <div className={style.footernav_div_wrapper}>
        <h2 className="font_menu">TAODIFY</h2>
        <div className={style.footernav_div_midsection}>
          <div className={style.left}>
            <ul>
              {navLinks.map((link) => {
                return (
                  <li key={link}>
                    <a className="font_menu" href="">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={style.right}>
            <ul>
              {socialMediaIcons.map((obj) => {
                return (
                  <li key={obj.id}>
                    <a href={obj.href}>{obj.icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <p className={fontClasses.small_regular}>@ taodify.com, 2023</p>
      </div>
    </section>
  );
};

export default FooterNav;
