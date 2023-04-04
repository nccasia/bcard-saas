// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";
import React from "react";

import Header from "../../components/home/Header";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { menuAdmin } from "../../components/home/menuIndex";
import Sidebar from "../home/Sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "20%",
          }}
        >
          <Sidebar />
        </div>
        <div
          style={{
            width: "80%",
            padding: "200px 20px",
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
