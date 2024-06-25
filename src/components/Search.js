import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
`;

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) {
      onSearch(city);
    }
  };

  return (
    <SearchContainer>
      <Input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
};

export default Search;
