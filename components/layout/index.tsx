import React from "react";
import styled from "styled-components"
import Header from "./header/Header";
import { MainView } from "./mainview/MainView";
import Sidebar from "./sidebar/Sidebar";

const MainContent = styled.div`
  display: flex;
`;

const Layout= () => {
  return (
    <div>
      <Header />
      <MainContent>
        <Sidebar />
        <MainView />
      </MainContent>
    </div>
  );
};

export default Layout;