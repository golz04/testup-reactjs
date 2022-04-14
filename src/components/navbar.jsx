import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="assets/logo/logo-bmw.png" alt="logo" />
      </div>
      <div className="push-left">
        <button
          id="menu-toggler"
          data-class="menu-active"
          className="hamburger"
          onClick={showMenu}
        >
          <span className="hamburger-line hamburger-line-top" />
          <span className="hamburger-line hamburger-line-middle" />
          <span className="hamburger-line hamburger-line-bottom" />
        </button>
        <ul id="primary-menu" className="menu nav-menu">
          <li className="menu-item current-menu-item">
            <a className="nav__link" href="#">
              Home
            </a>
          </li>
          {/* <li className="menu-item dropdown">
            <a className="nav__link" href="#">
              About
            </a>
            <ul className="sub-nav">
              <li>
                <a className="sub-nav__link" href="#">
                  link 1
                </a>
              </li>
              <li>
                <a className="sub-nav__link" href="#">
                  link 2
                </a>
              </li>
              <li>
                <a className="sub-nav__link" href="#">
                  link 3 - long link - long link - long link
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item dropdown">
            <a className="nav__link" href="#">
              Contact
            </a>
            <ul className="sub-nav">
              <li>
                <a className="sub-nav__link" href="#">
                  link 1
                </a>
              </li>
              <li>
                <a className="sub-nav__link" href="#">
                  link 2
                </a>
              </li>
              <li>
                <a className="sub-nav__link" href="#">
                  link 3 - long link - long link - long link
                </a>
              </li>
            </ul>
          </li> */}
          <li className="menu-item ">
            <a className="nav__link" href="#">
              List Produk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  function showMenu() {
    return document.body.classList.toggle("menu-active");
  }
}

export default Navbar;
