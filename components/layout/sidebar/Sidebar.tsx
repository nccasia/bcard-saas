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
import styles from "../../../styles/sidebar.module.css"
import user from "../../../public/user.png"
import Image from "next/image";
import { signOut } from "next-auth/react";
// import Content from '../content/conten';
// import { Link, useNavigate } from "react-router-dom";
// import { removeAccessToken } from "../../utils/LocalStorage";
// import { useDispatch } from "react-redux";
// import { removeAccessToken } from "../../utils/LocalStorage";
// import authSlice from "../../redux/reducers/authReducer";


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


const Strong = styled.strong`
  color: red;
`;

const Lists = styled.div`
  margin-top: 27px;
  height: 200px;
`;



interface IProps{
  setopenPage : Dispatch<SetStateAction<string>>
  profile : any
}

const Sidebar = (props: IProps) => {
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
 console.log(props.profile,'kkkklll')

  return (
    <div  className={styles.container}>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div className={styles.info}>
          <Image src={user} 
                    alt="logo" width={50} height={50} />
            <div>
              {/* <div className={styles.title}>{props.profile.name}</div>
              <div className={styles.title}>admin.ncc@ncc.asia</div> */}
            </div>
          </div>
        </div>
        <div >
          <div className={styles.logout} onClick={handleClickBtn}>
            <KeyboardArrowDownIcon />
          </div>
          {btn ? (
            <ButtonLogout onClick={() => signOut()}>
              <div>
                <StartIcon />
                Logout
              </div>
            </ButtonLogout>
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
          {/* <StyleLink to="/home"> */}
            <ListItemButton onClick= {()=>{
                  props.setopenPage('OpenProfile')
                
                }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
            
            <ListItemButton onClick= {()=>{
                  props.setopenPage('OpenAdmin')
                
                }}>
              <ListItemIcon>
                <GroupWorkIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItemButton>
          {/* </StyleLink> */}
          <ListItemButton onClick= {()=>{
                  props.setopenPage('OpenCard')
                
                }}>
            <ListItemIcon>
              <AccessAlarmIcon />
            </ListItemIcon>
            <ListItemText primary="Card" />
          </ListItemButton>
        </List>
      </Lists>
      <div className={styles.footerSidebar}>
        <div className={styles.contentFooter}>
          <div className={styles.p}>
            &2023 <Strong>Card.</Strong>
          </div>
          <div className={styles.p}>
            <b>Version</b> 4.3.0[20221608]
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
