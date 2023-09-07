import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";
import PortofolioPage from "./Works/PortofolioPage";
import NavBar from "./Components/NavBar";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <div className="flex " id="canvas">
        <NavBar />
        <Routes className="" location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/works" element={<PortofolioPage />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
