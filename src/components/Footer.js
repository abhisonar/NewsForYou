import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <section className="footer-container">
      <div className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              NewsForYou.com
            </Link>
          </div>
          <small className="website-rights">NewsForYou.com &#169; 2021 </small>
          <div className="social-icons">
            <Link
              className="social-icon facebook"
              to="/"
              blank="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon instagram"
              to="/"
              blank="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon youtube"
              to="/"
              blank="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon twitter"
              to="/"
              blank="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon linkedin"
              to="/"
              blank="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
