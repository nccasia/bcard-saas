import type { NextPage } from "next";
import Head from "next/head";
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";

import CreateProfile from "../components/CreateProfile";
import Profile from "../components/Profile";
import { prisma } from "../lib/prisma";

const Home: NextPage = ({ profile, session }: any) => {
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
            {!profile && <CreateProfile email={session.user?.email} />}
            {profile && <Profile profile={profile} />}
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

export const getServerSideProps = async (context: GetSessionParams | undefined) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: { session: null },
    };
  }

  const profile = await prisma.profile.findUnique({
    where: { email: session.user?.email || undefined },
    select: {
      id: true,
      name: true,
      email: true,
      slug: true,
      bio: true,
      phone: true,
      twitter: true,
      instagram: true,
      facebook: true,
    },
  });
  return {
    props: { profile, session },
  };
};
