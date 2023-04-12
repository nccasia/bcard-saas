import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Fab from "@mui/material/Fab";
import Image from "next/image";
// import { getSession } from "next-auth/react";
import React from "react";

// import styled from "styled-components";
import logo from "../../public/logo.png";
import styles from "../../styles/header.module.css";
// import Login from "../login/Login";
// import Logout from "../login/Logout";
// import Signup from "../login/Signup";

// const SelectBackgroundColorNav = styled.div`
//   background-color: white;
//   color: white;
//   cursor: pointer;
//   border-radius: 50%;
// `;

function HeaderCard({ open, setOpen }: any) {
  // const [session, setSession] = React.useState<any>();
  // React.useEffect(() => {
  //   getSession().then((data) => setSession(data));
  // }, []);
  return (
    <div className={styles.container}>
      <div className={styles.headerLetf}>
        <div>
          <Image src={logo} alt="logo" width={30} height={30} />
        </div>
        <div className={styles.title}>Business Card</div>
      </div>
      <div className={styles.headeRight}>
        <div style={{ background: "#fff", borderRadius: "50%" }}>
          <Fab onClick={() => setOpen(!open)} sx={{ width: "40px", height: "40px" }}>
            {open && <QrCodeScannerIcon sx={{ color: "#f44336" }} />}
            {!open && <ContactEmergencyIcon sx={{ color: "#f44336" }} />}
          </Fab>
        </div>
      </div>
    </div>
  );
}
export default HeaderCard;