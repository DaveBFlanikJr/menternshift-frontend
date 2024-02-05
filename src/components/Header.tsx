import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiBell, FiUser } from 'react-icons/fi';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 20px;
  background-color: #fff;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-grow: 1;
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
`;

const SearchInput = styled.input`
  padding: 8px 8px 8px 35px; /* left padding to make room for the icon */
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%; /* Full width of the parent container */
  box-sizing: border-box; /* To include padding in the width */
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Icon = styled.div`
  margin-left: 20px;
  cursor: pointer;
  font-size: 24px; /* Adjust icon size as needed */
`;

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement the search logic here
    console.log('Search by', searchTerm);
  };

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Search by"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
      </SearchContainer>
      <IconsContainer>
        <Icon as={FiBell} />
        <Icon as={FiUser} />
        {/* You can add more icons as needed */}
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
