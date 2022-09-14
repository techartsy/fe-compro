import React from "react";
import Navbar from "../../components/Navbar";
import image from "../../static/images/5.png";
import Whatsapp from "../../components/WhatsApp/index";
import topWave from "../../static/images/top_wave.png";
import "./index.scss";
import Footer from "../../components/Footer/index";

const AboutUs = () => {
  const teams = [
    {
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658482964/Asset%20Techartsy%20Indonesia/Squad%20Photo/Agung_oifcay.png',
      name: "Putra Agung Wibisono",
      position: "Co Founder",
    },
    // {
    //   image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658482964/Asset%20Techartsy%20Indonesia/Squad%20Photo/Randi_nk91zu.png',
    //   name: "Rando Bintoro",
    //   position: "Co Founder",
    // },
    {
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658482964/Asset%20Techartsy%20Indonesia/Squad%20Photo/Daniel_c0rq1g.png',
      name: "Daniel Erwinsyah",
      position: "Co Founder",
    },
    {
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658482964/Asset%20Techartsy%20Indonesia/Squad%20Photo/Rino_onwkgj.png',
      name: "Rinoto Harto",
      position: "Co Founder",
    },
    {
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658482964/Asset%20Techartsy%20Indonesia/Squad%20Photo/Braja_bpr0ga.png',
      name: "Braja Sifa Satyaputra",
      position: "Co Founder",
    },
    {
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658482964/Asset%20Techartsy%20Indonesia/Squad%20Photo/Darmawan_binta7.png',
      name: "Darmawan Yan Saputra",
      position: "Co Founder",
    },
    {
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658482965/Asset%20Techartsy%20Indonesia/Squad%20Photo/Dheasy_rioytj.png',
      name: "Dheasy Nurfadhilah",
      position: "UI/UX",
    },
    {
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658482965/Asset%20Techartsy%20Indonesia/Squad%20Photo/Ayu_ervmcg.png',
      name: "Dyah Ayu Wulandari",
      position: "UI/UX",
    },
  ];
  return (
    <div className="aboutContainer">
      <div className="about-header">
        <Navbar />
        <div className="aboutHeaderText">
          <p>Bersama Kita Ciptakan Solusi Teknologi Digital</p>
        </div>
      </div>
      <div className="bg-mid-section">
        <div className="wave-section">
          <div className="stack">
            <img src={topWave} alt="wave" className="top-wave" />
            <div className="about-content">
              <div className="about-image-wrapper">
                <img src={image} alt="About-us" className="about-image" />
              </div>
              <div className="about-desc">
                <p>
                  Techartsy Indonesia merupakan perusahaan yang bergerak di
                  bidang industri kreatif dan teknologi informasi. Perusahaan
                  ini berdiri pada 21 Juli 2021 di Jakarta. Kami hadir guna
                  memberikan solusi untuk mempercepat pertumbuhan para pelaku
                  bisnis
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vision-wrapper">
          <div className="vision-title">
            <strong>
              <p>Visi</p>
            </strong>
          </div>
          <div className="vision-text">
            <p>
              Membangun industri kreatif guna menunjang para pelaku bisnis untuk
              tumbuh dan berkembang melalui sektor teknologi dan digital
            </p>
          </div>
        </div>
        <div className="mission-wrapper">
          <div className="mission-title">
            <strong>
              <p>Misi</p>
            </strong>
          </div>
          <div className="mission-text">
            <ul>
              <li>
                Mampu menjadi industri kreatif yang dapat memberikan sisi dan
                nilai positif bagi para pelaku dunia kreatif khususnya generasi
                muda
              </li>
              <li>
                Secara konsisten melakukan perbaikan atas karya yang dibuat dan
                menganalisanya untuk membangun hubungan baik dengan setiap
                pelanggan kami dalam jangka panjang
              </li>
              <li>
                Memberikan pelayanan terbaik dan profesional bagi setiap
                perusahaan atau perorangan
              </li>
              <li>
                Menggali potensi anak bangsa untuk produktif, kreatif, dan
                inovatif dalam berkarya
              </li>
              <li>
                Membantu dan mengembangkan para pelaku bisnis menuju kesuksesan
                digital
              </li>
            </ul>
          </div>
        </div>
        <div className="teams-container">
          <div className="teams-title">
            <strong>
              <p>Tim Kami</p>
            </strong>
          </div>
          <div className="team-list-wrapper">
            {teams.map((item, idx) => {
              return (
                <div className="team-item" key={idx}>
                  <img src={item.image} alt="team" className="team-image" />
                  <div className="name">
                    <strong>
                      <p>{item.name}</p>
                    </strong>
                  </div>
                  {/* <div className="position">
                    <p>{item.position}</p>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default AboutUs;
