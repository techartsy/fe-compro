import React from "react";
import "./style.scss";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* <h1>Portfolio</h1> */}
      <div className="layer-1">
        <div className="box-layer-1">
          Box 1
          </div>
        <div className="box-layer-1">
        Box 1

          </div>
      </div>
      <div className="layer-2">
        <div className="box-layer-2">
          Box 2
          </div>
        <div className="box-layer-2">
          Box 2
          </div>
      </div>
      <div className="layer-3">
        <div className="box-layer-3">
          Box 3
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
