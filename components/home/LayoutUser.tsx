import React from 'react';
import Link from 'next/link';
import Login from "../login/Login"
import {menuAdmin} from "../../components/home/menuIndex";
import  Header from "../../components/home/Header";
const LayoutUser = ({ children}: { children: React.ReactNode}) => {
  const [openPage,setOpenPage] = React.useState<string>('')
  return (
    <div>
      <Header/>
      <div
        style={{
          border:"1px dotted gray",
          height: "13vh",
        }}
      >
        <Login/>
      </div>
      <div
        style={{
            display:"flex",
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LayoutUser;

