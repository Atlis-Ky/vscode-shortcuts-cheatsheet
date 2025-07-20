import React from "react";
import ShortcutTemplates from "./ShortcutTemplates";
import "../styles/ShortcutList.css";

const ShortcutList = ({ shortcuts }) => {
  // Group shortcuts by their group property
  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    if (!acc[shortcut.group]) {
      acc[shortcut.group] = [];
    }
    acc[shortcut.group].push(shortcut);
    return acc;
  }, {});

  // Get the groups in the order they appear in the original data
  const groups = Object.keys(groupedShortcuts);

  // Map for group header colors
  const groupHeaderColors = {
    General: "var(--main-accent)",
    "File Management": "var(--main-accent)",
    "Integrated Terminal": "var(--main-accent)",
    "Basic Editing": "var(--main-tertiary)",
    "Search and Replace": "var(--main-tertiary)",
  };

  return (
    <div className="shortcut-list-container">
      {groups.map((group) => {
        const headerColor = groupHeaderColors[group] || "var(--main-accent)";

        return (
          <div key={group} className="shortcut-group">
            <h2
              className="group-heading"
              style={{
                color: headerColor,
                "--underline-color": headerColor, // CSS variable for the underline
              }}
            >
              {group}
            </h2>
            <div className="shortcut-list">
              {groupedShortcuts[group].map((shortcut) => (
                <ShortcutTemplates key={shortcut.id} shortcut={shortcut} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShortcutList;
