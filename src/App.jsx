import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import PortofolioPage from "./Pages/PortofolioPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <div className="p-4 min-h-screen">
        <AnimatePresence initial={false} mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/works" element={<PortofolioPage />} />
          </Routes>
        </AnimatePresence>
    </div>
    <Footer />
    </>
  );
}

export default App;
