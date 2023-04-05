/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { getSession } from "next-auth/react";
import React from "react";

import logo from "../../public/logo.png";
import styles from "../../styles/header.module.css";
// import styled from "styled-components";

// import Login from "../login/Login";
// import Logout from "../login/Logout";
// import Signup from "../login/Signup";

// const SelectBackgroundColorNav = styled.div`
//   color: white;
//   cursor: pointer;
// `;

const Header = () => {
  const [session, setSession] = React.useState<any>();
  React.useEffect(() => {
    getSession().then((data) => setSession(data));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.headerLetf}>
        <div>
          <Image src={logo} alt="logo" width={30} height={30} />
        </div>
        <div className={styles.title}>Card-visit</div>
      </div>
      <div className={styles.headeRight}>
        {/* <SelectBackgroundColorNav>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            {!session && <Login />}
            {!session && <Signup />}
          </div>
          {session && <Logout />}
        </SelectBackgroundColorNav> */}
      </div>
    </div>
  );
};

export default Header;
