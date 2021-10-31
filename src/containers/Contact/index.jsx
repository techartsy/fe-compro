import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index";
import Whatsapp from "../../components/WhatsApp/index";
import { submitContact } from "../../store/actions";
import "./index.scss";
import { useDispatch } from "react-redux";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const changeName = (e) => {
    setName(e.target.value);
  };
  const chageEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeNumber = (e) => {
    setNumber(e.target.value);
  };
  const changeSubject = (e) => {
    setSubject(e.target.value);
  };
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      submitContact({
        name,
        phone: number,
        email,
        subject,
        message,
      })
    );
  };
  return (
    <div className="contact-container">
      <div className="contact-header">
        <Navbar />
        <div className="contact-headerText">
          <p>kami selalu ada untuk anda</p>
        </div>
      </div>
      <div className="contact-content-container">
        <div className="contact-title">
          <p>
            Kami selalu menyukai percakapan hangat. Dengan senang hati kami akan
            melayani sesuai kebutuhan anda. Kami bahkan dapat mengunjungi kantor
            anda untuk berbicara tentang kreativitas dari Fotografi, Videografi,
            Pengembangan situs web atau mungkin sesi Brainstorming
          </p>
        </div>
        <div className="contact-content-wrapper">
          <div className="form">
            <div className="form-title">
              <p>Tinggalkan kami pesan</p>
            </div>
            <form id="form1" onSubmit={(e) => onSubmit(e)}>
              <label className="label">Nama Anda (required)</label>
              <br></br>
              <input
                required
                className="input"
                type="text"
                value={name}
                onChange={(e) => changeName(e)}
              />
              <br />
              <label className="label">Email Anda (required)</label>
              <br></br>
              <input
                required
                className="input"
                type="email"
                value={email}
                onChange={(e) => chageEmail(e)}
              />
              <br />
              <label className="label">Nomor Anda (required)</label>
              <br></br>
              <input
                required
                className="input"
                type="text"
                value={number}
                onChange={(e) => changeNumber(e)}
              />
              <br />
              <label className="label">Subject</label>
              <br></br>
              <input
                required
                className="input"
                type="text"
                value={subject}
                onChange={(e) => changeSubject(e)}
              />
              <br />
              <label className="label">Pesan Anda</label>
              <br></br>
              <textarea
                required
                className="textArea"
                rows="10"
                cols="86"
                value={message}
                onChange={(e) => changeMessage(e)}
              />
            </form>
            <button form="form1" type="submit" className="submit-button">
              Submit
            </button>
          </div>
          <div className="about-right-section">
            <div className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.608829500092!2d106.79176161431108!3d-6.3150056635543494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eff9c02320a7%3A0xe6d1219a3f773486!2sTechartsy%20Indonesia!5e0!3m2!1sid!2sid!4v1628262562966!5m2!1sid!2sid"
                width="540"
                height="500"
                style={{ border: "1px solid black" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="our-address-section">
              <div className="our-address-title">
                <strong>
                  <u>
                    <p>OUR ADDRESS</p>
                  </u>
                </strong>
              </div>
              <div className="our-address-mid">
                <p className="item">Megapolitan Cinere</p>
                <p className="item">Jl. Papandayan J177</p>
                <p className="item">Depok || 16515</p>
              </div>
              <div className="our-address-contact">
                <p className="item">085155305018</p>
                <p className="item">techarty.indonesia@gmail.com</p>
              </div>
              <div className="our-address-ops-hour">
                <strong>
                  <u>
                    <p className="item">OPENING HOURS</p>
                  </u>
                </strong>
                <strong>
                  <p className="item">MONDAY TO FRIDAY : 9 AM to 5 PM</p>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default ContactUs;
