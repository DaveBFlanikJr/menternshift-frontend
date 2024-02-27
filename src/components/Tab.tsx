import { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  margin-left: 40px;
`;
interface TabProps {
  active: boolean;
}

const Tab = styled.button<TabProps>`
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  background-color: #ffffff;
  font-weight: bold;
  ${({ active }) =>
    active &&
    `
        border-color: #e57a17;
    `}
`;

const ContentContainer = styled.div`
  margin-left: 40px;
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <TabContainer>
        <Tab active={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
          Overview
        </Tab>
        <Tab active={activeTab === "reviews"} onClick={() => setActiveTab("reviews")}>
          Reviews
        </Tab>
      </TabContainer>

      <ContentContainer>
        {activeTab === "overview" && <div>Overview content goes here</div>}
        {activeTab === "reviews" && <div>Reviews content goes here</div>}
      </ContentContainer>
    </>
  );
};

export default Tabs;
