import React, { useEffect, useRef, useState } from "react";
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
    }
  ];

  const [untransparency, setUntransparency] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 72) {
        setUntransparency(true);
      } else {
        setUntransparency(false);
      }
    });
  }, [])

  return (
    <section className={style.header_outer_wrapper + " dark-colored-text " + ((untransparency)? style.untransparency_nav: "")}>
      <nav className={style.header_inner_wrapper}>
        <section className={style.header_left_logo + " font_navigator_logo light-colored-text"}>TAOTIFY</section>
        <section className={style.header_right_nav}>
          <ul>
            {navLinks.map((nav) => {
              return (
              <li key={nav.name} className={`light-colored-text font_menu`}>
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
          <button className={"font_h5_headline light-colored-text primary-colored-background " + style.subscribe}>SUBSCRIBE</button>
        </section>
      </nav>
    </section>
  );
};

export default Navigator;
