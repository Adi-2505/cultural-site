import React from "react";
import Video from "..//videos/homepagevideo.mp4";
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
        <div className="absolute z-1 text-white home-fest-name">
          FLARE FIESTA
        </div>
        <div className="absolute z-1 text-white flex home-fest-date">
          From XXth Feb - XX Feb
        </div>
      </div>
    </>
  );
}

export default Home;
