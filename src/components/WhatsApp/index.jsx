import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import whatsappIcon from "../../static/icon/Whatsapp.png";
import "./index.scss";

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <a
        href="https://api.whatsapp.com/send?phone=6285155305018"
        target="_blank"
      >
        {/* <img src={whatsappIcon} alt="Whatsapp" className="wa-icon" /> */}
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
      </a>
    </div>
  );
};

export default Whatsapp;
