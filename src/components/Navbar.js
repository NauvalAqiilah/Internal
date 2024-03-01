import React from "react";
import "./navbar.css";
import icon from "./perkakas/SMK-IT.png";

const Navbar = () => {
  return (
    <nav>
      <img src={icon} />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Profil</a>
        </li>
        <li>
          <a href="/">More</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
