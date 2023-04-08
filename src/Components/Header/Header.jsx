import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <nav className="">
      <Link to="/">Home </Link>
      <Link to="/review">Order review </Link>
      <Link to="/about"> About</Link>
      <Link to="/about"> Contact</Link>
    </nav>
  );
};

export default Header;
