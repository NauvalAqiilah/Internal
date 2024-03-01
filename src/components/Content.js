import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import cardMM from "./perkakas/Multimedia.jpg";
import cardRPL from "./perkakas/Programing.jpg";
import cardTKJ from "./perkakas/FotoTKJ.jpg";
import "./content.css";

function Content(props) {
  const { project } = props;

  return (
    <div>
      <Carousel />
      <div className="about">
        <h1>About</h1>
      </div>
      <div className="Container">
        <div className="card-prodi-wrapper">
          <div className="card">
            <img src={cardTKJ} alt="TKJ" />
          </div>
          <div className="prodi">
            <div className="prodi-content">
              <Link to={"/prodi/" + project.id}>
                <div className="card-prodi-wrapper">
                  <div className="card">
                    <img src={cardTKJ} alt="TKJ" />
                  </div>
                  <div className="prodi">
                    <div className="prodi-content">
                      <p>{project.prodi}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
