import "./App.css";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import Home from "./pages/Home";
// import GoToTop from "./components/GoToTop";
import Content from "./pages/Content";
import Intro from "./components/Intro.js";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sponsor from "./pages/Sponsor";

import {
  // BrowserRouter, //react contexts hook!
  Routes,
  Route,
  //   Link
} from "react-router-dom";
import Register from "./pages/Register";

function App() {
  const [loads, setLoads] = useState(false);
  const [loadContent, setLoadContent] = useState(false);

  useEffect(() => {
    setLoads(true);
    setTimeout(() => {
      setLoads(false);
    }, 3100);
  }, []);

  useEffect(() => {
    setLoadContent(false);
    setTimeout(() => {
      setLoadContent(true);
    }, 2600);
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
          <Content />
        </>
      ),
    },
    {
      path: "/sponsor",
      element: (
        <>
          <Sponsor />
        </>
      ),
    },
  ]);
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
              ease: [1, 0.71, 0.2, 1],
            }}
          >
            <Intro />
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
  {/*<RouterProvider router={router} /> */}
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Home />
                    <Content />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/register"
                element={
                  <>
                    <Register />
                    {/* <Content /> */}
                  </>
                }
              />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  );
}

export default App;
