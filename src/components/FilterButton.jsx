import React from "react";
import "../styles/FilterButton.css";

const FilterButton = ({ group, isActive, onClick, backgroundColor }) => {
  return (
    <button
      className={`filter-button ${isActive ? "active" : ""}`}
      onClick={() => onClick(group)}
      style={{
        backgroundColor: isActive ? backgroundColor : "transparent",
        borderColor: backgroundColor,
      }}
    >
      {group}
    </button>
  );
};

export default FilterButton;
