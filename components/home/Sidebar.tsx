import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
// import bgrSidebar from "../../asset/images/bgrSidebar.jpg";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StartIcon from "@mui/icons-material/Start";
import HomeIcon from "@mui/icons-material/Home";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AddIcon from "@mui/icons-material/Add";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import Link from "next/link";
import styles from "../../styles/sidebar.module.css"
import user from "../../public/user.png"
import Image from "next/image";
import { useSession,SessionProvider, signOut } from "next-auth/react"


const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
 
  const handleClick = () => {
    setOpen(!open);
  };

  const [btn, setBtn] = useState(false);
  const [check, setCheck] = useState(false);
  const handleClickBtn = () => {
    setCheck(true);
    setBtn((prev) => !prev);
  };

  //const [session, setSession]=React.useState<any>();
  const { data: session, status } = useSession()
  console.log(session)
  return (
    
    <div  className={styles.container}>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div className={styles.info}>
          {session?.user?.image && 
           <img src={session.user.image} alt="avatar" width="50px" height="50px" style={{borderRadius:"50%"}} />
          }
            <div>
              <div className={styles.title}>{session?.user?.name}</div>
              <div className={styles.title}>{session?.user?.email}</div>
            </div>
          </div>
        </div>
        <div >
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
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
            ></ListSubheader>
          }
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
