import React from 'react'
import style from "./index.module.scss";
import fontClasses from "@/styles/font-styles-className";

function index() {
  return (
    <section className={style.testimonial}>
      <div className={fontClasses.font_testimonials_title}>Testimonials</div>
      <div className={style.testimonial_cards_container}>
        <div className={style.testimonial_card_left}>
          1
        </div>
        <div className={style.testimonial_card_middle}>
          <div className={style.testimonial_card_middle_background}/>
          2
        </div>
        <div className={style.testimonial_card_right}>
          3
        </div>
      </div>
    </section>
  )
}

export default index