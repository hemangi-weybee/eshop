import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer-distributed footer">
      <div className="footer-left">
        <Logo/>

        <p className="footer-links">
          <Link to="/" className="link-1">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </p>

        <p className="footer-company-name">Sell Cart Pvt Ltd © 2015</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p style={{ color: "white" }} className="footer-company-about">
          <span>About the company</span>
          E-commerce (electronic commerce) is the buying and selling of goods
          and services, or the transmitting of funds or data, over an electronic
          network, primarily the internet.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
