import React from "react";
import Navbar from "../../components/Navbar";
import Animation1 from "../../static/animation/8.json";
import Development from "../../static/animation/development.json";
import laptop from "../../static/icon/laptop.png";
import mobile from "../../static/icon/mobile.png";
import compro from "../../static/icon/compro.png";
import invitation from "../../static/icon/invitation.png";
import personal from "../../static/icon/personal.png";
import camera from "../../static/icon/camera.png";
import movie from "../../static/icon/movie.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Whatsapp from "../../components/WhatsApp/index";
import Footer from "../../components/Footer/index";
import separator from "../../static/images/separator.png";
import bottom_separator from "../../static/images/bottom_separator.png";
import photo_ilustration from "../../static/images/photo_ilustration.png";
import video_ilustration from "../../static/images/video_ilustration.png";
import "./style.scss";

export const Service = () => {
  return (
    <div className="serviceContainer">
      <div className="serviceHeader">
        <Navbar />
        <div className="service-headerText">
          <p>Kami Akan Menciptakan Produk Digital Yang Mempunyai Nilai Seni</p>
        </div>
      </div>
      <div className="service-top-section">
        <div className="service-title">
          <strong>
            <p>Web & Mobile Apps Development</p>
          </strong>
        </div>
        <Player
          autoplay
          loop
          src={Development}
          style={{ height: "450px", width: "450px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <div className="dev-service-container">
          <div className="left">
            <div className="sub-service-card">
              <img
                className="subservice-icon"
                src={laptop}
                alt="web-application"
              />
              <strong>
                <p className="sub-service-title">Web Application</p>
              </strong>
              <p className="sub-service-subtitle">
                Kami membantu pembuatan dan pengembangan aplikasi berbasis
                website berdasarkan proses bisnis yang anda butuhkan, dilengkapi
                dengan CMS, Responsive Design, dan fitur lainnya, hingga dapat
                meluncurkan solusi perusahaan yang efektif.
              </p>
            </div>
            <div className="sub-service-card">
              <img className="subservice-icon" src={mobile} alt="mobile-apps" />
              <strong>
                <p className="sub-service-title">Mobile Apps</p>
              </strong>
              <p className="sub-service-subtitle">
                Kami membantu anda dalam pembuatan dan pengembangan aplikasi
                berbasis mobile dengan fungsi yang optimal. Tentunya anda akan
                mendapatkan fitur unik seperti push notification dan fitur unik
                lainnya. Kini hubungan dengan customer ada digenggaman anda.
              </p>
            </div>
          </div>
          <div className="mid">
            <div className="sub-service-card">
              <img
                className="subservice-icon"
                src={invitation}
                alt="Digital-invitation"
              />
              <strong>
                <p className="sub-service-title">Digital Invitation</p>
              </strong>
              <p className="sub-service-subtitle">
                Anda dapat membuat undangan sesuai kebutuhan anda seperti acara
                pertemuan, private party atau event besar lain nya seperti
                pernikahan yang pasti dalam sentuhan digital.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="sub-service-card">
              <img
                className="subservice-icon"
                src={compro}
                alt="Company-profile"
              />
              <strong>
                <p className="sub-service-title">Company Profile</p>
              </strong>
              <p className="sub-service-subtitle">
                Kami menyediakan layanan pembuatan Profile Bisnis atau
                perusahaan sesuai kebutuhan anda dengan berbasis web. Jadikan
                profil perusahaan anda tampak elegan di mata customer.
              </p>
            </div>
            <div className="sub-service-card">
              <img
                className="subservice-icon"
                src={personal}
                alt="Personal-website"
              />
              <strong>
                <p className="sub-service-title">Personal Web</p>
              </strong>
              <p className="sub-service-subtitle">
                Situs web Anda adalah resume Anda, galeri Anda, dan majalah
                pribadi yang mencitrakan diri Anda. Sebagai media online yang
                sepenuhnya Anda kendalikan dan Anda miliki. Tingkatkan personal
                branding Anda dengan menjangkau lebih banyak koneksi, peluang
                dan sebaginya.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-separator">
        <img src={separator} alt="wave" className="image-separator" />
      </div>
      <div className="service-bottom-section">
        <div className="service-title">
          <strong>
            <p>Creative Production</p>
          </strong>
        </div>
        <div className="creative-service-container">
          <div className="creative-top-content">
            <img src={photo_ilustration} alt="photography" />
            <div className="card-wrapper">
              <div className="sub-service-card">
                <img
                  className="subservice-icon"
                  src={camera}
                  alt="Personal-website"
                />
                <strong>
                  <p className="sub-service-title">Fotografi</p>
                </strong>
                <p className="sub-service-subtitle">
                  Kami membantu anda untuk mengabadikan momen - momen indah agar
                  selalu berada dalam ingatan, menyampaikan perspektif dalam
                  diri yang dikemas dengan baik.
                </p>
              </div>
            </div>
          </div>
          <div className="creative-top-content">
            <div className="card-wrapper">
              <div className="sub-service-card">
                <img
                  className="subservice-icon"
                  src={movie}
                  alt="Personal-website"
                />
                <strong>
                  <p className="sub-service-title">Videografi</p>
                </strong>
                <p className="sub-service-subtitle">
                  Kami membantu anda dalam mempromosikan/ mengiklankan produk
                  anda dalam bentuk digital dan Merekam kejadian atau moment
                  untuk dirangkum dalam bentuk gambar dan suara, membuat moment
                  akan tetap hidup untuk dikenang.
                </p>
              </div>
            </div>
            <img src={video_ilustration} alt="photography" />
          </div>
        </div>
        <div className="bottom-separator">
          <img src={bottom_separator} alt="wave" />
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Service;
