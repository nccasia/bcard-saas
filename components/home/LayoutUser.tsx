import React from "react";

import Header from "../../components/home/Header";
const LayoutUser = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div
        style={{
          padding: "5vh 0",
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LayoutUser;
