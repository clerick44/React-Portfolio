import React, { useState } from "react";
import "./Header.css";
import { NavLinks } from "./NavLinks";

const Header = () => {
  const [clicked, setClicked] = useState();

  const handleClick = (e) => {
    // e.preventDefault();
    setClicked(!clicked);
    console.log("event ", e);
  };

  return (
    <nav className="navbar">
      <h1 className="headerTitle"> Jesse Erickson</h1>
      <div className="menuIcon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "navMenu active" : "navMenu"}>
        {NavLinks.map((link, index) => {
          return (
            <li key={index}>
              <a className={link.className} href={link.url}>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
