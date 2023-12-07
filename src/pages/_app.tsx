import Head from 'next/head';
import '@/styles/tailwind-globals.css';
import '@/styles/globals.css';
import "@/styles/global-background-color.scss"
import "@/styles/global-font-style.scss"
import "@/styles/global-text-color.scss"
import "swiper/css";
import "swiper/css/navigation";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Taotify</title>
        <meta
          name="description"
          content="Discover, Play, and Enjoy Your Favorite Music with Taotify - Your Ultimate Music Companion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
