import React from "react";

function Footer() {
  return (
    <>
      <footer id="site-footer">
        <section className="horizontal-footer-section" id="footer-top-section">
          <div id="footer-logo">
            <picture>
              <img
                src="assets/logo/logo-bmw.png"
                alt="footer logo"
              />
            </picture>
          </div>
          <div id="footer-top-menu-container" role="menubar">
            <ul id="footer-top-menu" role="menu">
              <li className="footer-top-menu-item" role="menuitem">
                <a href="#" className="footer-top-menu-link">
                    Home
                </a>
              </li>
              <li
                className="footer-top-menu-item footer-top-menu-item-active"
                role="menuitem"
              >
                <a href="#" className="footer-top-menu-link">
                    Produk
                </a>
              </li>
              <li className="footer-top-menu-item" role="menuitem">
                <a href="#" className="footer-top-menu-link">
                    Sparepart
                </a>
              </li>
              <li className="footer-top-menu-item" role="menuitem">
                <a href="#" className="footer-top-menu-link">
                    Tentang Kami
                </a>
              </li>
            </ul>
          </div>
          <div id="footer-buttons-container">
            <a href="#" className="footer-button" role="button">
              Mobil Kami
            </a>
          </div>
        </section>
        <section
          className="horizontal-footer-section"
          id="footer-middle-section"
        >
          <div
            id="footer-about"
            className="footer-columns footer-columns-large"
          >
            <h1>Alamat Kami</h1>
            <address>
              <p>
                <img src="https://img.icons8.com/ios-filled/14/eeeeee/marker.png" />
                Bondowoso - Jember, Jawa Timur, Indonesia
              </p>
              <p>
                <img src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png" />
                082345678910
              </p>
              <p>
                <img src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png" />
                lordhaidar@noreply.com
              </p>
            </address>
            <h1> Berita Kami</h1>
            <a href="#" className="footer-button" role="button">
              Ikuti
            </a>
          </div>
          <div className="footer-columns">
            <h1>Menu 1</h1>
            <ul className="footer-column-menu" role="menu">
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 1 - Submenu 1
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 1 - Submenu 2
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 1 - Submenu 3
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 1 - Submenu 4
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-columns">
            <h1>Menu 2</h1>
            <ul className="footer-column-menu" role="menu">
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 2 - Submenu 1
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 2 - Submenu 2
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 2 - Submenu 3
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 2 - Submenu 4
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 2 - Submenu 5
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-columns">
            <h1>Menu 3</h1>
            <ul className="footer-column-menu" role="menu">
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 3 - Submenu 1
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 3 - Submenu 2
                </a>
              </li>
              <li className="footer-column-menu-item">
                <a
                  href="#"
                  className="footer-column-menu-item-link"
                  role="menuitem"
                >
                    Menu 3 - Submenu 4
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 3 - Submenu 5
                </a>
              </li>
              <li className="footer-column-menu-item" role="menuitem">
                <a href="#" className="footer-column-menu-item-link">
                    Menu 3 - Submenu 6
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section
          className="horizontal-footer-section"
          id="footer-bottom-section"
        >
          <div id="footer-copyright-info">
            © Testing. 2022. All rights reserved.
          </div>
          <div id="footer-social-buttons">
            <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" />
            <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" />
            <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png" />
            <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png" />
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
