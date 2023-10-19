import React from 'react'
import style from "./index.module.scss";
import fontClasses from "@/styles/font-styles-className";

function index() {
  return (
    <section className={style.testimonial}>
      <div className={fontClasses.font_testimonials_title}>Testimonials</div>
      <div className={style.testimonial_cards_container}>
        <div className={style.testimonial_card_left}>
        <div className={style.testimonial_card_background} />
          <div className={style.testimonial_card_content}>
            <div className={style.testimonial_card_p}>
              <div className={style.testimonial_card_p_quote}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <g clip-path="url(#clip0_1582_1420)">
                    <path d="M5.72875 21.6513C4.44125 20.2838 3.75 18.7501 3.75 16.2638C3.75 11.8888 6.82125 7.96756 11.2875 6.02881L12.4038 7.75131C8.235 10.0063 7.42 12.9326 7.095 14.7776C7.76625 14.4301 8.645 14.3088 9.50625 14.3888C11.7613 14.5976 13.5388 16.4488 13.5388 18.7501C13.5388 19.9104 13.0778 21.0232 12.2573 21.8437C11.4369 22.6641 10.3241 23.1251 9.16375 23.1251C7.8225 23.1251 6.54 22.5126 5.72875 21.6513ZM18.2288 21.6513C16.9412 20.2838 16.25 18.7501 16.25 16.2638C16.25 11.8888 19.3213 7.96756 23.7875 6.02881L24.9038 7.75131C20.735 10.0063 19.92 12.9326 19.595 14.7776C20.2662 14.4301 21.145 14.3088 22.0062 14.3888C24.2612 14.5976 26.0387 16.4488 26.0387 18.7501C26.0387 19.9104 25.5778 21.0232 24.7573 21.8437C23.9369 22.6641 22.8241 23.1251 21.6637 23.1251C20.3225 23.1251 19.04 22.5126 18.2288 21.6513Z" fill="#5B99B3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1582_1420">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={style.testimonial_card_text}>
                <p className={fontClasses.font_testimonial_card_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_1582_1423)">
                  <path d="M24.0603 7.5025C25.3478 8.87 26.0391 10.4038 26.0391 12.89C26.0391 17.265 22.9678 21.1863 18.5016 23.125L17.3853 21.4025C21.5541 19.1475 22.3691 16.2213 22.6941 14.3763C22.0228 14.7238 21.1441 14.845 20.2828 14.765C18.0278 14.5563 16.2503 12.705 16.2503 10.4038C16.2503 9.24343 16.7112 8.13063 17.5317 7.31016C18.3522 6.48969 19.465 6.02875 20.6253 6.02875C21.9666 6.02875 23.2491 6.64125 24.0603 7.5025ZM11.5603 7.5025C12.8478 8.87 13.5391 10.4038 13.5391 12.89C13.5391 17.265 10.4678 21.1863 6.00156 23.125L4.88531 21.4025C9.05406 19.1475 9.86906 16.2213 10.1941 14.3763C9.52281 14.7238 8.64406 14.845 7.78281 14.765C5.52781 14.5563 3.75031 12.705 3.75031 10.4038C3.75031 9.24343 4.21125 8.13063 5.03172 7.31016C5.85219 6.48969 6.96499 6.02875 8.12531 6.02875C9.46656 6.02875 10.7491 6.64125 11.5603 7.5025Z" fill="#5B99B3" />
                </g>
                <defs>
                  <clipPath id="clip0_1582_1423">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className={style.testimonial_card_user}>
              <img
                className={style.testimonial_card_user_avatar}
                src="/testimonial_left.svg"
                alt="testimonial left"
              />
              <div className={style.testimonial_card_user_name_group}>
                <div className={fontClasses.font_testimonial_card_user_name}>
                  Ellie James
                </div>
                <div className={fontClasses.font_testimonial_card_user_url}>
                  ipsum.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.testimonial_card_middle}>
          <div className={style.testimonial_card_background} />
          <div className={style.testimonial_card_content}>
            <div className={style.testimonial_card_p}>
              <div className={style.testimonial_card_p_quote}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <g clip-path="url(#clip0_1582_1420)">
                    <path d="M5.72875 21.6513C4.44125 20.2838 3.75 18.7501 3.75 16.2638C3.75 11.8888 6.82125 7.96756 11.2875 6.02881L12.4038 7.75131C8.235 10.0063 7.42 12.9326 7.095 14.7776C7.76625 14.4301 8.645 14.3088 9.50625 14.3888C11.7613 14.5976 13.5388 16.4488 13.5388 18.7501C13.5388 19.9104 13.0778 21.0232 12.2573 21.8437C11.4369 22.6641 10.3241 23.1251 9.16375 23.1251C7.8225 23.1251 6.54 22.5126 5.72875 21.6513ZM18.2288 21.6513C16.9412 20.2838 16.25 18.7501 16.25 16.2638C16.25 11.8888 19.3213 7.96756 23.7875 6.02881L24.9038 7.75131C20.735 10.0063 19.92 12.9326 19.595 14.7776C20.2662 14.4301 21.145 14.3088 22.0062 14.3888C24.2612 14.5976 26.0387 16.4488 26.0387 18.7501C26.0387 19.9104 25.5778 21.0232 24.7573 21.8437C23.9369 22.6641 22.8241 23.1251 21.6637 23.1251C20.3225 23.1251 19.04 22.5126 18.2288 21.6513Z" fill="#5B99B3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1582_1420">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={style.testimonial_card_text}>
                <p className={fontClasses.font_testimonial_card_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_1582_1423)">
                  <path d="M24.0603 7.5025C25.3478 8.87 26.0391 10.4038 26.0391 12.89C26.0391 17.265 22.9678 21.1863 18.5016 23.125L17.3853 21.4025C21.5541 19.1475 22.3691 16.2213 22.6941 14.3763C22.0228 14.7238 21.1441 14.845 20.2828 14.765C18.0278 14.5563 16.2503 12.705 16.2503 10.4038C16.2503 9.24343 16.7112 8.13063 17.5317 7.31016C18.3522 6.48969 19.465 6.02875 20.6253 6.02875C21.9666 6.02875 23.2491 6.64125 24.0603 7.5025ZM11.5603 7.5025C12.8478 8.87 13.5391 10.4038 13.5391 12.89C13.5391 17.265 10.4678 21.1863 6.00156 23.125L4.88531 21.4025C9.05406 19.1475 9.86906 16.2213 10.1941 14.3763C9.52281 14.7238 8.64406 14.845 7.78281 14.765C5.52781 14.5563 3.75031 12.705 3.75031 10.4038C3.75031 9.24343 4.21125 8.13063 5.03172 7.31016C5.85219 6.48969 6.96499 6.02875 8.12531 6.02875C9.46656 6.02875 10.7491 6.64125 11.5603 7.5025Z" fill="#5B99B3" />
                </g>
                <defs>
                  <clipPath id="clip0_1582_1423">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className={style.testimonial_card_user}>
              <img
                className={style.testimonial_card_user_avatar}
                src="/testimonial_middle.svg"
                alt="testimonial middle"
              />
              <div className={style.testimonial_card_user_name_group}>
                <div className={fontClasses.font_testimonial_card_user_name}>
                  Johnny Doe
                </div>
                <div className={fontClasses.font_testimonial_card_user_url}>
                  ipsum.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.testimonial_card_right}>
        <div className={style.testimonial_card_background} />
          <div className={style.testimonial_card_content}>
            <div className={style.testimonial_card_p}>
              <div className={style.testimonial_card_p_quote}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <g clip-path="url(#clip0_1582_1420)">
                    <path d="M5.72875 21.6513C4.44125 20.2838 3.75 18.7501 3.75 16.2638C3.75 11.8888 6.82125 7.96756 11.2875 6.02881L12.4038 7.75131C8.235 10.0063 7.42 12.9326 7.095 14.7776C7.76625 14.4301 8.645 14.3088 9.50625 14.3888C11.7613 14.5976 13.5388 16.4488 13.5388 18.7501C13.5388 19.9104 13.0778 21.0232 12.2573 21.8437C11.4369 22.6641 10.3241 23.1251 9.16375 23.1251C7.8225 23.1251 6.54 22.5126 5.72875 21.6513ZM18.2288 21.6513C16.9412 20.2838 16.25 18.7501 16.25 16.2638C16.25 11.8888 19.3213 7.96756 23.7875 6.02881L24.9038 7.75131C20.735 10.0063 19.92 12.9326 19.595 14.7776C20.2662 14.4301 21.145 14.3088 22.0062 14.3888C24.2612 14.5976 26.0387 16.4488 26.0387 18.7501C26.0387 19.9104 25.5778 21.0232 24.7573 21.8437C23.9369 22.6641 22.8241 23.1251 21.6637 23.1251C20.3225 23.1251 19.04 22.5126 18.2288 21.6513Z" fill="#5B99B3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1582_1420">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={style.testimonial_card_text}>
                <p className={fontClasses.font_testimonial_card_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_1582_1423)">
                  <path d="M24.0603 7.5025C25.3478 8.87 26.0391 10.4038 26.0391 12.89C26.0391 17.265 22.9678 21.1863 18.5016 23.125L17.3853 21.4025C21.5541 19.1475 22.3691 16.2213 22.6941 14.3763C22.0228 14.7238 21.1441 14.845 20.2828 14.765C18.0278 14.5563 16.2503 12.705 16.2503 10.4038C16.2503 9.24343 16.7112 8.13063 17.5317 7.31016C18.3522 6.48969 19.465 6.02875 20.6253 6.02875C21.9666 6.02875 23.2491 6.64125 24.0603 7.5025ZM11.5603 7.5025C12.8478 8.87 13.5391 10.4038 13.5391 12.89C13.5391 17.265 10.4678 21.1863 6.00156 23.125L4.88531 21.4025C9.05406 19.1475 9.86906 16.2213 10.1941 14.3763C9.52281 14.7238 8.64406 14.845 7.78281 14.765C5.52781 14.5563 3.75031 12.705 3.75031 10.4038C3.75031 9.24343 4.21125 8.13063 5.03172 7.31016C5.85219 6.48969 6.96499 6.02875 8.12531 6.02875C9.46656 6.02875 10.7491 6.64125 11.5603 7.5025Z" fill="#5B99B3" />
                </g>
                <defs>
                  <clipPath id="clip0_1582_1423">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className={style.testimonial_card_user}>
              <img
                className={style.testimonial_card_user_avatar}
                src="/testimonial_right.svg"
                alt="testimonial right"
              />
              <div className={style.testimonial_card_user_name_group}>
                <div className={fontClasses.font_testimonial_card_user_name}>
                  Myne Barack
                </div>
                <div className={fontClasses.font_testimonial_card_user_url}>
                  ipsum.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index