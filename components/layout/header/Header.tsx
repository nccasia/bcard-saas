import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../../public/logo.png"
import styles from "../../../styles/header.module.css"

const HeaderContainer = styled.div`
  background: #f44336;
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  /* background-color: red; */
`;
const Header_Lefl = styled.div`
  display: flex;
  padding: 5px;
`;
const Header_Logo = styled.div`
  img {
    height: 30px;
    width: 30px;
  }
`;
const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
`;
const HeaderRight = styled.div`
  display: flex;
  margin-right: 15px;
`;
const SelectLangueNav = styled.div`
  display: flex;
`;

const IconLangue = styled.div`
  color: white;
  padding-right: 5px;
`;
const TextLangue = styled.div`
  color: white;
  font-size: 15px;
`;

const IconSelect = styled.div`
  color: white;
`;
const SelectBackgroundColorNav = styled.div`
  color: white;
  cursor: pointer;
`;

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerLetf}>
        <Header_Logo>
        <Image src={logo} 
                    alt="logo" width={30} height={30} />
        </Header_Logo>
        <div className={styles.title}>Card-visit</div>
      </div>
      <div className={styles.headeRight}>
        <SelectLangueNav>
          <IconLangue>
            {/* <UploadFileRoundedIcon /> */}
          </IconLangue>
          <IconLangue>
            {/* <TextSnippetRoundedIcon /> */}
          </IconLangue>

          <TextLangue>English</TextLangue>
          <IconSelect>
            {/* <ArrowDropDownIcon /> */}
          </IconSelect>
        </SelectLangueNav>
        <SelectBackgroundColorNav>
          {/* <MoreVertIcon /> */}
        </SelectBackgroundColorNav>
      </div>
    </div>
  );
};

export default Header;
