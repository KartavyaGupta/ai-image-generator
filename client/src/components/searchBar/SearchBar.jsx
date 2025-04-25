import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
const SearchBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.text_secondary + 90};
  color: white;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  gap: 6px;
  align-items: center;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon />
      <input
        type="text"
        name=""
        id=""
        style={{
          border: "none",
          outline: "none",
          flex: 1,
          backgroundColor: "inherit",
          color: "white",
          fontSize: "16px",
        }}
        placeholder="search with prompt or name"
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
