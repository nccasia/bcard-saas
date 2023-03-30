import "../styles/globals.css";
import "../lib/fontawesome"
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  
  return(
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
  
}

export default MyApp;

