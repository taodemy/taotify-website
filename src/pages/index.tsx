import Footer from "@/components/Footer";
import Head from "next/head";
import PriceTier from "@/components/PriceTier";
import Categories from "@/components/Categories";
import Navigator from "@/components/Navigator";
import Singers from "@/components/Singers";
import HeroTwo from "@/components/HeroTwo";
import style from "./index.module.scss"
import HeroFirst from "@/components/HeroFirst";
import Gallery from "@/components/Gallery";
import GetStarted from "@/components/GetStarted/index";
import Sponsor from "@/components/Sponsor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.page_layout}>
        <Navigator />
        <HeroTwo />
        <HeroFirst />
        <Categories />
        <GetStarted />
        <Singers />
        <PriceTier />

        <Sponsor />

        <Gallery />

        <Footer />
      </main>
    </>
  );
}
