import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ShortcutList from "./components/ShortcutList";
import shortcutData from "./components/ShortcutData";
import "./styles/Palettes.css";
import ContextCard from "./components/ContextCard";
import FilterButtonGroup from "./components/FilterButtonGroup";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterChange = (group) => {
    setActiveFilters((prevFilters) => {
      // If the group is already in the filters, remove it
      if (prevFilters.includes(group)) {
        return prevFilters.filter((filter) => filter !== group);
      }
      // Otherwise add it to the filters
      else {
        return [...prevFilters, group];
      }
    });
  };

  // Filter shortcuts by search text AND group filters
  const filteredShortcuts = shortcutData.filter((shortcut) => {
    const matchesSearch = shortcut.shortcut
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesGroupFilter =
      activeFilters.length === 0 || activeFilters.includes(shortcut.group);
    return matchesSearch && matchesGroupFilter;
  });

  return (
    <>
      <NavBar onSearch={setSearch} />
      <ContextCard />
      <FilterButtonGroup
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
      />
      <ShortcutList shortcuts={filteredShortcuts} />
      <Footer />
    </>
  );
}

export default App;
