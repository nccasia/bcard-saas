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
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react";
// import Content from '../content/conten';
// import { Link, useNavigate } from "react-router-dom";
// import { removeAccessToken } from "../../utils/LocalStorage";
// import { useDispatch } from "react-redux";
// import { removeAccessToken } from "../../utils/LocalStorage";
// import authSlice from "../../redux/reducers/authReducer";

const SidebarContainer = styled.div`
  width: 300px;
  height: 100%;
  margin-top: 100px;
  position: fixed;
  background-color: white;
  margin-top:80px;
`;
const Title = styled.div`
  color: #ffffff;
  font-size: 14px;
`;
const Logout = styled.div`
  div {
    display: flex;
    justify-content: flex-end;
    color: #ffffff;
    /* position: relative; */
    cursor: pointer;
  }
`;
const ButtonLogout = styled.div`
  display: flex;
  position: absolute;
  background: red;
  right: 0px;
  top: 90px;
  border: 1px solid;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
  :hover {
    background: #e9e9e9;
  }
`;

const StyleLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

const FooterSidebar = styled.div`
  /* margin-top: 308px; */
  display: flex;
  border-top: 1px solid #ccc;
  position: absolute;
  top: 538px;
`;
const Content_Footer = styled.div`
  margin-top: 30px;
  width: 300px;
  p {
    margin: 0;
    font-size: 14px;
    margin-left: 10px;
  }
  /* ul li{{
    list-style: none;
    font-size: 14px;
   
  }} */
`;
const Strong = styled.strong`
  color: red;
`;

const Lists = styled.div`
  margin-top: 27px;
  height: 200px;
`;



interface IProps{
  setopenPage : Dispatch<SetStateAction<string>>
}

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

  const [session, setSession]=React.useState<any>();
  React.useEffect(()=>{
    getSession().then(data=>setSession(data))
  },[]);
  
  return (
    <div  className={styles.container}>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div className={styles.info}>
          <img src={session?.user?.image} alt="avatar" width="50px" height="50px" style={{borderRadius:"50%"}} />
            <div>
              <Title>{session?.user?.name}</Title>
              <Title>{session?.user?.email}</Title>
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
      <Lists>
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
      </Lists>
    </div>
  );
};

export default Sidebar;
