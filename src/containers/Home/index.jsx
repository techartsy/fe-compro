import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./index.scss";
import Navbar from "../../components/Navbar";
import image2 from "../../static/images/2.png";
import image3 from "../../static/images/3.png";
import camera from "../../static/icon/camera.png";
import laptop from "../../static/icon/laptop.png";
import ilustration from "../../static/images/ilustration.png";
import invitation from "../../static/icon/invitation.png";
import movie from "../../static/icon/movie.png";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/index";
import Whatsapp from "../../components/WhatsApp/index";
import Animation4 from "../../static/animation/4.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import chevronRight from "../../static/images/chevron-right.png";

const HomePage = () => {
  const history = useHistory();
  const services = [
    {
      image: laptop,
      title: "Web Application",
      description:
        "Memudahkan anda dalam mengolah data pada usaha/pekerjaan anda dengan mudah, cepat, serta user friendly",
    },
    {
      image: movie,
      title: "Videografi",
      description:
        "Penyampaian promosi digital dengan video dipercaya bisa membuat target atau konsumen, terutama generasi milenial lebih mudah dijangkau",
    },
    {
      image: camera,
      title: "Fotografi",
      description:
        "Memudahkan anda dalam penyampaian promosi, iklan bisnis, dan usaha anda dalam bentuk digital sehingga dapat menjangkau target dari semua kalangan",
    },
    {
      image: invitation,
      title: "Digital Invitation",
      description:
        "Membantu anda dalam menyampaikan kabar gembira dengan cepat, hemat, serta ramah lingkungan",
    },
  ];

  const goToService = () => {
    history.push("/service");
  };

  const goToContact = () => {
    history.push("/contact");
  };

  return (
    <div className="homeContainer">
      <div className="header">
        <Navbar />
        <div className="home-headerText">
          <ScrollAnimation
            duration={3}
            animateIn="fadeInLeft"
            animateOut="fadeOutRight"
            initiallyVisible={true}
          >
            <p>Sudah Saatnya Bersahabat Dengan Digital</p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="subHeader">
        <strong>
          <p>Kami bisa membantu anda untuk lebih dekat dengan digital</p>
        </strong>
      </div>
      <div className="infoSection">
        <div className="shadow">
          <div className="infoText">
            <p>
              Techartsy Indonesia merupakan partner yang tepat untuk
              mengembangkan bisnis anda, karena kami memiliki tim ahli dalam
              bidang pembuatan website, videografi & fotografi.
            </p>
          </div>
        </div>
        <div className="animation">
          <Player
            autoplay
            loop
            src={Animation4}
            className="animation-section"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </div>
      <div className="subHeader-service">
        <strong>
          <p>Layanan Kami</p>
        </strong>
      </div>
      <div className="section-3">
        <ScrollAnimation animateIn="fadeInLeft" duration={2}>
          <div className="content">
            <div className="contentHeaderWrapper">
              <div className="contentHeader">
                <p>Development</p>
              </div>
              <div className="subtitle">
                <p>Bagaimana Digital Branding Dapat Membantu Bisnis Anda</p>
              </div>
            </div>
            <img src={image2} alt="development" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" duration={2}>
        <div className="content">
          <div className="contentHeaderWrapper">
            <div className="contentHeader">
              <p>Creative Design</p>
            </div>
            <div className="subtitle">
              <p>Kreativitas kami membawa bisnis anda maju</p>
            </div>
          </div>
          <img src={image3} alt="creative-design" />
        </div>
        </ScrollAnimation>
      </div>
      <div className="serviceSection">
        <div className="service-content">
          {services &&
            services.map((item, idx) => {
              return (
                <ScrollAnimation animateIn="fadeIn">
                  <div key={idx} className="service-card">
                    <img
                      src={item.image}
                      alt="service"
                      className="service-img"
                    />
                    <div className="service-title">
                      <strong>
                        <p>{item.title}</p>
                      </strong>
                    </div>
                    <div className="service-description">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
        </div>
        <ScrollAnimation duration={1} animateIn="fadeIn">
          <div className="actionBtn" onClick={goToService}>
            <p>Lanjutkan</p>
          </div>
        </ScrollAnimation>
      </div>
      <div className="scaleup-section">
        <div className="scaleup-text">
          <strong>
            <p>
              Saatnya scale up bisnis dan manfaatkan modal usaha bisnis anda
            </p>
          </strong>
        </div>
        <div className="scaleup-img">
          <img src={ilustration} alt="scale-up" />
        </div>
        <ScrollAnimation
            duration={2}
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            initiallyVisible={true}
          >
        <div className="contact-us">
          <div className="right-section">
            <div className="link-header">
              <strong>
                <p>Hubungi kami</p>
              </strong>
            </div>
            <div className="link-bottom" onClick={goToContact}>
              <p>tanya kami langsung</p>
              <span>
                <img
                  src={chevronRight}
                  className="arrow-icon"
                  alt="arrow-icon"
                />
              </span>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default HomePage;
