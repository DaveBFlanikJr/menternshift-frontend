import styled from "styled-components";

const AccountSettingsCardContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  margin: 20px;
  width: 50vw;
  color: #4b5563;
  font-size: 14px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  height: 7vh;
  max-width: 30vw;
`;

const AvailabilityForProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 5vw;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 5vw;
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 10vw;
`;

const AvailabilityForProjectsButton = styled.button`
  background-color: #e57a17;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  align-self: start;
  font-size: 14px;
  font-weight: 600;
  margin-left: 30px;
`;

const AccountSettingsCard: React.FC<{ availabilityForProjects: boolean; email: string; password: string }> = ({
  availabilityForProjects,
  email,
  password,
}) => {
  return (
    <AccountSettingsCardContainer>
      <Container>
        <AvailabilityForProjectsContainer>
          Available for projects
          <AvailabilityForProjectsButton>Availability Button{availabilityForProjects}</AvailabilityForProjectsButton>
        </AvailabilityForProjectsContainer>
      </Container>

      <Container>
        <EmailContainer>Email address</EmailContainer>
        <EmailContainer>{email}</EmailContainer>
      </Container>

      <Container>
        <PasswordContainer>Password</PasswordContainer>
        <PasswordContainer>{password}</PasswordContainer>
      </Container>
    </AccountSettingsCardContainer>
  );
};

export default AccountSettingsCard;
