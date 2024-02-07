import React from "react";
import menternshiftlogo from "../assets/menternshiflogo.svg";

const SideMenu: React.FC = () => {
  return (
    <aside>
      <div>
        <h1>
          <img src={menternshiftlogo} alt="Menternshift Logo" />
        </h1>
        <li>Profile</li>
        <li>My Mentors</li>
        <li>Projects</li>
      </div>
    </aside>
  );
};

export default SideMenu;
