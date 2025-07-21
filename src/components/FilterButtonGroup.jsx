import React from "react";
import FilterButton from "./FilterButton";
import "../styles/FilterButton.css";

// Import the styling information for each group
import { groupStyles } from "./ShortcutTemplates";

const FilterButtonGroup = ({ activeFilters, onFilterChange }) => {
  // Get all the group names from the groupStyles
  const groups = Object.keys(groupStyles);

  const handleFilterClick = (group) => {
    onFilterChange(group);
  };

  return (
    <div className="filter-buttons-container">
      {groups.map((group) => (
        <FilterButton
          key={group}
          group={group}
          isActive={activeFilters.includes(group)}
          onClick={handleFilterClick}
          backgroundColor={groupStyles[group].headerBg}
        />
      ))}
    </div>
  );
};

export default FilterButtonGroup;
