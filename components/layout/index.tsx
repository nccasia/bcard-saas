import React from "react";
import styled from "styled-components"
import Header from "./header/Header";
import { MainView } from "./mainview/MainView";
import Sidebar from "./sidebar/Sidebar";

const MainContent = styled.div`
  display: flex;
`;

const Layout= (profile:any) => {
  const [openPage,setOpenPage] = React.useState<string>('')
  return (
    <div>
      <Header />
      <div style={{display: 'flex',}}>
        <Sidebar setopenPage={setOpenPage} />
        <MainView TypePage= {openPage} profile={profile}/>
      </div>
    </div>
  );
};

export default Layout;