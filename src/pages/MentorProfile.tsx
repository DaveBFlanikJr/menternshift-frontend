import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import styled from "styled-components";

const MainContents = styled.main`
  display: flex;
`;

const SideMenuContainer = styled.div`
  position: relative;
  width: 20%;
  float: left;
  height: 100%;
  padding: 40px, 24px, 40px;
  background-color: #fbfbfb;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 75%;
  float: left;
  height: 100%;
  background-color: #ffffff;
`;

const MentorProfile: React.FC = () => {
  return (
    <MainContents>
      <SideMenuContainer>
        <SideMenu />
      </SideMenuContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
    </MainContents>
  );
};

export default MentorProfile;
