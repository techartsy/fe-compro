import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <a
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=6285155305018"
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
      </a>
    </div>
  );
};

export default Whatsapp;
