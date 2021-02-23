import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <ul className="item-1">
          <h4>Get to Know Us</h4>
          <a href="">Careers</a>
          <a href="">Blog</a>
          <a href="">About Amazon</a>
          <a href="">Investor Relations</a>
          <a href="">Amazon Devices</a>
          <a href="">Amazon Tours</a>
        </ul>
        <ul className="item-2">
          <h4>Make Money with Us</h4>
          <a href="">Sell products on Amazon</a>
          <a href="">Sell apps on Amazon</a>
          <a href="">Become an Affiliate</a>
          <a href="">Advertise Your Products</a>
          <a href="">Self-Publish with Us</a>
          <a href="">Host an Amazon Hub</a>
        </ul>
        <ul className="item-3">
          <h4>Amazon Payment Products</h4>
          <a href="">Amazon Business Card</a>
          <a href="">Shop with Points</a>
          <a href="">Reload Your Balance</a>
          <a href="">Amazon Currency Converter</a>
        </ul>
        <ul className="item-4">
          <h4>Let Us Help You</h4>
          <a href="">Amazon and COVID-19</a>
          <a href="">Your Account</a>
          <a href="">Your Orders</a>
          <a href="">Shipping Rates & Policies</a>
          <a href="">Returns & Replacements</a>
          <a href="">Manage Your Content and Devices</a>
          <a href="">Amazon Assistant</a>
          <a href="">Help</a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
