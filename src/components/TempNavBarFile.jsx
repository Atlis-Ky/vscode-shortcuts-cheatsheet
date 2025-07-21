import React from "react";
import SearchBar from "./SearchBar";
import "../styles/NavBar.css";

const NavBar = ({ onSearch }) => (
  <nav className="navbar">
    <div className="navbar-title"><span className="highlight-word">VSCODE</span> Keyboard Shortcuts</div>
    <SearchBar onSearch={onSearch} />
  </nav>
);

export default NavBar;
