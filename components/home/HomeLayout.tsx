import React from 'react';
import Link from 'next/link';
import Login from "../login/Login"
import {menuAdmin} from "../../components/home/menuIndex";
import  Header from "../../components/home/Header";
import { MainView } from "../layout/mainview/MainView";
import Sidebar from "../home/Sidebar";

const HomeLayout = ({ children}: { children: React.ReactNode}) => {
  const [openPage,setOpenPage] = React.useState<string>('')
  return (
    <div>
      <Header/>
      <div
        style={{
          display:"flex",
        }}
      >
        <div
          style={{
            width:"20%",
          }}
        >
          <Sidebar/>
        </div>
        <div
            style={{
              width:"80%",
              padding:"50px 20px"
            }}
        >
            <main>
              {children}
            </main>
        </div>
       
      </div>
    </div>
  );
};

export default HomeLayout;
