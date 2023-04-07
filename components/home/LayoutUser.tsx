import React from "react";

//import Header from "../../components/home/Header";
const LayoutUser = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Header open={open} setOpen={setOpen}/> */}
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
