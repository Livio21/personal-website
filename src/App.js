import "./App.css";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";
import PortofolioPage from "./Works/PortofolioPage";
import NavBar from "./Components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false}>
        <div className="flex bg-black" id="canvas">
          <NavBar />
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/works" element={<PortofolioPage />} />
          </Routes>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
