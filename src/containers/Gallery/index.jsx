import React, { useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import "./index.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index";
import Whatsapp from "../../components/WhatsApp/index";

export const Gallery = () => {
  const { width } = useWindowDimensions();
  const images = [
    {
      id: 1,
      title: "Blur",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649177512/Gallery%20Compro/blur_ivgwqr.jpg',
      caption: "Metropole Lights, Capital City of Indonesia",
      category: "image",
    },
    {
      id: 2,
      title: "Flora",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649177529/Gallery%20Compro/ciplukan_lhufl3.jpg',
      video: "",
      caption: "Fresh Fruit of Ciplukan",
      category: "image",
    },
    {
      id: 3,
      title: "Leaves",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649177496/Gallery%20Compro/leave_ay7ucg.jpg',
      video: "",
      caption: "Backyard Sunshine Leaves",
      category: "image",
    },
    {
      id: 4,
      title: "Road",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649177481/Gallery%20Compro/road_hmy87o.jpg',
      video: "",
      caption: "Little Africa, East Java, Indonesia",
      category: "image",
    },
    {
      id: 5,
      title: "Fauna",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649177513/Gallery%20Compro/bird_yfbvre.jpg',
      video: "",
      caption: "Lovebird Spirit, Perched in a Cage",
      category: "image",
    },
    {
      id: 6,
      title: "Model",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649177570/Gallery%20Compro/model_nfq4vy.jpg',
      video: "",
      caption: "Dam Rocks, Putra Agung Wibisono",
      category: "image",
    },
    {
      id: 7,
      title: "Beach",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649177592/Gallery%20Compro/coconut_cxgyai.jpg',
      video: "",
      caption: "Coconut Sunset, The Legend of South",
      category: "image",
    },
    {
      id: 8,
      title: 'Human Interest',
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649177451/Gallery%20Compro/DSC_3620_2_nxfvfa.jpg',
      video: "",
      caption: "They Called 'Bolang', Situ Gintung",
      category: "image",
    },
    {
      id: 9,
      title: "Street Photography",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649421575/Gallery%20Compro/reels-10_1_x4kshh.jpg',
      video: "",
      caption: "Sudirman Protocol Road at Night",
      category: "image",
    },
    {
      id: 10,
      title: "Nature",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649183002/Gallery%20Compro/misk_maoglg.jpg',
      video: "",
      caption: "Morning Mist in Ijen Valley, East Java",
      category: "image",
    },
    {
      id: 11,
      title: "Human Interest",
      image: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1649183061/Gallery%20Compro/peoples_mornig_igszqy.jpg',
      video: "",
      caption: "Karanghawu Morning People, Sukabumi, West Java",
      category: "image",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const setDisplayedImage = (image) => {
    setSelectedImage(image);
  };

  const nextBtn = () => {
    const index = images.findIndex((item) => item.id === selectedImage.id);
    if (index !== images.length - 1) {
      setSelectedImage(images[index + 1]);
    } else {
      setSelectedImage(images[0])
    }
  };

  const prevBtn = () => {
    const index = images.findIndex((item) => item.id === selectedImage.id);
    if (index !== 0) {
      setSelectedImage(images[index - 1]);
    } else {
      setSelectedImage(images[images.length - 1])
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <Navbar />
        <div className="headerText">
          <p>Abadikan Momen Berharga Anda Bersama Techartsy Indonesia</p>
        </div>
      </div>
      <p className="gallery-title">Kreativitas kami membawa bisnis anda maju</p>
      <div className="gallery-square">
        <p className="gallery-category">Foto kami</p>
      </div>
      <div className="gallery-photo-slide">
        <div className="image-wrapper">
          <img
            className="image-item fade"
            src={selectedImage.image}
            alt="main_photo"
          />
          <div className="prev-wrapper">
            <a class="prev" onClick={prevBtn}>
              ❮
            </a>
          </div>
          <div>
            <a class="next" onClick={nextBtn}>
              ❯
            </a>
          </div>
          <div className="overlay-section">
            <div className="gallery-image-title">{selectedImage?.title}</div>
            <div className="gallery-image-caption">{selectedImage?.caption}</div>
          </div>
        </div>
        {width === 'lg' && <div className="image-thumbnail">
          {images.map((item) => {
            return (
              <img
                className={`thumbnail ${
                  item.id === selectedImage.id ? "active-thumbnail" : ""
                }`}
                src={item.image}
                alt="creative"
                onClick={() => setDisplayedImage(item)}
              />
            );
          })}
        </div>}
      </div>
      <Whatsapp />
      <div className="gallery-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
