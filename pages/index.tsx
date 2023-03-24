import type { NextPage } from "next";
import Head from "next/head";
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";

import Users from "../components/users/Users";
import { prisma } from "../lib/prisma";
import Admin from "../components/admin/Admin";
import Profile from "../components/Profile";
import Login from "../components/login/Login";
import Header from "../components/layout/header/Header";
import Layout from "../components/layout";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Card from "../components/users/card";
import { MainView } from "../components/layout/mainview/MainView";

const Home: NextPage = ({ profile, session, admin }: any) => {
  return (

    <div className="">
      {session  && (<Layout />)}
      <Head>
        <title>Business Card App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session && admin && (<Admin />)}
      {session && !admin && (<Users profile={profile} session={session} />)}
      {session && !admin && (<Card profile={profile} session={session} />)}
      {session && !admin && (<MainView profile={profile} />)}
      {session && !admin && (<Layout profile={profile} />)}
      {session && admin && (<Admin session={session}/>)}
      {!session && <Login />}
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
