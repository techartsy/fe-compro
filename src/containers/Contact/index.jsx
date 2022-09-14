import React, { useState } from "react";
import Swal from 'sweetalert2'
import useWindowDimensions from "../../utils/useWindowDimensions";
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
  const { width } = useWindowDimensions();
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

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  const resetForm = () => {
    setName('');
    setEmail('');
    setNumber('');
    setSubject('');
    setMessage('');
  }
  const showSuccessNotif = () => {
    Toast.fire({
      icon: 'success',
      title: 'Message successfully sent'
    })
  }

  const showErrorNotif = () => {
    Toast.fire({
      icon: 'error',
      title: 'Ooopss something went wrong, please try again.',
      customClass: {
        container: 'swal-overlay'
      }
    })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      submitContact({
        name,
        phone: number,
        email,
        subject,
        message,
        resetForm,
        showSuccessNotif,
        showErrorNotif,
      })
    );
  };
  return (
    <div className="contact-container">
      <div className="contact-header">
        <Navbar />
        <div className="contact-headerText">
          <p>Kami Selalu Ada Untuk Anda</p>
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
              <strong>
                <p>Tinggalkan kami pesan</p>
              </strong>
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
                cols={width === 'sm' || width === 'md' ? "39" : "86"}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.311786359295!2d106.77792031431152!3d-6.353668663926221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eee50530e1d1%3A0x1f4d5abaddf65260!2sJl.%20Papandayan%20Blok%20J%20No.177%2C%20Limo%2C%20Kec.%20Limo%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016514!5e0!3m2!1sid!2sid!4v1649860975985!5m2!1sid!2sid"
                width={width === 'lg' ? "540" : '320'}
                height={width === 'lg' ? "500" : '300'}
                style={{ border: "1px solid black" }}
                allowfullscreen=""
                loading="lazy"
                title="Google Maps"
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
                {/* <p className="item">Megapolitan Cinere</p>
                <p className="item">Jl. Papandayan J177</p> */}
                {/* <p className="item">Depok || 16515</p> */}
                <p className="item">Jl. Andara 1</p>
                <p className="item">Pangkalan Jati</p>
                <p className="item">Depok || 16513</p>
              </div>
              <div className="our-address-contact">
                <a
                  className="item"
                  href="mailto:hello.techartsy.indonesia@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  hello.techartsy.indonesia@gmail.com
                </a>
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
