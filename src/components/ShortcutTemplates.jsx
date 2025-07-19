import React from "react";
import "../styles/ShortcutTemplate.css";

const groupColors = {
  General: "var(--general-bg)",
  "Basic Editing": "var(--edit-bg)",
  Navigation: "var(--nav-bg)",
};

const ShortcutTemplates = ({ shortcut }) => (
  <div
    className="shortcut-template"
    style={{ background: groupColors[shortcut.group] || "white" }}
  >
    <h3 className="shortcut-title">{shortcut.shortcut}</h3>
    <div className="shortcut-keys">
      <div>
        <h4>Mac</h4>
        <div className="keybind">{shortcut.mac}</div>
      </div>
      <div>
        <h4>Windows</h4>
        <div className="keybind">{shortcut.windows}</div>
      </div>
    </div>
  </div>
);

export default ShortcutTemplates;
