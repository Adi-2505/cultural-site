import React from "react";
import Video from "..//videos/homepagevideo.mp4";
import centerlogo from "..//images/center_logo.png";
function Home() {
  return (
    <>
      <div className="relative h-screen w-99vw">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div className="homepage-centerlogo">
          <img src={centerlogo} alt = "loading"/>
        </div>
        <div className="homepage-button transition duration-1000">
          <button>REGISTER</button>
        </div>
      </div>
    </>
  );
}

export default Home;
