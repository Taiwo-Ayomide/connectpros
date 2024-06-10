import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import cp from "../../../public/cp.png"
import ui from "../../../public/ui.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img className="logo1" src={cp} alt="icons" />
          <img className="logo2" src={ui} alt="icons" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about-us"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/staff"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Staff
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/features"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Features
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/security"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Security
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/download" className="nav__link nav__cta">
                Download
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;