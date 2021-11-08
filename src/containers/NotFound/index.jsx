import React from "react";
import "./style.scss";
import Navbar from "../../components/Navbar";
import NotFoundImg from '../../static/images/notfound.png';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Navbar />
      <div className="notfound-img-wrapper">
        <img src={NotFoundImg} alt="Not Found" className="notfound-img" />
      </div>
    </div>
  );
};

export default NotFound;
