import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Sidebar from "../components/Sidebar";
import { HiHome, HiCalendar, HiDocumentText, HiHeart } from "react-icons/hi";

import { Link } from "react-router-dom";

function Navbar() {
  const [show, handleshow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const EventLinks = [

    // { Event: "HOME", Link: "/", icon: HiHome },
    { Event: "ABOUT", Link: "./#About", icon: HiDocumentText },
    { Event: "SCHEDULE", Link: "#Schedule", icon: HiCalendar },
    //{ Event: "SPONSOR US", Link: "/sponsor", icon: HiHeart },

  ];
  return (
    <>
      <div
        className={`flex justify-between items-center  ${
          !show && "bg-transparent"
        } ${
          show && "navscroll"
        } fixed top-0 w-full z-10 transition duration-1000`}
      >
        <div className="flex justify-between w-full md:w-auto">
          <img
            src={logo}
            alt="loading"
            className="h-16 ml-5 p-1.5 md:h-20 md:p-2"
          />{" "}
          <div className="flex md:hidden">
            <Sidebar className="topLinksMobile" />{" "}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex-column mr-10 text-white font-bold ">
            <ul className="hidden md:flex pr-11 topLinks">
              <Link to="/">
                <div className="flex items-center">
                  <li className="flex-1 p-3  ml-2 mr-2 navitems">Home</li>
                </div>
              </Link>
              {EventLinks.map((EventLinks) => (
                <>
                  <a href={EventLinks.Link}>
                    <div className="flex items-center">
                      <li className="flex-1 p-3  ml-2 mr-2 navitems">
                        {EventLinks.Event}
                      </li>
                    </div>
                  </a>
                </>
              ))}

                <div className="flex items-center relative">
                  <button className="flex-1 p-3  ml-2 mr-2 navitems"  onClick={toggleDropdown}>
                    SPONSOR
                  </button>
                  {isOpen && (
                    <ul className="absolute w-full top-12 left-5">
                     <a href="/sponsor" onClick={toggleDropdown}><li className="navitems">SPONSORS</li></a> 
                     <a href="/#Sponsor" onClick={toggleDropdown}> <li className="navitems">SPONSOR US</li></a>
                    </ul>
                  )}
                </div>
              <button className="p-2 rounded m-1 uppercase navbarbutton navitems transition duration-500">
               <Link to="/register">PRE REGISTER</Link>

              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
