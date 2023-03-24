import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as htmlToImage from "html-to-image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import QRCode from "qrcode-generator";
import React, { useState } from "react";
import Header from "../../components/home/Header";
import Sidebar from "../../components/home/Sidebar";
import { prisma } from "../../lib/prisma";
import styles from  "../../styles/profile.module.css"
function ProfileDetails({ profile }: any) {
  const [imageUrl, setImageUrl] = React.useState("");
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
  const [text, setText] = React.useState("");
  const generateQRCode = () => {
    const qr = QRCode(0, "M");
    qr.addData(text);
    qr.make();
    const canvas = qr.createImgTag();
    const img = new Image();
    img.src = canvas;
    img.onload = async () => {
      const node = document.createElement("card");
      node.appendChild(img);
      const dataUrl = await htmlToImage.toPng(node);
      setImageUrl(dataUrl);
    };
  };

  return (
    <>
       <Header/>
       <Sidebar />
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Head>
            <title>{`${profile.name}'s Profile - Business Card App`}</title>
          </Head>
          <div id="card">
              <div style={{ width:"300px", height:"150px", backgroundColor:"#ff370096", display: "flex"}}>
                <div style={{ margin: "auto", textAlign: "center", color: "white", fontSize: "14px" }}>
                  <img src={profile.logo} alt="hello" style={{ borderRadius: "50%", width: "70px", height: "70px", margin: "0 40px"}} />
                  <p>{profile.company}</p>
                  <p style={{ fontSize: 12 }}>{profile.slogan}</p>
                </div>
              </div>
              {isHidden ? 
                <div className={styles.headCard}>
                  <div className={styles.headContent}>
                    <img src={profile.logo} alt="hello" className={styles.img} />
                    <p style={{ fontSize: 16 }}>{profile.company}</p>
                    <p style={{ fontSize: 10 }}>{profile.slogan}</p>
                  </div>
                </div>
                : 
                <div className={styles.mainCard}>
                  <div style={{ display: "flex", flex: 1 }}>
                    <div className={styles.cardImage}>
                      <img src={profile.img} alt="hello" className={styles.img}/>
                      <p>{profile.action}</p>
                    </div>
                  </div>
                  <div className={styles.contentCard}>
                    <p>{profile.name}</p>
                    <p>{profile.position}</p>
                    <p>{profile.address}</p>
                    <p>{profile.phone}</p>
                    <p>{profile.email}</p>
                    <p>{profile.web}</p>
                  </div>
                </div>
              }
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
          <Link href="/">
            <button
                type="submit"
                className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
            >
                Home
            </button>
          </Link>
       
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={generateQRCode}>Generate QR Code</button>
          {imageUrl && (
            <>
              <img src={imageUrl} alt="QR code" />
            </>
          )}
        </div>
      )}
     </div>
     </>
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
