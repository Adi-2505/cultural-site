import React from "react";
import Video from "..//videos/homepagevideo.mp4";
import centerlogo from "..//images/center_logo.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="relative h-screen w-auto">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={Video} type="video/mp4" />
        </video>
        <motion.div className="homepage-centerlogo">
          <img src={centerlogo} alt="loading" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ stiffness: 50 }}
          className="homepage-button transition duration-1000"
        >
          <button>REGISTER</button>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
