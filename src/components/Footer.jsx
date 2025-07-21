import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-separator"></div>
    <div className="footer-content">
      Resource made by{" "}
      <a
        href="https://github.com/Atlis-ky"
        target="_blank"
        rel="noopener noreferrer"
      >
        Atlis-Ky
      </a>
      . Got any issues or feedback? Let me know in the github repo. Thanks for
      stopping by!
    </div>
  </footer>
);

export default Footer;
