import React from "react";
import _ from 'lodash';
import { useHistory } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Whatsapp from "../../components/WhatsApp";
import mainimage from '../../static/images/main_image.png';
import secondimage from '../../static/images/second_image.png';
import thumbnail from '../../static/images/thumbnail.png';
import { removeDash } from "../../utils/formatHelper";
import "./style.scss";

const Portfolio = () => {
  const history = useHistory();
  const portofolios = [
    {
      id: 1,
      mainimage: mainimage,
      secondimage: secondimage,
      title: "Girigahana UPN Jakarta",
      description: "Dies natalis girigahana UPN veteran Jakarta yg ke 40th, memberikan kepercayaan dan memilih Techartsy dalam pembuatan undangan digital  berbasis web, dengan tujuan agar dapat menjangkau seluruh anggota yg berada di seluruh Indonesia. Dan ini momentum untuk lebih bersahabat dengan teknologi digital.",
      category: "Digital-Invitation",
      thumbnail: thumbnail
    },
  ]
  const goToDetail = (item) => {
    history.push({
      pathname: `/portfolio/${item.id}`,
      state: { portfolio: item }
    });
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <Navbar />
        <div className="portfolio-headerText">
          <p>Kepercayaan Mereka Kepada Kami</p>
        </div>
      </div>
      <div className="portfolio-content-wrapper">
        {portofolios?.map((item, idx) => {
          return (
            <div key={idx} className="portfolio-item" onClick={() => goToDetail(item)}>
              <img src={item.thumbnail} alt="portfolio-thumbnail" className="portfolio-thumbnail"/>
              <div className="portfolio-item-info">
                <strong>
                  <p className="portfolio-item-title">{item.title}</p>
                </strong>
                <p>{removeDash(item.category)}</p>
              </div>
            </div>
          )
        })}
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Portfolio;
