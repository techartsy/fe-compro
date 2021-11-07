import React from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { removeDash } from "../../utils/formatHelper";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Whatsapp from "../../components/WhatsApp";
import mainimage from '../../static/images/main_image.png';
import mainimage_kaffi from '../../static/images/mainimage_kaffi.png';
import mainimage_kahve from '../../static/images/mainimage_kahve.png';
import secondimage from '../../static/images/second_image.png';
import secondimage_kaffi from '../../static/images/secondimage_kaffi.png';
import secondimage_kahve from '../../static/images/secondimage_kahve.png';
import thumbnail from '../../static/images/thumbnail.png';
import thumbnail_kahve from '../../static/images/thumbnail_kahve.png';
import thumbnail_kaffi from '../../static/images/thumbnail_kaffi.png';

const Portfolio = () => {
  const history = useHistory();
  const portofolios = [
    {
      id: 1,
      mainimage: mainimage,
      secondimage: secondimage,
      title: "Girigahana UPN Jakarta",
      description: "Dies natalis girigahana UPN veteran Jakarta yg ke 40th, memberikan kepercayaan dan memilih Techartsy dalam pembuatan undangan digital  berbasis web, dengan tujuan agar dapat menjangkau seluruh anggota yg berada di seluruh Indonesia. Dan ini momentum untuk lebih bersahabat dengan teknologi digital.",
      result: 'Perkembangan teknologi yang pesat membuat kita dengan mudah memberikan dan mendapatakan kabar gembira untuk sesama. Undangan digital berbasis web lebih atraktif, interaktif, menghemat waktu, biaya, dan ramah lingkungan. Kami dapat membantu anda dalam hal ini',
      category: "Digital-Invitation",
      thumbnail: thumbnail
    },
    {
      id: 2,
      mainimage: mainimage_kahve,
      secondimage: secondimage_kahve,
      title: "Kahve Shop",
      description: "Semakin berkembang teknologi, maka semakin banyak pula peluang bisnis ke ranah online. Kahve Shop mempercayai Techartsy Indonesia membuat Web Application untuk membantu bisnis kopi nya berkembang. Diharapkan dengan adanya Web Application dapat mempermudah customer bertransaksi",
      result: 'Dengan adanya Web Application anda lebih mudah dalam pemasaran produk, mudah dalam pembayaran, dan menawarkan kemudahan fitur di website. Techartsy Indonesia akan membantu anda mengembangkan bisnis melalui Web Application',
      category: "Web-Application",
      thumbnail: thumbnail_kahve
    },
    {
      id: 3,
      mainimage: mainimage_kaffi,
      secondimage: secondimage_kaffi,
      title: "Kaffi Coffee",
      description: "Dewasa ini bisnis kopi semakin menggeliat, wajar saja karena kopi salah satu komoditas terbesar. Kaffi coffe ingin memperkenalkan dirinya dan memberikan informasi produk atau layanan yg di tawarkan",
      result: 'Dengan compro yg baik dan menarik, diharapkan banyak customer tertarik dengan produk yg ditawarkan. Persiapkan compro anda dengan baik bersama Techartsy Indonesia',
      category: "Company-Profile",
      thumbnail: thumbnail_kaffi
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
