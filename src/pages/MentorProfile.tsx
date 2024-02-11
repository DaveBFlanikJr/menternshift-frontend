import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import ProfileCard from "../components/ProfileCardContainer";
import userprofileimg from "../assets/userprofileimg.svg" // Placeholder image from assets. Image should be fetched from backend
import styled from "styled-components";

const MainContents = styled.main`
  display: flex;
`;

const SideMenuContainer = styled.div`
  position: relative;
  width: 25%;
  float: left;
  height: 100%;
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
          <ProfileCard
          imageUrl={userprofileimg} // Image url should come from a fetch req to backend
          name={"Jane Doe"} // Name should should come from a fetch req to backend
          title={"Lead UX Designer at ProGuidance"} // Title should come from a fetch req to backend
          />
      </HeaderContainer>
    </MainContents>
  );
};

export default MentorProfile;
