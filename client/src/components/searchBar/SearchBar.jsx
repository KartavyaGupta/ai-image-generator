// src/components/searchBar/SearchBar.jsx
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarContainer = styled.div`
  max-width: 550px;
  width: 90%;
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 90};
  border-radius: 8px;
  color: white;
  background: ${({ theme }) => theme.background};
`;

export default function SearchBar({ search, handleChange }) {
  return (
    <SearchBarContainer>
      <SearchIcon />
      <input
        type="text"
        placeholder="search with prompt or name"
        value={search}
        onChange={handleChange}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          backgroundColor: "inherit",
          color: "white",
          fontSize: "16px",
        }}
      />
    </SearchBarContainer>
  );
}
