import "./App.css";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";

import Home from "./pages/Home";
// import GoToTop from "./components/GoToTop";
import Content from "./pages/Content";

import Intro from "./components/Intro.js";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loads, setLoads] = useState(false);
  const [loadContent, setLoadContent] = useState(false);

  useEffect(() => {
    setLoads(true);
    setTimeout(() => {
      setLoads(false);
    }, 0);
  }, []);
  useEffect(() => {
    setLoadContent(false);
    setTimeout(() => {
      setLoadContent(true);
    }, 0);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loads && (
          <motion.div
            // key="modal"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [1, 0.71, 0.2, 1.01],
            }}
          >
            {/* <Intro /> */}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loadContent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1],
            }}
          >
            <Navbar />
            <Home />
            <Content />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
