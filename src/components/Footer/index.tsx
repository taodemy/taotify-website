import React from "react";
import style from "./index.module.scss";
import FooterNav from "./FooterNav";
import Decoration2 from "@/assets/FooterDecoration2.svg";
import LeftContactUs from "./LeftContactUs";
import RightContactUs from "./RightContactUs";

const Footer = () => {
  return (
    <footer className={style.footer_wrapper}>
      <section className={style.footer_section_contactus + " light-colored-background"}>
        <LeftContactUs />
        <RightContactUs />
        <Decoration2 className={style.decor2} />
      </section>
      <FooterNav />
    </footer>
  );
};

export default Footer;
