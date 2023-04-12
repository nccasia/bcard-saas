import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import React from "react";

import { keyAdmin } from "../admin/keyAdmin";
import { prisma } from "../lib/prisma";

const Home: NextPage = () => {
  const { data: session, status }: any = useSession();
  console.log(session);
  const router: any = useRouter();
  React.useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (session && session.user?.isAdmin) {
      router.push("/admin/admin");
    }
    if (session && session.user?.email && !session.user?.isAdmin) {
      router.push("/" + session.user?.email.split("@")[0]);
    }
    if (!session) {
      signIn("", { callbackUrl: "/" });
    }
  }, [session, status]);

  return (
    <div>
      <Head>
        <title>Business Card App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Login /> */}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const admin = await prisma.admin.createMany({
    data: keyAdmin,
    skipDuplicates: true,
  });
  console.log(prisma.profile);
  return {
    props: { admin },
  };
};
