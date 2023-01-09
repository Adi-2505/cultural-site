import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Sidebar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const EventLinks = [
    { Event: "Home", Link: "/" },
    { Event: "ABOUT", Link: "/" },
    { Event: "EVENTS", Link: "/" },
    { Event: "SPONSORS", Link: "/" },
    { Event: "ORGANIZERS", Link: "/" },
    { Event: "GALLERY", Link: "/" },
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
          {EventLinks.map(({ Event, Link }) => (
            <a href={Link}>
              <li className="p-4 border-b border-gray-600">{Event}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
