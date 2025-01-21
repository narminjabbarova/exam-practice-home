import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "../Header/index.module.scss";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <>

    <header>
      <div className="container">
        <div className={styles.header}>

          <img className={styles.logo} src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" alt="" />


          <nav >
            <ul className={styles.menu}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/wishlist">Wishlist</NavLink></li>
              <li><NavLink to="/add">Add</NavLink></li>
              <li><NavLink to="/shop">Shop</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>

            <div className={styles.icons}>
              <IoSearch />
              <FaCartShopping />
              <FaRegHeart />
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
