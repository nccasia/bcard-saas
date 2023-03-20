import type { NextPage } from "next";
import Head from "next/head";
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";

import Users from "../components/users/Users";
import { prisma } from "../lib/prisma";
import Login from "../components/login/Login";
import Admin from "../components/admin/Admin";
import Profile from "../components/Profile";

const Home: NextPage = ({ profile, session, admin }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Business Card App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {session && !admin && (<Profile profile={profile} session={session} />)}
        {session && admin && (<Admin />)}
        {!session && <Login />}
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
  const admin = await prisma.admin.findUnique({
    where: { email: session.user?.email || undefined },
    select: {
      email:true,
    },
  });
  const profile = await prisma.profile.findUnique({
    where: { email: session.user?.email || undefined },
    select: {
      id: true,
      name: true,
      email: true,
      web: true,
      address: true,
      logo: true,
      slogan: true,
      phone: true,
      slug: true,
      company: true,
      position: true,
      action: true,
      img: true,
    },
  });
  console.log(prisma.profile);
  return {
    props: { profile, session, admin },
  };
};
