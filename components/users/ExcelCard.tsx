/* eslint-disable react/no-children-prop */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import logo_content from "../../public/logo_content.png";
// import Image from "next/image";
// import logo_content from "../../public/logo_content.png";
// import logoncc from "../../public/logoncc.png";
import styles from "../../styles/profile.module.css";

function ExcelCard({ profile, params }: any) {
  //console.log(profile);
  // const [isHidden, setIsHidden] =React.useState(true);
  // const toggle = () => setIsHidden(!isHidden);
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
              {/* <div className={styles.headCard1}>
                <div className={styles.headContent}>
                  <Image
                    src={logoncc}
                    alt="logo"
                    width={100}
                    height={100}
                    className={styles.img2}
                  />
                  <p className={styles.text}>{profile?.company}</p>
                </div>
              </div>
              <br /> */}
              <div className={styles.mainCard1}>
                <div className={styles.contenCard}>
                  <div className={styles.cardImage}>
                    <div className={styles.image}>
                      <Image
                        src={logo_content}
                        alt="logo"
                        // width="100%"
                        // height="35.7%"
                        layout="responsive"
                        style={{ objectFit: "contain" }}
                      />
                      {/* <img src={require("../../public/logo_content.png")} alt="" /> */}
                    </div>
                    {/* <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ color: "red", fontSize: "30px" }}>ncc</p>
                    </div> */}
                    {/* <img src={profile?.logo} alt="hello" className={styles.img1} /> */}
                  </div>
                </div>
                <div className={styles.contentCard1}>
                  <div className={styles.title1}>
                    <h1 className={styles.headingText}>{profile?.Name}</h1>
                    <p className={styles.position}>{profile?.Title}</p>
                  </div>
                  {/* <p>{profile.position}</p> */}
                  <div className={styles.itemContent}>
                    <FontAwesomeIcon
                      icon="envelope"
                      className={styles.icon}
                      // style={{ fontSize: "16px", color: "rgb(157 155 155)" }}
                    />
                    <p className={styles.text1}>{profile?.Email}</p>
                  </div>
                  <div className={styles.itemContent}>
                    <FontAwesomeIcon icon="phone" className={styles.icon} />
                    <p className={styles.text1}>{profile?.Phone}</p>
                  </div>
                  <div className={styles.itemContent}>
                    <FontAwesomeIcon icon="globe" className={styles.icon} />
                    <p className={styles.text1}>
                      <Link href="https://ncc.asia/" target="_blank">
                        https://www.ncc.asia
                      </Link>
                    </p>
                  </div>
                  {/* <div className={styles.itemContent}>
                    <FontAwesomeIcon icon="location-dot" className={styles.icon} />
                    <p className={styles.text1} style={{ lineHeight: "20px" }}>
                      {profile?.address}
                    </p>
                  </div> */}
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
