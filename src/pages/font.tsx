import Head from "next/head";
/**
this page is a template to show how to use all the font styles from design system
*/
export default function font() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="font_h1_headline_bold">H1 Headline / Bold</h1>
        <h1 className="font_h1_headline_regular">H1 Headline / Regular</h1>
        <p className="font_subtitle_bold">subtitle / Bold</p>
        <p className="font_subtitle_regular">subtitle / Regular</p>
        <h2 className="font_h2_headline">H2 headline</h2>
        <h3 className="font_h3_headline">H3 headline</h3>
        <h4 className="font_h4_headline">H4 headline</h4>
        <h5 className="font_h5_headline">h5 headline</h5>
        <p className="font_main_bold">Main / Bold</p>
        <p className="font_main_regular">Main / Regular</p>
        <p className="font_menu">MENU</p>
        <p className="font_additional">Additional</p>
        <p className="font_small_bold">Small / Bold</p>
        <p className="font_small_regular">Small / Regular</p>
      </main>
    </>
  );
}
