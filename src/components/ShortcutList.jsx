import React from "react";
import ShortcutTemplates from "./ShortcutTemplates";
import "../styles/ShortcutList.css";

const ShortcutList = ({ shortcuts }) => (
  <div className="shortcut-list">
    {shortcuts.map((shortcut) => (
      <ShortcutTemplates key={shortcut.id} shortcut={shortcut} />
    ))}
  </div>
);

export default ShortcutList;
