import React from "react";
// import { RiMenu3Line, RiCloseLin } from 'react-icon/ri';
import logo from "../../assets/logo.svg";

import "./navbar.css";

// BEM -> Block Elements

const Navbar = () => {
  return (
    <div className="oppt__navbar">
      Navbar
      <div className="oppt__navbar-link">
        <div className="oppt__navbar-link_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
