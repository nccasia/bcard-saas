import "react-toastify/dist/ReactToastify.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Fab from "@mui/material/Fab";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { getNameCard } from "../../api/profile/apiProfile";
import Header from "../../components/home/Header";
import QrCode from "../../components/QrCode";
import ExcelCard from "../../components/users/ExcelCard";
import styles from "../../styles/profile.module.css";

function Name() {
  const [profile, setProfile] = React.useState<any>();
  const router = useRouter();
  const { name } = router.query;

  React.useEffect(() => {
    if (name) {
      getNameCard(String(name)).then((main) => setProfile(main));
    }
  }, [name]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const link = baseUrl + "/view/";
  //console.log(profile);
  const [open, setOpen] = React.useState(false);
  return (
    <div
      style={{
        position: "relative",
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
        }}
      >
        {profile && (
          <div className={styles.container}>
            <div className={styles.divCard}>
              {open && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
              {!open && <QrCode url={link + name} />}
            </div>
          </div>
        )}
        {!profile && (
          <p style={{ marginTop: "100px" }}>
            If you don't have a card, please contact the administrator!
          </p>
        )}
      </div>
      <div className={styles.iconSwitch}>
        <Fab onClick={() => setOpen(!open)} sx={{ width: "45px", height: "45px" }}>
          {open && <QrCodeScannerIcon sx={{ color: "#f44336" }} />}
          {!open && <ContactEmergencyIcon sx={{ color: "#f44336" }} />}
        </Fab>
      </div>
    </div>
  );
}

export default Name;
