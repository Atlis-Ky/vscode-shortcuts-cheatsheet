import React from "react";
import "../styles/ContextCard.css";

const ContextCard = () => (
  <div className="context-card">
    <h1 className="context-card-heading">
      <span className="highlight-word">Speed</span> up your programming
    </h1>
    <p className="context-card-text">
      This page shows you some of the most useful keyboard shortcuts for Visual
      Studio Code that will help speed up your programming adventures. I've
      split them up into categories to organise them a bit. Feel free to click
      on any of the preset filters or use the search bar to find a specific
      shortcut that you need.
    </p>
  </div>
);

export default ContextCard;
