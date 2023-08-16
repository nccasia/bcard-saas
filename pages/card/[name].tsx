import "react-toastify/dist/ReactToastify.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Fab from "@mui/material/Fab";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { getCardTrue } from "../../api/admin/apiCard";
import { getNameCard } from "../../api/admin/apiProfile";
import Header from "../../components/home/Header";
// import ExcelCard from "../../components/users/ExcelCard";
import KonvaCardView from "../../components/konvacard/KonvaCardView";
import QrCode from "../../components/QrCode";
import styles from "../../styles/profile.module.css";

function Name() {
  const [profile, setProfile] = React.useState<any>({});
  const router = useRouter();
  const { name } = router.query;
  const [isProfileSet, setIsProfileSet] = React.useState(false);
  const [data, setData] = React.useState<any>([]);
  React.useEffect(() => {
    const changeData = async () => {
      if (name) {
        await getNameCard(String(name)).then((main) => setProfile(main));
        setIsProfileSet(true);
      }
    };

    const updateData = async () => {
      if (isProfileSet) {
        await getCardTrue().then((main: any) => {
          if (main.length === 1 && profile) {
            const list = main[0].card.map((main2: any) => {
              if (profile && profile[String(main2.id)] && main2.type === "text") {
                return { ...main2, style: { ...main2.style, text: profile[String(main2.id)] } };
              } else {
                return main2;
              }
            });
            setData(list);
          }
        });
      }
    };

    changeData();
    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProfileSet]);
  //console.log(data);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const link = baseUrl + "/view/";
  const [open, setOpen] = React.useState(false);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Head>
        <title>Business Card App</title>
      </Head>
      <Header />
      <div
        style={{
          textAlign: "center",
          padding: "10vh 0",
          position: "relative",
          height: "calc(100vh - 80px)",
        }}
      >
        {profile && (
          <div className={styles.container}>
            <div className={styles.divCard}>
              {/* {open && <ExcelCard profile={profile} params={{ exampe: "1" }} />} */}
              {open && (
                <div>
                  <KonvaCardView data={data} setData={setData} />
                </div>
              )}
              {!open && <QrCode url={link + name} />}
            </div>
          </div>
        )}
        {!profile && (
          <p style={{ marginTop: "100px" }}>
            If you don't have a card, please contact the administrator!
          </p>
        )}
        <div className={styles.iconSwitch}>
          <Fab onClick={() => setOpen(!open)} sx={{ width: "45px", height: "45px" }}>
            {open && <QrCodeScannerIcon sx={{ color: "#f44336" }} />}
            {!open && <ContactEmergencyIcon sx={{ color: "#f44336" }} />}
          </Fab>
        </div>
      </div>
    </div>
  );
}

export default Name;
