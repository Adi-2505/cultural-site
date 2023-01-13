import React from 'react'
import logo1 from "../images/footer-img/logo_cacs.png";
import logo2 from "../images/footer-img/logo_iiit_kota.png";
import navIcon1 from "../images/footer-img/nav-icon1.svg";
import navIcon2 from "../images/footer-img/nav-icon2.svg";
import navIcon3 from "../images/footer-img/nav-icon3.svg";
import navIcon4 from "../images/footer-img/twitter.png";
import twitter from "../images/footer-img/twitter.svg";

function Footer() {

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2422238719732!2d75.80860731504391!3d26.864044283148562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6776320d101%3A0xea3495775ef99a25!2sIndian%20Institute%20of%20Information%20Technology%2C%20Kota!5e0!3m2!1sen!2sin!4v1673149372293!5m2!1sen!2sin";
  return (
    <footer className='footer'>
      <div className="flex-container">
        <div className="flex-item-left">
          <div className="p-16 mx-auto bg-black rounded-xl shadow-lg flex  space-x-4">
            <div>
              <div className="text-xl font-medium text-white">ABOUT US</div>
              <p className="text-slate-500">CREATIVE ARTS AND CULTURAL <br />
                SOCIETY (CACS) OF IIIT KOTA IS<br />
                PRESIDING OVER ALL THE
                CLUBS <br /> OF THE INSTITUTE</p>
            </div>
            <div>
              <div className="text-xl font-medium text-white">LINKS</div>
              <p className="text-slate-500">cacs@iiitkota.ac.in</p>
            </div>
          </div>
          <div className="px-16 mx-auto bg-black rounded-xl shadow-lg flex  space-x-4">
            <div className='px-2'>
              <div className=" text-xl font-medium text-white">CONTACT US</div>
              <p className="text-slate-500">EMAIL : <br />
                PHONE : +91 xxxxxxxxx <br />
                SUPPORT : support@iiitkota.ac.in</p>
            </div>
            <div>
              <div className="text-xl font-medium text-white">ADDRESS</div>
              <p className="text-slate-500">2nd floor, Prabha Bhavan, <br />
                MNIT campus, JLN Marg, <br />
                Jaipur , Rajasthan 302017</p>
            </div>
          </div>
        </div>
        <div className="flex-item-right grid items-center ">
          <iframe className='map' src={mapSrc} title="IIIT KOTA"></iframe>
        </div>
      </div>
      <div className="p-4 grid grid-rows-1 grid-flow-col gap-4 text-white  items-center ">
        <div className="grid justify-items-start">
          <div className="social-icon ">
            <img className="logo-footer" src={logo1} alt="Logo" />
            <img className="logo-footer" src={logo2} alt="Logo" />
          </div>
        </div>
        <div className="grid justify-items-end">
          <div className="social-icon ">
            <a href="/#"><img src={navIcon1} alt="Icon" /></a>
            <a href="/#"><img src={navIcon2} alt="Icon" /></a>
            <a href="/#"><img src={navIcon3} alt="Icon" /></a>
            <a href="/#"><img src={twitter} alt="Icon" /></a>
          </div>

        </div>
      </div>
      <div>
        <p className="copyrightText text-white ">Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>

  )
}

export default Footer