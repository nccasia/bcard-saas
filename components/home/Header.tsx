/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Fab from "@mui/material/Fab";
import Image from "next/image";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../../public/logo.png";
import styles from "../../styles/header.module.css";
// import Login from "../login/Login";
// import Logout from "../login/Logout";
// import Signup from "../login/Signup";

const SelectBackgroundColorNav = styled.div`
  color: white;
  cursor: pointer;
`;

const Header = ({ open, setOpen }: any) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // const [session, setSession] = React.useState<any>();
  // React.useEffect(() => {
  //   getSession().then((data) => setSession(data));
  // }, []);

  return (
    mounted && (
      <div className={styles.container}>
        <div className={styles.headerLetf}>
          <div>
            <Image src={logo} alt="logo" width={30} height={30} />
          </div>
          <div className={styles.title}>Card-visit</div>
        </div>

        <div className={styles.headeRight}>
          {/* <SelectBackgroundColorNav> */}
          {/* <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            {!session && <Login />}
            {!session && <Signup />}
            </div> */}
          <Fab onClick={() => setOpen(!open)} sx={{ width: "45px", height: "45px" }}>
            {open ? (
              <QrCodeScannerIcon style={{ width: "50px" }} />
            ) : (
              <FontAwesomeIcon
                icon="address-card"
                style={{ fontSize: "20px", color: "#ff0d00a8" }}
              />
            )}
          </Fab>
          {/* </SelectBackgroundColorNav> */}
        </div>
      </div>
    )
  );
};

export default Header;
