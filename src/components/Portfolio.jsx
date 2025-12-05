import "../css/Home.css"
export default function Portfolio() {
  const items = [
    { img: "src/imags/poert1.png" },
    { img: "src/imags/port2.png" },
    { img: "src/imags/port3.png" },
    { img: "src/imags/poert1.png" },
    { img: "src/imags/port2.png" },
    { img: "src/imags/port3.png" },
  ];

  return (
    <section className="text-center py-5" style={{ minHeight: 
   "calc(-106px + 100vh)", marginTop:"86px" }}>
      <h1 className="fw-bold display-5">PORTFOLIO COMPONENT</h1>

    
      <div className="d-flex align-items-center justify-content-center mb-4">
        <div className="divider-line"></div>
        <i className="fa-solid fa-star mx-3"></i>
        <div className="divider-line"></div>
      </div>

      <div className="containerm " >
        <div className="row g-4">
          {items.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="portfolio-item">
                <img src={item.img} className="img-fluid rounded-3" alt="" />
                <div className="portfolio-hover">
                  <div className="hover-icon">
                    <i className="fa-solid fa-plus fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
