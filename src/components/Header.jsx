export default function Header() {
  return (
    <header
      className="text-center text-white py-5"
      style={{ background: "#18bc9c" }}
    >
      
      <div className="container py-5">
        <div> <img src="src/imags/avataaars (1).svg" alt="" width={"300px"} /></div>
       
        <h1 className="display-4 fw-bold "style={{fontSize:"55px"}}>START FRAMEWORK</h1>
<div className="d-flex align-items-center justify-content-center mb-3">
  <div
    className="line me-3"
    style={{ backgroundColor: "white", height: "4px", width: "100px" }}
  ></div>

  <i className="fa-solid fa-star text-white fs-3"></i>

  <div
    className="line ms-3"
    style={{ backgroundColor: "white", height: "4px", width: "100px" }}
  ></div>
</div>
        <p className="lead mt-3">
          Graphic Artist – Web Designer – Illustrator
        </p>
      </div>
    </header>
  );
}
