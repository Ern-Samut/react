import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import ig from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import wh from "../Assets/whatsapp_icon.png";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={ig} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={wh} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 By Ern Samut</p>
      </div>
    </div>
  );
};
