import React from "react";
import style from "./index.module.scss";

const Singers = () => {
  return (
    <section className={style.singers}>
      <main className={style.singer_container}>
        <article className={style.singer_introduction}>
          <div>
            <h2 className="font_h2_headline dark-colored-text">Singers</h2>
            <p className="font_main_regular dark-colored-text">
              Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales,
              tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id
              mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum
              condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus
            </p>
            <button className="font_h5_headline light-colored-text">View All Singers</button>
          </div>
        </article>
        <aside className={style.singer_posters}>
          <img
            className={style.singerSectionImg1}
            src="/singerSectionImg1.jpg"
            alt="character"
          ></img>
          <img
            className={style.singerSectionImg11}
            src="/singerSectionImg11.jpg"
            alt="characterBackground"
          ></img>

          <img
            className={style.singerSectionImg2}
            src="/singerSectionImg2.jpg"
            alt="character"
          ></img>
          <img
            className={style.singerSectionImg21}
            src="/singerSectionImg21.jpg"
            alt="characterBackground"
          ></img>

          <img
            className={style.singerSectionImg3}
            src="/singerSectionImg3.jpg"
            alt="character"
          ></img>
          <img
            className={style.singerSectionImg31}
            src="/singerSectionImg31.jpg"
            alt="characterBackground"
          ></img>

          <img
            className={style.singerSectionImg4}
            src="/singerSectionImg4.jpg"
            alt="character"
          ></img>
          <img
            className={style.singerSectionImg41}
            src="/singerSectionImg41.jpg"
            alt="characterBackground"
          ></img>
        </aside>
      </main>
    </section>
  );
};

export default Singers;
