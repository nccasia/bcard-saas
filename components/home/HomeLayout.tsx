// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
// import Link from "next/link";
import React from "react";

import Header from "../../components/home/Header";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { menuAdmin } from "../../components/home/menuIndex";
//import styles from "../../styles/homelayout.module.css";
import Sidebar from "../home/Sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [isHidden, setIsHidden] = React.useState(false);
  return (
    <Grid container sx={{ position: "relative" }}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Header type="admin" isHidden={isHidden} setIsHidden={setIsHidden} isDarkMode={null} />
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{
          display: isHidden ? "block" : { xs: "none", sm: "none", md: "none", lg: "block" },
          border: "0.5px dotted gray",
          position: "fixed",
          zIndex: isHidden ? 100 : 10,
          width: "300px",
          height: "calc(100% - 80px)",
          top: "80px",
          left: 0,
          backgroundColor: "white",
        }}
      >
        <Sidebar />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} sx={{ marginLeft: { lg: "300px" } }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default HomeLayout;
