import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/logo.png"
import styles from "../../styles/header.module.css"
import  Login from "../login/Login"
import  Logout from "../login/Logout"
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";
import Signup from "../login/Signup";

const SelectBackgroundColorNav = styled.div`
  color: white;
  cursor: pointer;
`;

const Header = () => {
  const [session, setSession]=React.useState<any>()
  React.useEffect(()=>{
    getSession().then(data=>setSession(data));
  },[])
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
           <div style={{display: "flex", gap: "5px", alignItems: "center"}}>
            {!session && <Login/>}
           {!session && <Signup/>}
           </div>
            {session && <Logout/>}
        </SelectBackgroundColorNav>
      </div>
    </div>
  );
};

export default Header;
