import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar"
// import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Random from "./components/Random/Random";

import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    console.log("************** in RENDERPAGE ************");
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Random />;
  };

  // const handlePageChange = (page) => {
  //   console.log("in handlePageChange");
  //   setCurrentPage(page);
  // };

  return (
    <>
      {/* <Header currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      {renderPage()}
      <Navbar />
    </>
  );
}

export default App;
