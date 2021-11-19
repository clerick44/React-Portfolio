import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="logoContainer">
        <a href="https://github.com/clerick44" target="_blank" rel="noreferrer">
          <i className="logoLink fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jesse-erickson-14614a6b"
          target="_blank"
          rel="noreferrer"
        >
          <i class="logoLink fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://skiracing.nastar.com/index.jsp?pagename=results&page=comp&compid=305174"
          target="_blank"
          rel="noreferrer"
        >
          <i class="logoLink fas fa-skiing fa-2x"></i>
        </a>
      </div>
      <p>
        Made with love on{" "}
        <a href="https://getfedora.org/en/" target="_blank" rel="noreferrer">
          <i class="fab fa-fedora"></i>
        </a>
        . 2021© Jesse Erickson.
      </p>
    </footer>
  );
};

export default Footer;
