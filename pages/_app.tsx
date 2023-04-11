/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/globals.css";
import "../lib/fontawesome";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
