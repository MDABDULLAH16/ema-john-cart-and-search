import logo from "../../images/Logo.svg";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/orderReview">Order Review</Link>
        <Link to="/manageInventory">Manage Inventory</Link>
        <Link to="login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
