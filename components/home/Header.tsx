import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/logo.png"
import styles from "../../styles/header.module.css"
import  Login from "../login/Login"

const SelectBackgroundColorNav = styled.div`
  color: white;
  cursor: pointer;
`;

const Header = () => {
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
            <Login/>
        </SelectBackgroundColorNav>
      </div>
    </div>
  );
};

export default Header;
