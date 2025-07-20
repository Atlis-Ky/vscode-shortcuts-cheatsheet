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

  // Map styles to use for each group heading
  const groupStyles = {
    General: { color: "var(--general-accent)" },
    "Basic Editing": { color: "var(--edit-accent)" },
    "File Management": { color: "var(--wine-secondary)" },
    "Search and Replace": { color: "var(--coral-secondary)" },
    "Integrated Terminal": { color: "var(--aqua-secondary)" },
  };

  return (
    <div className="shortcut-list-container">
      {groups.map((group) => (
        <div key={group} className="shortcut-group">
          <h2
            className="group-heading"
            style={groupStyles[group] || { color: "var(--nav-accent)" }}
          >
            {group}
          </h2>
          <div className="shortcut-list">
            {groupedShortcuts[group].map((shortcut) => (
              <ShortcutTemplates key={shortcut.id} shortcut={shortcut} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortcutList;
