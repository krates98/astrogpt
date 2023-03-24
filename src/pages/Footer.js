import React from "react";
import { FaTwitter, FaTelegram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>

            <p>
              <FaEnvelope className="me-3" />
              email: contact@astroaiguru.com
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>

            <a href="https://www.google.com" className="linkClass">
              <FaTwitter className="me-3" />
            </a>
            <a href="https://www.google.com" className="linkClass">
              <FaTelegram className="me-3" />
            </a>
          </div>
          <div className="col-md-4">
            <h5>Contact Address</h5>
            <a href="https://www.google.com" className="linkClass">
              0x2342143213123123123123
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
