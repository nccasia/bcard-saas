import Head from "next/head";
import React from "react";

import EditProfile from "../../../components/EditProfile";
import { prisma } from "../../../lib/prisma";

function Update({ profile }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <Head>
        <title>Update Profile - Business Card App</title>
      </Head>

      <EditProfile profile={profile} />
    </div>
  );
}

export default Update;

export const getServerSideProps = async (context: { params: any }) => {
  const { params } = context;
  const { slug } = params;

  const profile = await prisma.profile.findUnique({ where: { slug: slug } });
  return {
    props: { profile },
  };
};
