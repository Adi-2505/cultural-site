import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
function Sponsor() {
  return (
    <>
      <Navbar />
      <div className="sponsorpage">
        <h1 className="">OUR SPONSORS</h1>
        <div style={{marginTop:'7vh'}}>
          <h3>TITLE SPONSORS</h3>
          <div></div>
        </div>
        <div>
          <h3>COMMUNITY PARTNERS</h3>
          <div></div>

        </div>
        <div>
          <h3>MEDIA PARTNERS</h3>
          <div></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Sponsor;
