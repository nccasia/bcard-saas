import React from 'react';
import Link from 'next/link';
import Login from "../login/Login"
import {menuAdmin} from "../../components/home/menuIndex"
const HomeLayout = ({ children}: { children: React.ReactNode}) => {


  return (
    <div>
      <div
        style={{
          border:"1px dotted gray",
          height: "10vh",
        }}
      >
        <Login/>
      </div>
      <div
        style={{
            display:"flex",
        }}
      >
        <nav
          style={{
            border:"1px dotted gray",
            width:"25%",
            height:"90vh",
          }}
        >
          <ul>
            <li>
                <Link href="/users/profile">Profile</Link>
            </li>
            <li>
                <Link href="/users/card">Card</Link>
            </li>
            <li>
                <Link href="/users/text">Text</Link>
            </li>
          </ul>
        </nav>
        
        <main>{children}</main>
      </div>
    </div>
  );
};

export default HomeLayout;
