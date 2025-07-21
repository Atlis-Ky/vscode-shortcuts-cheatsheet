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

  // Map for group header colors and alignment
  const groupHeaderStyles = {
    General: { align: "left" },
    "File Management": { align: "left" },
    "Integrated Terminal": { align: "left" },
    "Basic Editing": { align: "right" },
    "Search and Replace": { align: "right" },
    "Editor Management": { align: "right" },
  };

  return (
    <div className="shortcut-list-container">
      {groups.map((group) => {
        const headerStyle = groupHeaderStyles[group] || {
          color: "var(--main-accent)",
          align: "left",
        };

        return (
          <div key={group} className="shortcut-group">
            <div className={`heading-container ${headerStyle.align || "left"}`}>
              <h2
                className="group-heading"
                style={{
                  color: "var(--main-text-light)",
                  "--underline-color": "var(--main-text-light)",
                }}
              >
                {group}
              </h2>
            </div>
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
