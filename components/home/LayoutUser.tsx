import React from 'react';
import Link from 'next/link';
import Login from "../login/Login"
import Logout from "../login/Logout"
import {menuAdmin} from "../../components/home/menuIndex";
import  Header from "../../components/home/Header";
import { MainView } from "../layout/mainview/MainView";
import Sidebar from "../layout/sidebar/Sidebar";
const LayoutUser = ({ children}: { children: React.ReactNode}) => {
  const [openPage,setOpenPage] = React.useState<string>('')
  return (
    <div>
      <Header/>
      <div
        style={{
            display:"flex",
            justifyContent:"center",
            padding:"100px",
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LayoutUser;

