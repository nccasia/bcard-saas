// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MenuIcon from "@mui/icons-material/Menu";
// import Link from "next/link";
import React from "react";

import Header from "../../components/home/Header";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { menuAdmin } from "../../components/home/menuIndex";
import styles from "../../styles/homelayout.module.css";
import Sidebar from "../home/Sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [isHidden, setIsHidden] = React.useState(true);
  const toggle = () => setIsHidden(!isHidden);
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className={styles.sidebarMobile}>
        {isHidden ? null : (
          <div style={{ width: "50%" }}>
            <Sidebar />
          </div>
        )}
        <button
          className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
          onClick={toggle}
          style={{ marginTop: "90px", position: "absolute", right: "0" }}
        >
          <MenuIcon />
        </button>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
