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
  const [open, setOpen] = React.useState(false);
  const Router = async () => {
    if (status === "loading") return;
    else {
      if (!session || router.pathname === "/") {
        if (router.pathname.startsWith("/view")) {
          setOpen(true);
        } else {
          await router.push("/login");
          setOpen(false);
          if (router.pathname === "/login") {
            setOpen(true);
          }
        }
        return;
      }
      if (session && !session?.user?.isAdmin) {
        setOpen(true);
        if (router.asPath === "/login") {
          router.push("/card/" + session.user?.email.split("@")[0]);
        }
        if (
          router.asPath === "/card/" + session.user?.email.split("@")[0] ||
          router.pathname.startsWith("/view")
        ) {
          setOpen(true);
        } else {
          setOpen(false);
          router.push("/card/" + session.user?.email.split("@")[0]);
        }
        return;
      } else {
        setOpen(true);
        if (router.pathname.startsWith("/login")) {
          router.push("/admin/update");
        }
        return;
      }
    }
  };
  //console.log(router);
  React.useEffect(() => {
    Router();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, router.pathname]);

  return open ? <>{children}</> : null;
}
