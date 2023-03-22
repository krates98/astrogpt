import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaTelegram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>

            <p>Email: info@example.com</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>

            <a href="#" className="linkClass">
              <FaTwitter className="me-3" />
            </a>
            <a href="#" className="linkClass">
              <FaTelegram className="me-3" />
            </a>
          </div>
          <div className="col-md-4">
            <h5>Contact Address</h5>
            <a href="#" className="linkClass">
              0x2342143213123123123123
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
