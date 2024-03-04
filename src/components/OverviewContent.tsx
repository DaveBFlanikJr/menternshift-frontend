import styled from "styled-components";

const OverviewWrapper = styled.div`
  padding: 20px.;
`;

const Paragraph = styled.p`
  font-family: "Lato", san-serif;
  font-weight: 600;
  font-size: 16px;
  margin-right: 280px;
`;

const OverviewContent: React.FC = () => {
  return (
    <OverviewWrapper>
      <Paragraph>
        Hi, I'm Jane, currently working as a Lead Designer at ProGuidance. With 10 years of experience in Product Design, I'm here to offer guidance
        and insights to help you excel in your career.
      </Paragraph>
    </OverviewWrapper>
  );
};

export default OverviewContent;
