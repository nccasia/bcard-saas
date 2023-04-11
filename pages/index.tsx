// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSession, GetSessionParams } from "next-auth/react";
import React from "react";

import { prisma } from "../lib/prisma";

const Home: NextPage = ({ session }: any) => {
  const router: any = useRouter();
  React.useEffect(() => {
    // if( admin){
    //   router.push('/admin/admin')
    // }
    // if(!admin){
    //   router.push('/users/card');
    // }
    if (!session) {
      router.push("/login");
    }
    console.log("hhh");
  }, []);

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

export const getServerSideProps = async (context: GetSessionParams | undefined) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: { session: null },
    };
  }
  const admin = await prisma.admin.findUnique({
    where: { email: session.user?.email || undefined },
    select: {
      email: true,
    },
  });
  console.log(prisma.profile);
  return {
    props: { session, admin },
  };
};
