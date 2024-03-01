import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIprodi } from "./APIprodi";
import Prodidetail from "./Prodidetail";

const Prodi = () => {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    APIprodi.get(id)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h1>Project Detail</h1>
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
        </div>
      )}

      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse">ERROR!!!</span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}

      {project && <Prodidetail project={project} />}
    </div>
  );
};

export default Prodi;
