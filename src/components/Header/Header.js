import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Header.css";

const Header = () => {
  return (
    // <nav className="navbar">
    //   <h1>Jesse Erickson</h1>
    //   <ul>
    //     <li>Home</li>
    //     <li>Portfolio</li>
    //     <li>Contact</li>
    //     <li>Resume</li>
    //     <li>Random</li>
    //   </ul>
    // </nav>

    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>Jesse Erickson</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
