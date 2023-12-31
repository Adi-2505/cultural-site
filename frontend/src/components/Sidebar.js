import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiHome, HiCalendar, HiDocumentText, HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";


import {TbHeartHandshake} from "react-icons/tb";

function Sidebar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const EventLinks = [
    { Event: "HOME", Link: "/", Icon: HiHome },
    { Event: "ABOUT", Link: "/#About", Icon: HiDocumentText },
    { Event: "SCHEDULE", Link: "/#Schedule", Icon: HiCalendar },
    { Event: "SPONSORS", Link: "/sponsor", Icon: HiHeart },
    { Event: "SPONSOR US", Link: "/#Sponsor", Icon: TbHeartHandshake },
  ];

  return (
    <>
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose size={30} className="m-3 text-white" />
        ) : (
          <AiOutlineMenu size={30} className="m-3 text-white" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed z-20 left-0 h-full w-1/2 sm:w-1/3  text-white font-bold bg-gradient-to-tl from-white/10 to-[#030003] border-r-black-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24">
          {EventLinks.map((EventLinks) => (
            <Link to={EventLinks.Link}>
              <div className="flex items-center border-b border-gray-600">
                <EventLinks.Icon className="h-4 flex-1" />
                <li className="flex-1  p-2 " onClick={handleNav}>
                  {EventLinks.Event}
                </li>
              </div>
            </Link>
          ))}
        </ul>
        <button
          onClick={handleNav}
          className="flex items-center ml-8 p-2 rounded uppercase navbarbutton navitems transition duration-500"
        >
          <Link to="/register">PRE REGISTER</Link>
        </button>
      </div>
    </>
  );
}

export default Sidebar;
