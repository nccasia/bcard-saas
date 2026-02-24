/* eslint-disable react/no-children-prop */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import logo_content from "../../public/logo_content.png";
import styles from "../../styles/profile.module.css";

function ExcelCard({ profile, params, isDarkMode }: any) {
  const [fontSize, setFontSize] = useState<number | undefined>();
  const [fontMail, setFontSizeMain] = useState<number | undefined>();
  const boxRef = useRef<any>(null);
  const textRef = useRef<any>(null);
  const emailRef = useRef<any>(null);

  useEffect(() => {
    // Lấy đối tượng của box
    if (!boxRef.current || !textRef.current || !emailRef.current) return;
    const box = boxRef.current;
    const text = textRef.current;
    const email = emailRef.current;

    if (box && text) {
      if (text.scrollWidth + 20 > box.offsetWidth) {
        if (window.innerWidth <= 768) {
          // Giảm kích thước font chữ để nội dung vừa với màn hình
          setFontSize(16);
        } else {
          setFontSize(19);
        }
      }
    }

    if (box && email) {
      if (email.scrollWidth + 20 > box.offsetWidth) {
        if (window.innerWidth <= 768) {
          setFontSizeMain(11);
        } else {
          setFontSizeMain(13);
        }

        // Thay đổi kích thước font của nội dung
      }
    }
  }, [fontMail, fontSize]);
  return (
    <>
      {/* <LayoutUser children={undefined}></LayoutUser> */}
      <div style={{ marginBottom: "50px" }}>
        {params?.exampe === "1" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div id="card" className={styles.card}>
              <div className={styles.mainCard1} style={{ background: isDarkMode ? "#fff" : " " }}>
                <div className={styles.contenCard}>
                  <div className={styles.cardImage}>
                    <div className={styles.image}>
                      <Image
                        src={logo_content}
                        alt="logo"
                        //layout="responsive"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
                <div ref={boxRef} className={styles.contentCard1}>
                  <div className={styles.title1}>
                    <h1
                      ref={textRef}
                      className={styles.headingText}
                      style={{ fontSize: profile?.Name?.length > 29 ? "11px" : `${fontSize}px` }}
                    >
                      {profile?.Name}
                    </h1>
                    <p
                      className={styles.position}
                      style={{ fontSize: profile?.Name?.length > 29 ? "11px" : `${fontSize}px` }}
                    >
                      {profile?.Title}
                    </p>
                  </div>
                  {/* <p>{profile.position}</p> */}
                  <div className={styles.itemContent}>
                    <FontAwesomeIcon
                      icon="envelope"
                      className={styles.icon}
                      style={{ fontSize: profile?.Email?.length > 29 ? "9px" : `${fontMail}px` }}
                    />
                    <p
                      ref={emailRef}
                      className={styles.text1}
                      style={{ fontSize: profile?.Email?.length > 29 ? "9px" : `${fontMail}px` }}
                    >
                      {profile?.Email}
                    </p>
                  </div>
                  <div className={styles.itemContent}>
                    <FontAwesomeIcon
                      icon="phone"
                      className={styles.icon}
                      style={{ fontSize: profile?.Email?.length > 29 ? "9px" : `${fontMail}px` }}
                    />
                    <p className={styles.text1} style={{ fontSize: `${fontMail}px` }}>
                      {profile?.Phone}
                    </p>
                  </div>
                  <div className={styles.itemContent}>
                    <FontAwesomeIcon
                      icon="globe"
                      className={styles.icon}
                      style={{ fontSize: profile?.Email?.length > 29 ? "9px" : `${fontMail}px` }}
                    />
                    <p
                      className={styles.text1}
                      style={{ fontSize: profile?.Email?.length > 29 ? "9px" : `${fontMail}px` }}
                    >
                      <Link href="https://ncc.plus/" target="_blank">
                        https://www.ncc.plus
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {params?.exampe === "2" && (
          <div id="card">
            <div className={styles.headCard}>
              <div className={styles.headContent}>
                <img src={profile?.logo} alt="hello" className={styles.img} />
                <p style={{ fontSize: 40 }}>{profile?.company}</p>
              </div>
            </div>
            <br></br>
            <div className={styles.mainCard}>
              <div style={{ display: "flex", flex: 1 }}>
                <div className={styles.cardImage}>
                  <img src={profile?.img} alt="hello" className={styles.imageCard} />
                  <p style={{ fontSize: 25 }}>{profile?.company}</p>
                  <p style={{ fontSize: 15, color: "black" }}>{profile?.slogan}</p>
                </div>
              </div>
              <div className={styles.contentCard}>
                <div className={styles.title}>
                  <h1 style={{ marginLeft: "16px" }}>{profile?.name}</h1>
                  <p style={{ marginLeft: "16px", color: "rgb(225 223 217)" }}>{profile?.action}</p>
                </div>

                {/* <p>{profile.position}</p> */}
                <div className={styles.itemContent}>
                  <FontAwesomeIcon icon="location-dot" style={{ fontSize: "16px" }} />
                  <p>{profile?.address}</p>
                </div>
                <div className={styles.itemContent}>
                  <FontAwesomeIcon icon="phone" style={{ fontSize: "16px" }} />
                  <p>{profile?.phone}</p>
                </div>
                <div className={styles.itemContent}>
                  <FontAwesomeIcon icon="envelope" style={{ fontSize: "16px" }} />
                  <p>{profile?.email}</p>
                </div>
                <div className={styles.itemContent}>
                  <FontAwesomeIcon icon="fire" style={{ fontSize: "16px" }} />
                  <p>{profile?.web}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default ExcelCard;
