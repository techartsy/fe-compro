import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { removeDash } from '../../utils/formatHelper';
import Footer from '../../components/Footer';
import Whatsapp from '../../components/WhatsApp';
import './style.scss';

const PortfolioItem = () => {
  const location = useLocation();
  const { portfolio } = location.state;

  return (
    <div className="portfolio-detail-container">
      <div className="portfolio-detail-header" style={{ backgroundImage: `url(${portfolio.mainimage})`}}>
        <Navbar />
        <div className="portfolio-detail-title">
          <div>
            <p>{portfolio.title}</p>
          </div>
        </div>
      </div>
      <div className="detail-content-container">
        <div className="detail-description-section">
          <p className="description-title">Deskripsi Proyek</p>
          <p>{portfolio.description}</p>
        </div>
        <div className="detail-category-section">
          <p className="category-title">Kategori Proyek</p>
          <p>{removeDash(portfolio.category)}</p>
        </div>
      </div>
      <div className="secondimage-container">
        <img className="secondimage" src={portfolio.secondimage} alt={`${portfolio.title}`} />
      </div>
      <div className="portfolio-detail-result">
        <p>Perkembangan teknologi yang pesat membuat kita dengan mudah memberikan dan mendapatakan kabar gembira untuk sesama. Undangan digital berbasis web lebih atraktif, interaktif, menghemat waktu, biaya, dan ramah lingkungan.
kami dapat membantu anda dalam hal ini.</p>
      </div>
      <Whatsapp />
      <Footer />
    </div>
  )
}

export default PortfolioItem;
