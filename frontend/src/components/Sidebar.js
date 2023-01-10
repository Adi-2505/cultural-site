import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineFileText} from "react-icons/ai";
import {GrGallery, GrDatabase} from "react-icons/gr"
function Sidebar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const EventLinks = [
    { Event: "Home", Link: "/", icon: AiOutlineHome },
    { Event: "ABOUT", Link: "/", icon: AiOutlineFileText },
    { Event: "EVENTS", Link: "/", icon: AiOutlineHome },
    { Event: "SPONSORS", Link: "/", icon: AiOutlineHome },
    { Event: "ORGANIZERS", Link: "/", icon: GrDatabase },
    { Event: "GALLERY", Link: "/", icon: GrGallery },
  ];
  return (
    <>
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose size={30} className="m-3" />
        ) : (
          <AiOutlineMenu size={30} className="m-3" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed z-20 left-0 top-0 w=[60%] h-full border-r bg-black text-white border-r-white-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24 ">
          {EventLinks.map((EventLinks) => (
            <a href={EventLinks.Link}>
              <EventLinks.icon className="w-4 h-4 mr-1 flex-1" /> 
              <li className="flex-1 ml-4 p-2 border-b border-gray-600">{EventLinks.Event}</li>
            </a>
          ))}
        </ul>
        <button className="p-2 rounded m-2 uppercase hover:bg-red-500 hover:text-white transition duration-500">
            Register now
        </button>
      </div>
    </>
  );
}

export default Sidebar;
