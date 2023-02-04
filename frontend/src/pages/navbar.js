import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Sidebar from "../components/Sidebar";
import { HiHome, HiCalendar, HiDocumentText, HiHeart } from "react-icons/hi";

function Navbar() {
  const [show, handleshow] = useState(false);
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

  const EventLinks = [
    { Event: "HOME", Link: "", icon: HiHome },
    { Event: "ABOUT", Link: "#About", icon: HiDocumentText },
    { Event: "SCHEDULE", Link: "#Schedule", icon: HiCalendar },
    { Event: "SPONSORS US", Link: "#Sponsor", icon: HiHeart },
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
          <img src={logo} alt="loading" className="h-16 p-1.5 md:h-20 md:p-2" />{" "}
          <div className="flex md:hidden">
            <Sidebar />{" "}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex-column mr-10 text-white font-bold ">
            <ul className="hidden md:flex pr-11">
              {EventLinks.map((EventLinks) => (
                <a href={EventLinks.Link}>
                  <div className="flex items-center">
                    <li className="flex-1 p-3  ml-2 mr-2 navitems">
                      {EventLinks.Event}
                    </li>
                  </div>
                </a>
              ))}
              <button className="p-2 rounded m-1 uppercase navbarbutton navitems transition duration-500">
                PRE-Register
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
