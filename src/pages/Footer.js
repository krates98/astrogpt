import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>123 Main Street</p>
            <p>City, State ZIP</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="#">
              <FaFacebook className="me-3" />
            </a>
            <a href="#">
              <FaTwitter className="me-3" />
            </a>
            <a href="#">
              <FaInstagram className="me-3" />
            </a>
          </div>
          <div className="col-md-4">
            <h5>Join Our Mailing List</h5>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-secondary">
                  <FaEnvelope />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
