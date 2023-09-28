import { Montserrat, Raleway } from "next/font/google";

const montserrat = Montserrat({subsets: ["latin"]});
const raleway = Raleway({subsets: ["latin"]});

const fontClasses = {
  h1_headline_bold: montserrat.className + " font_h1_headline_bold ",
  h1_headline_regular: montserrat.className + " font_h1_headline_regular ",
  subtitle_bold: raleway.className + " font_subtitle_bold ",
  subtitle_regular: raleway.className + " font_subtitle_regular ",
  h2_headline: montserrat.className + " font_h2_headline ",
  h3_headline: montserrat.className + " font_h3_headline ",
  h4_headline: montserrat.className + " font_h4_headline ",
  h5_headline: montserrat.className + " font_h5_headline ",
  main_bold: raleway.className + " font_main_bold ",
  main_regular: raleway.className + " font_main_regular ",
  menu: montserrat.className + " font_menu ",
  additional: montserrat.className + " font_additional ",
  small_bold: raleway.className + " font_small_bold ",
  small_regular: raleway.className + " font_small_regular ",
  /**font sytle other than design systme */
  font_navigator_logo: raleway.className + " font_navigator_logo ",
  font_hero_title: montserrat.className + " font_hero_title",
  font_hero_content: raleway.className + " font_hero_content",
  font_hero_background: montserrat.className + " font_hero_background",
  font_hero_button: montserrat.className + " font_hero_button",
};

export default fontClasses;
