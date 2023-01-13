import React from "react";
import Video from "..//videos/homepagevideo.mp4";
import Sound from 'react-sound';
import background1 from "..//videos/background1.mp3";
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
        <Sound
          url={background1}
          playStatus={Sound.status.PLAYING}
          loop={true}
        />
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
