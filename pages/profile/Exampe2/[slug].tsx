import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as htmlToImage from "html-to-image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import QRCode from "qrcode-generator";
import React, { useState } from "react";

import { prisma } from "../../../lib/prisma";
import styles from  "../../../styles/profile.module.css"

function ProfileDetails({ profile }: any) {
  const [isHidden, setIsHidden] = useState(true);
  const toggle = () => setIsHidden(!isHidden);

  const router = useRouter();
  const downloadAsPng = async () => {
    const node = document.getElementById("card");
    if (node) {
      const imgDataUrl = await htmlToImage.toPng(node);
      const link = document.createElement("a");
      link.download = "your-file-name.png";
      link.href = imgDataUrl;
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <>
          <Head>
            <title>{`${profile.name}'s Profile - Business Card App`}</title>
          </Head>
          <div id="card">
          {isHidden ? 
            <div className={styles.cardHead}>
              <div className={styles.cardHeadContent}>
                <img src={profile.logo} alt="hello" className={styles.img} />
                <p style={{ fontSize: 30 }}>{profile.company}</p>
                {/* <p style={{ fontSize: 10 }}>{profile.slogan}</p> */}
              </div>
            </div>
            : 
            <div className={styles.cardMain}>
        <div style={{ display: "flex", flex: 1 }}>
          <div className={styles.cardImage}>
            <img src={profile.logo} alt="hello" style={{borderRadius: "50px"}} width="100px" height="100px" />
           <div>
           < p style={{ fontSize: 30 }}>{profile.company}</p>
            <p style={{ fontSize: 16 }}>{profile.slogan}</p>
           </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.itemContent}>
          <FontAwesomeIcon icon="user" style={{fontSize: '20px'}}/>
          <p>{profile.name}</p> <br />
          <p>{profile.bio}</p>
          </div>
          <div className={styles.itemContent}>
          <FontAwesomeIcon icon="phone" style={{fontSize: '20px'}}/>
          <p>{profile.phone}</p>
          </div>
          <div className={styles.itemContent}>
          <FontAwesomeIcon icon="fire" style={{fontSize: '20px'}}/>
          <p>{profile.web}</p>
          </div>
          <div className={styles.itemContent}>
          <FontAwesomeIcon icon="location-dot" style={{fontSize: '20px'}}/>
          <p>{profile.address}</p>
          </div>
        </div>
            </div>}
            <div className={styles.button}>
              <button className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base" onClick={toggle}>Toggle</button>
              <Link href={`/profile/edit/${profile.slug}`}>
              <button
                type="submit"
                className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
              >
                Update Profile
              </button>
              </Link>
            </div>
          </div>
          <br />
          <button onClick={downloadAsPng}>Dowload</button>

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
