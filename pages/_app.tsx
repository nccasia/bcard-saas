import "../styles/globals.css";
import "../lib/fontawesome";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <PageWithAuthCheck>
        <Component {...pageProps} />
      </PageWithAuthCheck>
    </SessionProvider>
  );
}

export default MyApp;

function PageWithAuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status }: any = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === "loading") return;

    if (!session || router.pathname === "/") {
      router.push("/login/login");
      return;
    }
    if (!session.user?.isAdmin) {
      if (router.pathname.startsWith("/admin")) {
        router.push("/view/page404");
      }
      if (router.pathname.startsWith("/login/login")) {
        router.push("/" + session.user?.email.split("@")[0]);
      }
      if (router.pathname !== "/" + session.user?.email.split("@")[0]) {
        router.push("/" + session.user?.email.split("@")[0]);
      }
    } else {
      if (router.pathname.startsWith("/login/login")) {
        router.push("/admin/update");
      }
    }
  }, [session, router.pathname]);

  return <>{children}</>;
}
