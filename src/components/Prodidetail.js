import React from "react";

const Prodidetail = ({ project }) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <section className="section-dark">
            <h3 className="strong">{project.jurusan}</h3>
            <p>{project.pelajaran}</p>
            <p>{project.materi}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Prodidetail;
