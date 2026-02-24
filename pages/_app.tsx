import "../styles/globals.css";
import "../lib/fontawesome";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React from "react";
import { ToastContainer } from "react-toastify";

const SessionProviderWrapper = dynamic(
  () => import("../components/providers/SessionProviderWrapper"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        Loading...
      </div>
    ),
  },
);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(dark);
  }, []);

  return (
    <>
      <SessionProviderWrapper
        Component={Component}
        pageProps={pageProps}
        session={session}
        isDarkMode={isDarkMode}
      />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default MyApp;
