import React from "react";
import "./Navbar.scss";
import CartIcon from "../../UI/CartIcon";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-logo">Mini Redux App</div>
      <CartIcon />
    </header>
  );
};

export default Navbar;
