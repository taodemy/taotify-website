import '@/styles/globals.css'
import "@/styles/global-background-color.scss"
import "@/styles/global-font-style.scss"
import "@/styles/global-text-color.scss"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
