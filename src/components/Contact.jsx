export default function Contact() {
  return (
    <section className="py-5" style={{ minHeight: "100vh" }}>
      <div className="container text-center">
        <h1 className="fw-bold display-5 mt-5">CONTACT SECTION</h1>

        <div className="d-flex align-items-center justify-content-center mb-5 mt-3">
          <div style={{ background: "#2c3e50", height: "4px", width: "100px" }}></div>
          <i className="fa-solid fa-star mx-3" style={{ color: "#2c3e50" }}></i>
          <div style={{ background: "#2c3e50", height: "4px", width: "100px" }}></div>
        </div>

        <div className="mt-5" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <div className="d-flex flex-column" style={{ gap: "30px" }}>
            <input
              type="text"
              placeholder="Username"
              className="form-control border-0 border-bottom py-3"
              style={{
                background: "transparent",
                borderRadius: "0",
                fontSize: "18px",
              }}
            />
            <input
              type="number"
              placeholder="Age"
              className="form-control border-0 border-bottom py-3"
              style={{ background: "transparent", borderRadius: "0", fontSize: "18px" }}
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control border-0 border-bottom py-3"
              style={{ background: "transparent", borderRadius: "0", fontSize: "18px" }}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control border-0 border-bottom py-3"
              style={{ background: "transparent", borderRadius: "0", fontSize: "18px" }}
            />

            <button
              className="btn text-white mt-3"
              style={{
                background: "#1abc9c",
                fontSize: "18px",
                fontWeight: "bold",
                width: "100%",
                height: "50px",
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
