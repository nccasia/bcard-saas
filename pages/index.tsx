import type { NextPage } from "next";
import Head from "next/head";
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";
import { prisma } from "../lib/prisma";
import Free from "../components/free/Free";
import { useRouter } from 'next/router'
import React from "react";

const Home: NextPage = ({ profile, session, admin }: any) => {
  
  const router:any = useRouter();
  React.useEffect(()=>{
    if(session && admin){
      router.push('/admin/admin')
    }
    if(session && !admin){
      router.push('/users/card');
    }
  },[])
  

  return (
    <div >
      <Head>
        <title>Business Card App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session && <Free/>}
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
