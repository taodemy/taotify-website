import React from "react";
import TriangleIcon from "@/assets/TriangleIcon.svg"
import style from "./index.module.scss";

const Navigator = () => {
  const navLinks = [
    {
      name: "HOME",
    },
    {
      name: "SPEAKERS",
      child: [],
    },
    {
      name: "SCHEDUAL",
      child: [],
    },
    {
      name: "CONTACT US",
    },
    {
      name: "SUBSCRIBE"
    }
  ];

  return (
    <section className={style.header_outer_wrapper + " dark-colored-text"}>
      <nav className={style.header_inner_wrapper}>
        <section className={style.header_left_logo + " font_navigator_logo light-colored-text"}>TAOTIFY</section>
        <section className={style.header_right_nav}>
          <ul>
            {navLinks.map((nav) => {
              return (
              <li key={nav.name} className={`light-colored-text ${(nav.name === "SUBSCRIBE")? "font_h5_headline primary-colored-background " + style.subscribe: "font_menu"}`}>
                <a>{nav.name}</a>
                {
                  (nav.child) ? (
                    <TriangleIcon className={style.menu_list_icon}/>
                  ):null
                }
              </li>
              );
            })}
          </ul>
        </section>
      </nav>
    </section>
  );
};

export default Navigator;
