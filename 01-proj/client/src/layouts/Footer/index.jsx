import React from "react";
import styles from "./index.module.scss";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>CATEGORIES</h4>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>HELP</h4>
          <ul>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>GET IN TOUCH</h4>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>

        <div className={styles.column}>
          <h4>NEWSLETTER</h4>
          <form>
            <input type="email" placeholder="email@example.com" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          Copyright ©2025 All rights reserved | This template is made with
          love by Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
