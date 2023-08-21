import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
//import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StartIcon from "@mui/icons-material/Start";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

import styles from "../../styles/sidebar.module.css";
import Logout from "../login/Logout";

const Sidebar = () => {
  const [btn, setBtn] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [check, setCheck] = useState(false);
  const router = useRouter();
  const handleClickBtn = () => {
    setCheck(true);
    setBtn((prev) => !prev);
  };
  const { data: session } = useSession();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div>
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <div className={styles.info}>
              {session?.user?.image && (
                <img
                  src={session?.user?.image}
                  alt="avatar"
                  width="50px"
                  height="50px"
                  style={{ borderRadius: "50%" }}
                />
              )}
              <div>
                <div className={styles.title}>{session?.user?.name}</div>
                <div className={styles.title}>{session?.user?.email}</div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.logout} onClick={handleClickBtn} aria-hidden="true">
              <KeyboardArrowDownIcon />
            </div>
            {btn ? (
              <div className={styles.buttonLogout}>
                <StartIcon />
                <Logout />
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.lists}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={<ListSubheader component="div" id="nested-list-subheader"></ListSubheader>}
          >
            <Link href="/admin/users">
              <ListItemButton>
                <ListItemIcon>
                  <GroupAddIcon
                    sx={{ color: router.asPath === "/admin/users" ? "#ff000096" : "gray" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Users"
                  sx={{ color: router.asPath === "/admin/users" ? "#ff000096" : "gray" }}
                />
              </ListItemButton>
            </Link>
            <Link href="/admin/admin">
              <ListItemButton>
                <ListItemIcon>
                  <AdminPanelSettingsIcon
                    sx={{ color: router.asPath === "/admin/admin" ? "#ff000096" : "gray" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Admin"
                  sx={{ color: router.asPath === "/admin/admin" ? "#ff000096" : "gray" }}
                />
              </ListItemButton>
            </Link>
            {/* <Link href="/admin/card">
              <ListItemButton>
                <ListItemIcon>
                  <ContactEmergencyIcon
                    sx={{ color: router.asPath === "/admin/card" ? "#ff000096" : "gray" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Card"
                  sx={{ color: router.asPath === "/admin/card" ? "#ff000096" : "gray" }}
                />
              </ListItemButton>
            </Link> */}
          </List>
        </div>
      </div>
      <div className={styles.footer}>
        <Link href={"/card/" + session?.user?.email?.split("@")[0]}>
          <p>Go to {session?.user?.email?.split("@")[0]}</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
