import React from "react";
import SearchBar from "./SearchBar";
import "../styles/NavBar.css";

const NavBar = ({ onSearch }) => (
  <nav className="navbar">
    <div className="navbar-title">VSCODE Keyboard Shortcuts</div>
    <SearchBar onSearch={onSearch} />
  </nav>
);

export default NavBar;
