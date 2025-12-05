import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/about";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/index-bbfl2k4X.css";
export default function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
      
<Route path="/contact" element={<Contact />} />
<Route path="/Portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
