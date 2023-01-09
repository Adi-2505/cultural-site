import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineFileText,
} from "react-icons/ai";
import { MdEvent } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { TfiGallery } from "react-icons/tfi";
import { FaHandshake } from "react-icons/fa";
function Sidebar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const EventLinks = [
    { Event: "Home", Link: "/", icon: AiOutlineHome },
    { Event: "ABOUT", Link: "/", icon: AiOutlineFileText },
    { Event: "EVENTS", Link: "/", icon: MdEvent },
    { Event: "SPONSORS", Link: "/", icon: FaHandshake },
    { Event: "ORGANIZERS", Link: "/", icon: GoOrganization },
    { Event: "GALLERY", Link: "/", icon: TfiGallery },
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
            ? "fixed z-20 left-0 top-0  h-full border-r bg-black text-white border-r-white-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24">
          {EventLinks.map((EventLinks) => (
            <a href={EventLinks.Link}>
              <div className="flex  items-center border-b border-gray-600">
                <EventLinks.icon className="h-6 flex-1" />
                <li className="flex-1  p-2 ">
                  {EventLinks.Event}
                </li>
              </div>
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
