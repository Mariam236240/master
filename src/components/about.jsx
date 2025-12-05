import React from "react";

export default function About() {
  return (
    <section
      className="text-center text-white"
      style={{ background: "#1abc9c", minHeight: "100vh", paddingBottom: "50px" }}
    >
      {/* Title */}
      <div>
        <h1 className="fw-bold display-5" style={{ marginTop: "50px" }}>
          ABOUT COMPONENT
        </h1>
      </div>

      {/* Divider */}
      <div className="d-flex align-items-center justify-content-center my-4">
        <div style={{ background: "white", height: "4px", width: "100px" }}></div>
        <i className="fa-solid fa-star mx-3"></i>
        <div style={{ background: "white", height: "4px", width: "100px" }}></div>
      </div>

      {/* Description */}
      <div className="container" style={{ fontSize: "20px", marginTop: "50px" }}>
        <div className="row mt-4">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as
              optional SASS stylesheets for easy customization.
            </p>
          </div>

          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as
              optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>

      {/* Footer-like three columns */}
      <div className="container mt-5">
        <div className="row text-center text-white">
          {/* Location */}
          <div className="col-md-4 mb-4">
            <h5>LOCATION</h5>
            <p>
              2215 John Daniel Drive<br />
              Clark, MO 6524
            </p>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 mb-4">
            <h5>AROUND THE WEB</h5>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <a href="#" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href="#" className="text-white"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin-in fa-lg"></i></a>
              <a href="#" className="text-white"><i className="fab fa-globe fa-lg"></i></a>
            </div>
          </div>

          {/* About Freelancer */}
          <div className="col-md-4 mb-4">
            <h5>ABOUT FREELANCER</h5>
            <p>
              Freelancer is a free to use, licensed Bootstrap theme created by Route.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
