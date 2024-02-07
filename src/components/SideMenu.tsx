import React from "react";
import menternshiftlogo from "../assets/menternshiflogo.svg";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";

const StyledAside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  list-style-type: none;
`;

const SytledLogo = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 10vh;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5vh;
`;

const Icon = styled.div`
  width: 24px; /* Adjust the icon size as needed */
  height: 24px;
  margin-right: 8px; /* Adjust margin as needed */
`;

const MenuItems = styled.a`
  text-decoration: none;
  color: black;
`;

const SideMenu: React.FC = () => {
  return (
    <StyledAside>
      <div>
        <SytledLogo>
          <img src={menternshiftlogo} alt="Menternshift Logo" />
        </SytledLogo>
        <ListItem>
          <Icon as={CgProfile} />
          <MenuItems href="https://www.figma.com/file/zYBRhihqhRvHDtyEiXtFwW/Design-Team-Space?type=design&node-id=1650-22366&mode=design&t=gKiNYye1t3A4P47t-0">
            Profile
          </MenuItems>
        </ListItem>
        <ListItem>
          <Icon as={IoPeopleCircleOutline} />
          <MenuItems href="https://www.google.com">My Mentors</MenuItems>
        </ListItem>
        <ListItem>
          <Icon as={GrProjects} />
          <MenuItems href="https://www.google.com">Projects</MenuItems>
        </ListItem>
      </div>
    </StyledAside>
  );
};

export default SideMenu;
