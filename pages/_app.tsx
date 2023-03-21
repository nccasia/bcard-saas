import "../styles/globals.css";
import "../lib/fontawesome"
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

