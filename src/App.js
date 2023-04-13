import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";
import PortofolioPage from "./Works/PortofolioPage";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";

function App() {
  return (
    <div className="App flex bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-full h-full ">
      <NavBar />
      <div className="p-10 w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/works" element={<PortofolioPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
