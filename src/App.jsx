import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ShortcutList from "./components/ShortcutList";
import shortcutData from "./components/ShortcutData";
import "./styles/Palettes.css";

function App() {
  const [search, setSearch] = useState("");
  const filteredShortcuts = shortcutData.filter((s) =>
    s.shortcut.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar onSearch={setSearch} />
      <ShortcutList shortcuts={filteredShortcuts} />
    </>
  );
}

export default App;
