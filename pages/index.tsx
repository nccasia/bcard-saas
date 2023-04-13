import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import { keyAdmin } from "../admin/keyAdmin";
import { prisma } from "../lib/prisma";

const Home: NextPage = () => {
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
