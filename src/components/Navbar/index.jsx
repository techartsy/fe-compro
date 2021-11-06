import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../../static/images/logo.png";
import useWindowDimensions from "../../utils/useWindowDimensions";
import "./Navbar.scss";
import Sidebar from "../Sidebar/index";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const goToHome = () => {
    history.push("/");
  };
  const { width } = useWindowDimensions();

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div className={`navbarContainer ${navbar ? 'navbar-active' : ''}`}>
      <div className="logoWrapper">
        <img className="logo" src={Logo} alt="logo" onClick={goToHome} />
      </div>
      {width === "lg" ? (
        <div className="menuWrapper">
          <ul>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link className="link" to="/about">
                Tentang
              </Link>
            </li>
            <li className={location.pathname === "/service" ? "active" : ""}>
              <Link className="link" to="/service">
                Layanan
              </Link>
            </li>
            <li className={location.pathname === "/gallery" ? "active" : ""}>
              <Link className="link" to="/gallery">
                Galeri
              </Link>
            </li>
            <li className={location.pathname === "/portfolio" ? "active" : ""}>
              <Link className="link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link className="link" to="/contact">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Sidebar />
      )}
    </div>
  );
};

export default Navbar;
