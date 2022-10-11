import React from "react";
import "./footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <span> © {date} Search All rights reserved. </span>
    </div>
  );
};

export default Footer;
