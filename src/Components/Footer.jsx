import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: Description and Social Icons */}
        <div className="footer-section about">
          <p>
            Customer Service | Track Order | Return Policy | Contact Us

        © 2025 The Look. All Rights Reserved.

          </p>
          <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaPinterestP /></a>
         </div>

        </div>

        {/* Column 2: Online Shopping */}
        <div className="footer-section">
          <h3>ONLINE SHOPPING</h3>
          <ul>
            <li>Men’s T-Shirts</li>
            <li>Women’s Wear</li>
            <li>Winter Collections</li>
            <li>Hooded T-Shirts</li>
            <li>Streetwear Collections</li>
          </ul>
        </div>

        {/* Column 3: Customer Policies */}
        <div className="footer-section">
          <h3>CUSTOMER POLICIES</h3>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Returns Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4: Store Info */}
        <div className="footer-section">
          <h3>STORE INFORMATION</h3>
          <ul className="store-info">
            <li><MdLocationOn /> IIMT COLLEGE OF ENGINEERING.</li>
            <li><MdPhone /> Call Us: 1234567890</li>
            <li><MdEmail /> Email Us: info@yourmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        ©2022-23 Powered By dummy team
      </div>
    </footer>
  );
};

export default Footer;
