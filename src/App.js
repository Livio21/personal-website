import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import PortofolioPage from "./Pages/PortofolioPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';

const AnimatedPage = ({ children, direction }) => {
  const initialX = direction === 'forward' ? '100%' : direction === 'backward' ? '-100%': 0;
  const exitX = direction === 'forward' ? '-100%' : direction === 'backward' ? '100%': 0;
  return (
    <motion.div
      initial={{ x: initialX }}
      animate={{ x: 0 }}
      exit={{ x: exitX }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
}; 

function App() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [direction, setDirection] = useState('forward');

  useEffect(() => {
    setDirection(navigationType === 'PUSH' ? 'forward' : 'backward');
  }, [navigationType]);

  return (
    <>
      <div className="flex bg-black w-full h-dvh">
        <NavBar />
        <div className="p-8" id="canvas">
          <AnimatePresence initial={false} mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                index
                element={
                  <AnimatedPage direction={direction}>
                    <HomePage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/about"
                element={
                  <AnimatedPage direction={direction}>
                    <AboutPage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/contact"
                element={
                  <AnimatedPage direction={direction}>
                    <ContactPage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/works"
                element={
                  <AnimatedPage direction={direction}>
                    <PortofolioPage />
                  </AnimatedPage>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;