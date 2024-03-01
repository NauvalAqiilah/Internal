import React from "react";
import "./footer.css";
import logo from "./perkakas/SMK-IT.png";

function Footer() {
  return (
    <div className="footer">
      <div className="isi">
        <h1>SMK Smart Informatika</h1>
        <div className="alamat">
          <a href="https://maps.app.goo.gl/nwr99LmJZK5FX1e26">
          Jl. Pleret Raya Barat No.9, Banyuanyar, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57137
          </a>
        </div>
        <div className="link">
          <a href="https://smkitsi.sch.id/">www.smksmartinformatika.sch.id</a>
        </div>
        {/* <div>
          <img src={logo} />
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
