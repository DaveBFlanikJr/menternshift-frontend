import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import ProfileCard from "../components/ProfileCardContainer";
import userprofileimg from "../assets/userprofileimg.svg"; // Placeholder image from assets. Image should be fetched from backend
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
`;

const SideMenuContainer = styled.div`
  width: 25%;
  height: 100vh;
  background-color: #fbfbfb;
`;

const ContentContainer = styled.div`
  width: 75%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column; // Stack header and profile card vertically
`;

const HeaderContainer = styled.div`
  background-color: #ffffff;
`;

const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align the profile card to the top
  padding-left: 20px;
  margin-top: 20px;
`;

const MentorProfile: React.FC = () => {
  return (
    <LayoutContainer>
      <SideMenuContainer>
        <SideMenu />
      </SideMenuContainer>

      <ContentContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <ProfileCardContainer>
          <ProfileCard
            imageUrl={userprofileimg} // Image url should come from a fetch req to backend
            name={"Jane Doe"} // Name should should come from a fetch req to backend
            title={"Lead UX Designer at ProGuidance"} // Title should come from a fetch req to backend
          />
        </ProfileCardContainer>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default MentorProfile;
