import React from "react";
import "./style.scss";
import Navbar from "../../components/Navbar";
// import not_found from "../../static/images/not_found.jpg";
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-header">
        <Navbar />
      </div>
    </div>
  );
};

export default NotFound;
