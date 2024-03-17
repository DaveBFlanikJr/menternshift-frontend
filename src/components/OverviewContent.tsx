import styled from "styled-components";
import Badge from "./Badge";

const OverviewWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 5rem;
`;

const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 20px;
  max-width: 522px;
`;

const Section = styled.div`
  display: flex;
  align-items: flex-start
  margin-bottom: 20px; // Spacing between each section
`;

const SectionTitle = styled.h3`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 14px;
  margin-right: 120px; // Adjust as needed
  color: #333;
  width: 100px;
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  flex-grow: 1;
  min-width: 0;
  max-width: 500px;
`;

const OverviewContent: React.FC = () => {
  return (
    <OverviewWrapper>
      <Paragraph>
        Hi, I'm Jane, currently working as a Lead Designer at ProGuidance. With 10 years of experience in Product Design, I'm here to offer guidance
        and insights to help you excel in your career.
      </Paragraph>
      <Section>
        <SectionTitle>Expertise</SectionTitle>
        <BadgeContainer>
          <Badge variant="expertise">UX Design</Badge>
          <Badge variant="expertise">Marketing</Badge>
          <Badge variant="expertise">Web Design</Badge>
        </BadgeContainer>
      </Section>

      <Section>
        <SectionTitle>Guidance with </SectionTitle>
        <BadgeContainer>
          <Badge variant="guidance">Interview Coaching</Badge>
          <Badge variant="guidance">Personal growth and development</Badge>
          <Badge variant="guidance">Skill Development</Badge>
          <Badge variant="guidance">CV review</Badge>
          <Badge variant="guidance">Project review</Badge>
          <Badge variant="guidance">+2</Badge>
        </BadgeContainer>
      </Section>

      <Section>
        <SectionTitle>Languages</SectionTitle>
        <BadgeContainer>
          <Badge variant="languages">English</Badge>
          <Badge variant="languages">Japanese</Badge>
        </BadgeContainer>
      </Section>

      <Section>
        <SectionTitle>Social platforms </SectionTitle>
      </Section>
    </OverviewWrapper>
  );
};

export default OverviewContent;
