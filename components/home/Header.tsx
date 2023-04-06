/* eslint-disable @typescript-eslint/no-unused-vars */
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Fab from "@mui/material/Fab";
import Image from "next/image";
import { getSession } from "next-auth/react";
import React from "react";
import styled from "styled-components";

import logo from "../../public/logo.png";
import styles from "../../styles/header.module.css";
// import Login from "../login/Login";
// import Logout from "../login/Logout";
// import Signup from "../login/Signup";

const SelectBackgroundColorNav = styled.div`
  background-color: white;
  color: white;
  cursor: pointer;
  border-radius: 50%;
`;

function Header({ open, setOpen }: any) {
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
        <div className={styles.title}>Card-visit</div>
      </div>
      <div className={styles.headeRight}>
        <SelectBackgroundColorNav>
          <Fab onClick={() => setOpen(!open)}>
            {open && <QrCodeScannerIcon sx={{ color: "#f44336" }} />}
            {!open && <ContactEmergencyIcon sx={{ color: "#f44336" }} />}
          </Fab>
        </SelectBackgroundColorNav>
      </div>
    </div>
  );
}
export default Header;
