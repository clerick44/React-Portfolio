import React, { useState } from "react";
import "./Header.css";
import { NavLinks } from "./NavLinks";

const Header = (props) => {
  const { currentPage, setCurrentPage } = props;
  const [clicked, setClicked] = useState(false);

  const openMenu = (e) => {
    setClicked(!clicked);
    console.log("event ", e);
  };

  return (
    <nav className="navbar">
      <h1 className="headerTitle"> Jesse Erickson</h1>
      <div className="menuIcon" onClick={openMenu}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "navMenu active" : "navMenu"}>
        {NavLinks.map((link, index) => {
          return (
            <li onClick={() => setCurrentPage(link.title)} key={index}>
              <a
                className={
                  link.className +
                  " " +
                  `${currentPage === link.title && "navLinkActive"}`
                }
                href={link.url}
              >
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
