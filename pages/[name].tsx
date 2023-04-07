// /* eslint-disable react/no-children-prop */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
// import Fab from "@mui/material/Fab";
import { useRouter } from "next/router";
import QRCode from "qrcode-generator";
import React from "react";

import { getNameCard } from "../api/profile/apiProfile";
import Header from "../components/home/Header";
import ExcelCard from "../components/users/ExcelCard";
import styles from "../styles/profile.module.css";

function Name() {
  const [profile, setProfile] = React.useState<any>();
  const router = useRouter();
  const { name } = router.query;
  console.log(name);
  React.useEffect(() => {
    if (name) {
      getNameCard("/api/test/" + name).then((main) => {
        if (main.length === 1) {
          main.map((item: any) => {
            setProfile({ ...item });
          });
        }
      });
    }
  }, [name]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const link = baseUrl + "/view/";
  const qrCode = (index: string) => {
    const qr = QRCode(0, "H");
    qr.addData(index);
    qr.make();
    return qr;
  };

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div
        style={{
          // height: "100vh",
          textAlign: "center",
          // overflowX: "auto",
          // padding: 10,
        }}
      >
        {profile && (
          <div className={styles.container}>
            <div className={styles.divCard}>
              {open && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
              {!open && (
                <img
                  src={qrCode(link + name).createDataURL()}
                  alt="QR code"
                  width="250px"
                  height="250px"
                />
              )}
            </div>
          </div>
        )}
        {!profile && <p>No...</p>}
      </div>
    </>
  );
}

export default Name;
