import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface SessionProviderWrapperProps {
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
  session: Session | null | undefined;
  isDarkMode: boolean;
}

function PageWithAuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status }: any = useSession();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (status === "loading") return;

    if (!session || router.pathname === "/") {
      if (router.pathname.startsWith("/view/")) {
        setOpen(true);
      } else {
        router.push("/login");
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
        router.push("/card/me");
      }
      if (router.asPath === "/card/me") {
        setOpen(true);
      } else {
        if (router.pathname.startsWith("/view/")) {
          setOpen(true);
        } else {
          setOpen(false);
          router.push("/card/me");
          setOpen(true);
        }
      }
      return;
    }
    setOpen(true);
    if (router.pathname.startsWith("/login")) {
      router.push("/admin/users");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status, router.pathname]);

  if (status === "loading" || !open) {
    return (
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
    );
  }
  return <>{children}</>;
}

export default function SessionProviderWrapper({
  Component,
  pageProps,
  session,
  isDarkMode,
}: SessionProviderWrapperProps) {
  return (
    <SessionProvider session={session}>
      <PageWithAuthCheck>
        <Component {...pageProps} isDarkMode={isDarkMode} />
      </PageWithAuthCheck>
    </SessionProvider>
  );
}
