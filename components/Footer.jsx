export default function Footer() {
  return (
    <>
     
      <footer style={{ backgroundColor: "#2C3E50" }} className="text-white py-5">
        <div className="container space-betwwen">
          <div className="row text-center">

          
            <div className="col-md-4 mb-4">
              <h3 className="fw-bold">LOCATION</h3>
              <p  style={{fontSize:"30px"}}>
                2215 John Daniel Drive <br />
                Clark, MO 6524
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h3 className="fw-bold">AROUND THE WEB</h3>

              <div className="d-flex justify-content-center gap-3 mt-3">

              
                <span
                  className="d-flex justify-content-center align-items-center rounded-circle border"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderColor: "white",
                    cursor: "pointer",
                  }}
                >
                 <i className="fa-brands fa-facebook" style={{fontSize:"30px"}}></i>
                </span>

                <span
                  className="d-flex justify-content-center align-items-center rounded-circle border"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderColor: "white",
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-brands fa-x-twitter" style={{fontSize:"30px"}}></i>
                </span>

                <span
                  className="d-flex justify-content-center align-items-center rounded-circle border"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderColor: "white",
                    cursor: "pointer",
                  }}
                >
                 <i className="fa-brands fa-linkedin" style={{fontSize:"30px"}}></i>
                </span>

                <span
                  className="d-flex justify-content-center align-items-center rounded-circle border"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderColor: "white",
                    cursor: "pointer",
                  }}
                >
<i className="fa-solid fa-globe" style={{fontSize:"30px"}}></i>
                </span>

              </div>
            </div>

            {/* ABOUT */}
            <div className="col-md-4 mb-4 ">
              <h3 className="mero" style={{fontSize:"40px"}}>ABOUT FREELANCER</h3>
              <p style={{fontSize:"20px"}}>
                Freelance is a free to use, licensed Bootstrap theme created by Route.
              </p>
            </div>

          </div>
        </div>
      </footer>

      <div
        className="text-center py-3 text-white"
        style={{ backgroundColor: "#1A252F", fontSize:"30px" }}
      >
        Copyright © Your Website 2021
      </div>
    </>
  );
}
