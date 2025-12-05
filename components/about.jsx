export default function about() {
  return (
    <section className="text-center text-white py-5 " style={{ background: "#1abc9c", minHeight: "100vh", marginBottom:"-200px" }}>
     <div><h1 className="fw-bold display-5" style={{textAlign:"center", marginTop:"200px"}}>ABOUT COMPONENT</h1></div> 

      {/* Divider */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <div style={{ background: "white", height: "4px", width: "100px" }}></div>
        <i className="fa-solid fa-star mx-3"></i>
        <div style={{ background: "white", height: "4px", width: "100px" }}></div>
      </div>

      <div className="container " style={{textAlign:"center", marginTop:"100px", fontSize:"20px"}}>
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
    </section>
  );
}
