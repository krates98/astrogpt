import React, { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = ["navbar", "navbar-expand-lg", "fixed-top"];
  if (isScrolled) {
    navbarClasses.push("bg-dark", "py-2");
  } else {
    navbarClasses.push("navbar-light", "bg-transparent", "py-3");
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={navbarClasses.join(" ")}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <a className="navbar-brand text-light brand" href="/">
            <h1>AstroAIGuru</h1>
          </a>
        </div>
        <button
          className={`navbar-toggler ${
            showMenu ? "" : "collapsed"
          } bg-transparent border-0`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            showMenu ? "show" : ""
          }`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-danger text-uppercase me-3"
                style={{ letterSpacing: "1px" }}
                type="button"
              >
                Launch App
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
