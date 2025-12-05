export default function Contact() {
  return (
    <section className="py-5" style={{ minHeight: "100vh" }}>
      <div className="container text-center">
     
        <h1 className="fw-bold display-5" style={{ marginTop: "100px" }}>
          CONTACT SECTION
        </h1>

        
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div style={{ background: "#2c3e50", height: "4px", width: "100px" }}></div>
          <i className="fa-solid fa-star mx-3" style={{ color: "#2c3e50" }}></i>
          <div style={{ background: "#2c3e50", height: "4px", width: "100px" }}></div>
        </div>

        <div className="container mt-5" style={{ padding: "0", maxWidth: "100%" }}>
          
          <div className="d-flex flex-column" style={{ gap: "60px" }}>
            <input
              type="text"
              placeholder="userName"
              className="form-control border-0 border-bottom py-3"
              style={{
                background: "transparent",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                fontSize:"20px"
              }}
            />

            <input
              type="number"
              placeholder="userAge"
              className="form-control border-0 border-bottom py-3"
              style={{
                background: "transparent",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                 fontSize:"20px"
              }}
            />

            <input
              type="email"
              placeholder="userEmail"
              className="form-control border-0 border-bottom py-3"
              style={{
                background: "transparent",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                 fontSize:"20px"
              }}
            />

            <input
              type="password"
              placeholder="userPassword"
              className="form-control border-0 border-bottom py-3"
              style={{
                background: "transparent",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                 fontSize:"20px"
              }}
            />
<div><button className="btn text-white" style={{ background: "#1abc9c", marginLeft:"-1050px", fontSize:"20px", fontWeight:"bold", width:"200px", height:"60px" }}>
              Send Message
            </button></div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
