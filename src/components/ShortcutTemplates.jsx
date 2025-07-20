import React, { useRef, useEffect } from "react";
import "../styles/ShortcutTemplate.css";

// Group-based color mapping - all using main color palette
const groupStyles = {
  General: {
    headerBg: "var(--main-secondary)",
    cardBg: "var(--main-dark)",
    accentColor: "var(--main-accent)",
  },
  "Basic Editing": {
    headerBg: "var(--main-accent)",
    cardBg: "var(--main-dark)",
    accentColor: "var(--main-accent)",
  },
  "File Management": {
    headerBg: "var(--main-accent)",
    cardBg: "var(--main-dark)",
    accentColor: "var(--main-accent)",
  },
  "Search and Replace": {
    headerBg: "var(--main-accent)",
    cardBg: "var(--main-dark)",
    accentColor: "var(--main-accent)",
  },
  "Integrated Terminal": {
    headerBg: "var(--main-accent)",
    cardBg: "var(--main-dark)",
    accentColor: "var(--main-accent)",
  },
};

// Default styles for groups without specific mapping
const defaultStyle = {
  headerBg: "var(--main-accent)",
  cardBg: "var(--main-dark)",
  accentColor: "var(--main-accent)",
};

const ShortcutTemplates = ({ shortcut }) => {
  const style = groupStyles[shortcut.group] || defaultStyle;
  const shortcutKeysRef = useRef(null);

  // Sets the divider color to match the header after render
  useEffect(() => {
    if (shortcutKeysRef.current) {
      const afterElement = window.getComputedStyle(
        shortcutKeysRef.current,
        "::after"
      );
      if (afterElement) {
        shortcutKeysRef.current.style.setProperty(
          "--divider-color",
          style.headerBg
        );
      }
    }
  }, [style.headerBg]);

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
        <h3 className="shortcut-title">{shortcut.shortcut}</h3>
      </div>
      <div className="shortcut-body" style={{ backgroundColor: style.cardBg }}>
        <div
          className="shortcut-keys"
          ref={shortcutKeysRef}
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
