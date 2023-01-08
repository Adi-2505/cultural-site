import React from "react";
import Video from "..//videos/homepagevideo.mp4";
function Home() {
  return (
    <>
      <div className="relative h-screen w-99vw">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          loop
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div
          className="absolute z-1 text-white"
          style={{
            width: "532px",
            height: "384px",
            left: "65px",
            top: "150px",
            fontFamily: "Audiowide",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "128px",
            lineHeight: "120%",
            letterSpacing : '2px',
            textShadow : '15px 15px 30px #000000'
          }}
        >
          FLARE FIESTA
        </div>
        <div
          className="absolute z-1 text-white flex"
          style={{
            width: "500px",
            height: "27px",
            left: "65px",
            top: "544px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "120%",
            letterSpacing : '2px',
            textShadow : '15px 15px 30px #000000'
          }}
        >
          From XXth Feb - XX Feb
        </div>
      </div>
    </>
  );
}

export default Home;
