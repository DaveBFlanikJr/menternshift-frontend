import { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
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
  ${({ active }) =>
    active &&
    `
        border-color: #000;
        font-weight: bold;  
    `}
`;

const ContentContainer = styled.div`
  /* Styles for your tab content */
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
        {activeTab === 'overview' && <div>Overview content goes here</div>}
        {activeTab === 'reviews' && <div>Reviews content goes here</div>}
      </ContentContainer>
    </>
  );
};

export default Tabs