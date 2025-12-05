import { BiFontSize } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  const activeLinkStyle = {
    backgroundColor: "#1abc9c",
    borderRadius: "12px",
    color: "#fff",
    padding: "8px 16px",
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "#2C3E50", padding: "40px"  ,
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
   zIndex: 2000,
   height: "131px"
}}>
      <div className="container">
        <NavLink
          className="navbar-brand text-white fw-bold"
          style={{ fontSize: "40px", marginLeft: "-80px" }}
          to="/"
        >
          START FRAMEWORK
        </NavLink>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="mainNav">
          <ul className="navbar-nav" style={{ marginLeft: "800px", fontSize: "xx-large" }}>
            <li className="nav-item">
              <NavLink
                to="/About"
                className="nav-link fw-bold px-3"
                style={({ isActive }) => (isActive ? activeLinkStyle : { color: "#fff" })}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link fw-bold px-3"
                style={({ isActive }) => (isActive ? activeLinkStyle : { color: "#fff" })}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className="nav-link fw-bold px-3"
                style={({ isActive }) => (isActive ? activeLinkStyle : { color: "#fff" })}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}