import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-details">
        <ul className="footer-list">
          <li className="footer-list-heading">Categories</li>
          <li>
            <a href="/">Web Builder</a>
          </li>
          <li>
            <a href="/">Hosting</a>
          </li>
          <li>
            <a href="/">Data Center</a>
          </li>
          <li>
            <a href="/">Robotic-Automation</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-heading">Contact</li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms Of Service</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>

        <ul className="footer-list-3 footer-list">
          <li>
            <a href="/" class="footer-item">
              United States
            </a>
            <i class="  footer-chevron-down fa-solid fa-chevron-down"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
