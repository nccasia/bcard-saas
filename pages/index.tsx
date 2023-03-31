import type { NextPage } from "next";
import Head from "next/head";
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";
import { prisma } from "../lib/prisma";
import Free from "../components/free/Free";
import { useRouter } from 'next/router'
import React from "react";

const Home: NextPage = ({ session, admin }: any) => {
  
  const router:any = useRouter();
  //React.useEffect(()=>{
    // if( admin){
    //   router.push('/admin/admin')
    // }
    // if(!admin){
    //   router.push('/users/card');
    // }
    // if(!session ){
    //   router.push('/free/free');
    // }
  //},[])  

  return (
    <div >
      <Head>
        <title>Business Card App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
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
  console.log(prisma.profile);
  return {
    props: {session, admin },
  };
};
