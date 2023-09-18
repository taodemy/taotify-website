import Footer from "@/components/Footer";
import Head from "next/head";
import PriceTier from "@/components/PriceTier";
import Navigator from "@/components/Navigator";
import style from "./index.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className={style.top_header}>
          <Navigator />
        </header>
        <PriceTier />
        <Footer />
      </main>
    </>
  );
}
