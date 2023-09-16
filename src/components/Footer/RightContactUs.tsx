import React from "react";
import style from "./index.module.scss";

const RightContactUs = () => {
  const formList = ["Name", "Email", "Message"];

  return (
    <section
      className={style.contactus_section_right + " light-colored-background dark-colored-text"}
    >
      <form className={style.contactus_right_wrapper}>
        <h3 className="font_h3_headline">
          Fill in your details
        </h3>

        <div className={style.input_container}>
          {
            formList.map((name) => {
              return (
                <div key={name}>
                  <label 
                  className={`font_small_bold ${(name === "Message") ? style.message_label + " primary-colored-text" : ""}`}
                  htmlFor={name}
                  >
                    {name}
                  </label>
                  {
                    name === "Message" ? (
                      <textarea
                      className={`light-colored-background 
                      dark-colored-text
                      font_main_regular
                      ${(name === "Message") ? style.message_input : ""}`}
                      rows={4}
                      />
                    ) : (<input 
                      className={`light-colored-background 
                      dark-colored-text
                      font_main_regular
                      ${(name === "Message") ? style.message_input : ""}`}
                      type={(name === "Email") ? "email" : "text"} />)
                  }
                  
                </div>
              )
            })
          }
        </div>

        <input className={style.submit_btn} type="submit" value={"Submit"}/>
      </form>
    </section>
  );
};

export default RightContactUs;
