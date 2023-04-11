/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
// import bgrSidebar from "../../asset/images/bgrSidebar.jpg";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StartIcon from "@mui/icons-material/Start";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

import styles from "../../styles/sidebar.module.css";

const Sidebar = () => {
  const [btn, setBtn] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [check, setCheck] = useState(false);
  const handleClickBtn = () => {
    setCheck(true);
    setBtn((prev) => !prev);
  };
  const { data: session } = useSession();
  console.log(session?.user?.image);
  return (
    <div className={styles.container}>
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
          <div className={styles.logout} onClick={handleClickBtn}>
            <KeyboardArrowDownIcon />
          </div>
          {btn ? (
            <div className={styles.buttonLogout} onClick={() => signOut()}>
              <div>
                <StartIcon />
                Logout
              </div>
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
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home Page" />
          </ListItemButton>
          <Link href="/admin/admin">
            <ListItemButton>
              <ListItemIcon>
                <GroupWorkIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItemButton>
          </Link>
          <Link href="/admin/users">
            <ListItemButton>
              <ListItemIcon>
                <AccessAlarmIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </Link>
          <Link href="/admin/card">
            <ListItemButton>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Card" />
            </ListItemButton>
          </Link>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
