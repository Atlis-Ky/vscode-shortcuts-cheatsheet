import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => (
  <input
    className="searchbar"
    type="text"
    placeholder="Search shortcuts..."
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
