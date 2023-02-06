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
          className="homepage-button transition lowbutton"
          style={{ width: '250px', height:'40px', display: 'inline-block' }}
        >
          <a href="https://forms.gle/rPWyjMokeTpiAjCZA"
            target="__blank">PRE REGISTER</a>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
