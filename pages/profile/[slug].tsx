import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import { prisma } from "../../lib/prisma";

function ProfileDetails({ profile }: any) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <>
          <Head>
            <title>{`${profile.name}'s Profile - Business Card App`}</title>
          </Head>
          <div className="text-gray-800 text-lg text-left mt-5">
            <div className="mb-7">
              <Image className="rounded-full" src={profile.user.image} width={100} height={100} />
            </div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p>{profile.bio}</p>
            </div>

            <ul>
              <li>
                <span className="font-bold">Email: </span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className="font-bold">Phone: </span>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </li>
              <li>
                <span className="font-bold">Instagram: </span>
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
                  {profile.instagram}
                </a>
              </li>
              <li>
                <span className="font-bold">Twitter: </span>
                <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
                  {profile.twitter}
                </a>
              </li>
              <li>
                <span className="font-bold">Facebook: </span>
                <a href={profile.facebook} target="_blank" rel="noopener noreferrer">
                  {profile.facebook}
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileDetails;

export const getStaticProps = async (context: { params: any }) => {
  const { params } = context;
  const { slug } = params;

  const profile = await prisma.profile.findFirst({
    where: { slug: slug },
    select: {
      name: true,
      email: true,
      phone: true,
      slug: true,
      bio: true,
      instagram: true,
      twitter: true,
      facebook: true,
      user: { select: { image: true } },
    },
  });

  return {
    props: { profile },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
