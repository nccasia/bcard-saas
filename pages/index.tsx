import type { NextPage } from "next";
import Head from "next/head";
import { getSession, signIn, signOut } from "next-auth/react";

import { prisma } from "../lib/prisma";

const Home: NextPage = ({ profile, session }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Business Card App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {session && (
          <>
            Signed in as {session.user?.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: { session: null },
    };
  }

  const profile = await prisma.profile.findUnique({ where: { email: session?.user?.email } });

  return {
    props: { profile, session },
  };
};
