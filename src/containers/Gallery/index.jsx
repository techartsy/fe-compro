import React, { useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import "./index.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index";
import Slider from "react-slick";
import Whatsapp from "../../components/WhatsApp/index";
import Prev from "../../static/icon/prev_black.png";
import Next from "../../static/icon/next_black.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <img src={Next} alt="Next Button" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <img src={Prev} alt="Previous Button"/>
    </div>
  );
}

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowDimensions();
  const settings = {
    arrows: width === 'lg' ? true : false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    dots: true,
    // centerMode: true,
    dotsClass: "slick-dots",
    speed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next)
  };

  const images = [
    {
      id: 1,
      title: "Autumn Season",
      image:
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg",
      video: "",
      caption: "Autumn Season Caption",
      category: "image",
    },
    {
      id: 2,
      title: "Tree",
      image:
        "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg",
      video: "",
      caption: "Tree Caption",
      category: "image",
    },
    {
      id: 3,
      title: "Beauty of Nature",
      image:
        "https://sites.google.com/site/beautyofnature98/_/rsrc/1482911355882/config/customLogo.gif?revision=1",
      video: "",
      caption: "Beauty of Nature Caption",
      category: "image",
    },
    {
      id: 4,
      title: "Flower",
      image:
        "https://p4.wallpaperbetter.com/wallpaper/923/239/752/flowers-lake-building-home-wallpaper-preview.jpg",
      video: "",
      caption: "Flower Caption",
      category: "image",
    },
    {
      id: 5,
      title: "Sunset Deer",
      image: "https://wallpaperaccess.com/full/2518973.jpg",
      video: "",
      caption: "Deer Caption",
      category: "image",
    },
    {
      id: 6,
      title: "Milky Way",
      image:
        "https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050_1280.jpg",
      video: "",
      caption: "Milky Way Caption",
      category: "image",
    },
    {
      id: 7,
      title: "Forest",
      image:
        "https://images.theconversation.com/files/305837/original/file-20191209-90562-nsnsun.jpg?ixlib=rb-1.1.0&rect=284%2C696%2C1934%2C965&q=45&auto=format&w=668&h=324&fit=crop",
      video: "",
      caption: "Forest Caption",
      category: "image",
    },
    {
      id: 8,
      title: "Mist",
      image:
        "https://cdn.shopify.com/s/files/1/0337/7469/products/Mystic-Forest-Landscape-Wall-Mural_0852a2f7-50a8-4f80-8226-9fc399d7b023.jpg?v=1628797728",
      video: "",
      caption: "Misty Forest Caption",
      category: "image",
    },
    {
      id: 9,
      title: "Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFsaSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      video: "",
      caption: "Sunset on Beach Caption",
      category: "image",
    },
    {
      id: 10,
      title: "Flowers",
      image:
        "https://i.natgeofe.com/n/57f411cd-dfe6-41a6-8d40-21ba583eccfb/lake-elsinore-california.jpg",
      video: "",
      caption: "Flowers Caption",
      category: "image",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  
  const videos = [
    {
      id: 1,
      title: "Aha",
      image: null,
      video: 'https://www.youtube.com/embed/Ktb44YLL8Nw',
      caption: "Aha - Take On Me",
      category: "video"
    },
    {
      id: 2,
      title: "The Chantels",
      image: null,
      video: 'https://www.youtube.com/embed/IePTH1PWzAs',
      caption: "The Chantels - Maybe",
      category: "video"
    },
    {
      id: 4,
      title: "Louis Armstrong",
      image: null,
      video: 'https://www.youtube.com/embed/VqhCQZaH4Vs',
      caption: "Louis Armstrong - What A Wonderful World",
      category: "video"
    },
  ];

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
      <div className="gallery-video-container">
        <p className="gallery-category">Videografi</p>
        <div className="gallery-video-wrapper">
          <Slider className="slider" {...settings}>
            {videos.map((item, idx) => {
              return (
                <div className={`offerItemWrapper ${idx === activeIndex ? 'active-video' : 'video'}`}>
                  <iframe
                    // width={width === 'lg' ? "680" : '340'}
                    // height={width === 'lg' ? "380" : '200'}
                    // width="560"
                    // height="315"
                    src={item.video}
                    // rel="noreferrer"
                    referrerpolicy="no-referrer-when-downgrade"
                    // referrerpolicy="no-referrer"
                    className="youtube"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                  <div>
                    <p className="gallery-caption">{item.caption}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Whatsapp />
      <div className="gallery-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
