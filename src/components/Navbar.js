import React, { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={navbarClasses.join(" ")}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <a className="navbar-brand mx-auto text-light brand" href="/">
            <h1>AstroAIGuru</h1>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
