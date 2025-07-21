import React from "react";
import "../styles/ShortcutTemplate.css";

// Group-based color mapping
export const groupStyles = {
  General: {
    headerBg: "var(--alt-one)",
    cardBg: "var(--main-dark)",
    titleColor: "var(--main-text-light)",
  },
  "Basic Editing": {
    headerBg: "var(--main-accent)",
    cardBg: "var(--main-dark)",
    titleColor: "var(--main-text-light)",
  },
  "File Management": {
    headerBg: "var(--alt-three)",
    cardBg: "var(--main-dark)",
    titleColor: "var(--main-text-dark)",
  },
  "Search and Replace": {
    headerBg: "var(--alt-four)",
    cardBg: "var(--main-dark)",
    titleColor: "var(--main-text-dark)",
  },
  "Integrated Terminal": {
    headerBg: "var(--alt-five)",
    cardBg: "var(--main-dark)",
    titleColor: "var(--main-text-dark)",
  },
  "Editor Management": {
    headerBg: "var(--main-text-light)",
    cardBg: "var(--main-dark)",
    titleColor: "var(--main-text-dark)",
  },
};

// fallback for new groups without mapping
const defaultStyle = {
  headerBg: "var(--main-accent)",
  cardBg: "var(--main-dark)",
  titleColor: "var(--main-text-light)",
};

const ShortcutTemplates = ({ shortcut }) => {
  const style = groupStyles[shortcut.group] || defaultStyle;

  return (
    <div
      className="shortcut-template"
      style={{
        borderLeft: `4px solid ${style.headerBg}`,
        borderRight: `4px solid ${style.headerBg}`,
      }}
    >
      <div
        className="shortcut-header"
        style={{ backgroundColor: style.headerBg }}
      >
        <h3 className="shortcut-title" style={{ color: style.titleColor }}>
          {shortcut.shortcut}
        </h3>
      </div>
      <div className="shortcut-body" style={{ backgroundColor: style.cardBg }}>
        <div
          className="shortcut-keys"
          style={{ "--divider-color": style.headerBg }}
        >
          <div className="os-section">
            <h4 className="os-heading">Mac</h4>
            <div className="keybind">{shortcut.mac}</div>
          </div>
          <div className="os-section">
            <h4 className="os-heading">Windows</h4>
            <div className="keybind">{shortcut.windows}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortcutTemplates;
