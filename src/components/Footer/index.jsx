import React from "react";
import wave from "../../static/images/wave.png";
import instagram from "../../static/icon/Instagram.png";
import LinkedIn from "../../static/icon/LinkedIn.png";
import Behance from "../../static/icon/behance.png";
import Youtube from "../../static/icon/Youtube.png";

import "./index.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="separator" />
      <div className="footer-title">
        <strong>
          <p>Techartsy</p>
        </strong>
      </div>
      <img src={wave} className="wave-img" alt="wave" />
      <div className="info-section">
        <div className="layer">
          <div className="address-header">
            <strong>
              <p>Alamat</p>
            </strong>
          </div>
          <div>
            <strong>
              <p className="address-item">Jl. Papandayan J177</p>
              <p className="address-item">Megaplitan Cinere</p>
              <p className="address-item">Limo - Depok</p>
              <p className="address-item">Jawa Barat</p>
              <p className="address-item">16515</p>
            </strong>
          </div>
          <div className="media-section">
            <div className="media-section-header">
              <strong>
                <p>Terhubung dengan Techartsy</p>
              </strong>
            </div>
            <div className="media-link">
              <a href="https://api.whatsapp.com/send?phone=6285155305018&text=Haloo saya mau pesen jamu mas">
                <img src={instagram} alt="instagram" className="media-icon" />
              </a>
              <a href="https://www.linkedin.com/in/rinoto-harto/">
                <img src={LinkedIn} alt="instagram" className="media-icon" />
              </a>
              <a href="https://www.instagram.com/rinotoharto/">
                <img src={Behance} alt="instagram" className="media-icon" />
              </a>
              <a href="https://www.instagram.com/rinotoharto/">
                <img src={Youtube} alt="instagram" className="media-icon" />
              </a>
            </div>
          </div>
          <div className="copywright">
            <strong>
              <p>Copyright 2021 &copy; Techartsy.Indonesia.com</p>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
