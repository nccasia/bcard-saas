// import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
// import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
// import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Menu } from "@mui/material";
// import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useSession } from "next-auth/react";
// import { getSession } from "next-auth/react";
import React from "react";

// import styled from "styled-components";
import logo from "../../public/logo.png";
import styles from "../../styles/header.module.css";
import Logout from "../login/Logout";
// import Login from "../login/Login";
// import Logout from "../login/Logout";
// import Signup from "../login/Signup";

// const SelectBackgroundColorNav = styled.div`
//   background-color: white;
//   color: white;
//   cursor: pointer;
//   border-radius: 50%;
// `;
interface Head {
  type?: string;
  isHidden?: boolean;
  setIsHidden?: any;
}

function Header({ type, isHidden, setIsHidden }: Head) {
  const { data: session, status }: any = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //console.log(status);

  return (
    <div className={styles.container}>
      <div className={styles.headerLetf}>
        <div style={{ display: "flex", gap: 5 }}>
          <Grid sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none" } }}>
            {type === "admin" && (
              <button onClick={() => setIsHidden(!isHidden)}>
                <MenuIcon sx={{ color: "white", fontSize: 30 }} />
              </button>
            )}
          </Grid>
          <Image src={logo} alt="logo" width={30} height={30} />
        </div>
        <div className={styles.title}>Business Card</div>
      </div>
      <div className={styles.headeRight}>
        {session?.user?.image && status !== "loading" && (
          <div>
            <button onClick={handleMenu}>
              <img
                src={session.user.image}
                alt="avatar"
                width={40}
                height={40}
                style={{ borderRadius: "50%", opacity: anchorEl ? 0.7 : 1 }}
              />
            </button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <div
                style={{
                  padding: "0 10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  justifyContent: "center",
                }}
              >
                <p>{session?.user?.name}</p>
                <button style={{ borderTop: "1px solid #d3d3d3" }}>
                  <Logout />
                </button>
              </div>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
