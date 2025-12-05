import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeLinkStyle = {
    backgroundColor: "#1abc9c",
    borderRadius: "12px",
    color: "#fff",
    padding: "8px 16px",
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ background: "#2C3E50", padding: "20px 40px", zIndex: 2000 }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand text-white fw-bold"
          style={{ fontSize: "36px" }}
          to="/"
        >
          START FRAMEWORK
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto" style={{ fontSize: "20px" }}>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link fw-bold"
                style={({ isActive }) => (isActive ? activeLinkStyle : { color: "#fff" })}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link fw-bold"
                style={({ isActive }) => (isActive ? activeLinkStyle : { color: "#fff" })}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link fw-bold"
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
