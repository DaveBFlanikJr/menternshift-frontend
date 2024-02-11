import styled from "styled-components";

const ProfileCardContainer = styled.div`
  background-color: #FFFFFF; /* Light grey background */
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 20px;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 184px; // Width of the profile image
  height: 184px; // Height of the profile image
  margin-right: 20px; // Space between image and text
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const UploadIcon = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  bottom: -3px; // Increase to move the icon further down, decrease to move it up
  right: 8px; // Increase to move the icon further right, decrease to move it left
  cursor: pointer;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Ensure it fills the available space to align the button right */
`;

const ProfileName = styled.h3`
  margin: 0;
  color: #1F2937; /* Dark grey color for text */
  font-size: 32px;
  font-weight: 700;
`;

const ProfileTitle = styled.p`
  color: #4B5563; /* Slightly lighter grey for the subtitle */
  font-size: 18px; /* Adjust as needed */
  font-weight: 600;
`;

const ConnectButton = styled.button`
  background-color: #E57A17;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-weight: bold;
  margin-top: 10px; /* Space above the button */
  cursor: pointer;
  align-self: start;
  font-size: 14px;
  font-weight: 600;
`;

const ProfileCard: React.FC<{ imageUrl: string; name: string; title: string }> = ({
  imageUrl,
  name,
  title,
}) => {
  return (
    <ProfileCardContainer>
      <ProfileImageContainer>
        <ProfileImage src={imageUrl} alt={`${name}'s profile`} />
        <UploadIcon src="src/assets/uploaduserimgicon.svg" alt="Upload" />
      </ProfileImageContainer>
      <ProfileInfo>
        <ProfileName>{name}</ProfileName>
        <ProfileTitle>{title}</ProfileTitle>
        <ConnectButton>Connect</ConnectButton>
      </ProfileInfo>
    </ProfileCardContainer>
  );
};

export default ProfileCard;