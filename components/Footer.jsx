import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Matteo Lai All rights reserved</p>
      <p className="icons">
        <a href="https://www.instagram.com/matteolai89/" target="_blank">
          <AiFillInstagram />
        </a>

        <a href="https://www.linkedin.com/in/matteolaidev/" target="_blank">
          <AiFillLinkedin />
        </a>
      </p>
    </div>
  );
};

export default Footer;
