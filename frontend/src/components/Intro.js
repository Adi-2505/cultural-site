import React from "react";
import vdo from "../videos/intro.mp4";

function Intro() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={vdo} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Intro;
