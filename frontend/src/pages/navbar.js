import React from "react";
import logo from "../images/logo.png";
import Sidebar from "../components/Sidebar";
function Navbar() {
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
      <div className="flex justify-between items-center bg-transparent fixed top-0 w-full z-10">
        <div>
          <img src={logo} alt="loading" className="h-14 p-1.5 md:h-20 md:p-2" />
        </div>
        <div className="mr-10 text-white">
          <ul className="hidden md:flex">
            {EventLinks.map(({ Event, Link }) => (
              <a href={Link}>
                <li className="p-4">{Event}</li>
              </a>
            ))}
            <button className="p-2 rounded m-2 uppercase hover:bg-red-500 hover:text-white transition duration-500">
              registration
            </button>
          </ul>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
export default Navbar;
