import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Fab from "@mui/material/Fab";
import QRCode from "qrcode-generator";
import React from "react";

import { getNameCard } from "../api/profile/apiProfile";
import ExcelCard from "../components/users/ExcelCard";

function Name({ params }: any) {
  const [profile, setProfile] = React.useState<any>();
  React.useEffect(() => {
    if (params?.name) {
      getNameCard("/api/test/" + params?.name).then((main) => {
        if (main.length === 1) {
          main.map((item: any) => {
            setProfile({ ...item });
          });
        }
      });
    }
  }, [params?.name]);
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
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        overflowX: "auto",
        padding: 10,
      }}
    >
      {profile && (
        <div
          style={{
            width: "100%",
            position: "relative",
            height: "100vh",
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 30,
              right: 30,
              zIndex: 10,
            }}
          >
            {/* <Switch  
                            color="warning" 
                            onChange={()=>setOpen(!open)}

                        /> */}
            <Fab onClick={() => setOpen(!open)}>
              {open && <QrCodeScannerIcon />}
              {!open && (
                <FontAwesomeIcon
                  icon="address-card"
                  style={{ fontSize: "25px", color: "#ff0d00a8" }}
                />
              )}
            </Fab>
          </div>
          <div
            style={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            {open && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
            {!open && (
              <img
                src={qrCode(link + params?.name).createDataURL()}
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
  );
}

export default Name;

export async function getStaticProps({ params }: any) {
  return {
    props: { params },
  };
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
