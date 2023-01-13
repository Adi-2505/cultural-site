import React from "react";
import logo from "../images/logo.png";
import Sidebar from "../components/Sidebar";
import { HiHome,HiUserGroup,HiPhotograph,HiCalendar,HiDocumentText,HiHeart } from "react-icons/hi";
function Navbar() {
  const EventLinks = [
    { Event: "HOME", Link: "/", icon: HiHome },
    { Event: "ABOUT", Link: "/", icon: HiDocumentText },
    { Event: "EVENTS", Link: "/", icon: HiCalendar },
    { Event: "SPONSORS", Link: "/", icon: HiHeart},
    { Event: "ORGANIZERS", Link: "/", icon: HiUserGroup },
    { Event: "GALLERY", Link: "/", icon: HiPhotograph },
  ];
  return (
    <>
      <div className="flex justify-between items-center bg-transparent fixed top-0 w-full z-10">
        <div>
          <img src={logo} alt="loading" className="h-14 p-1.5 md:h-20 md:p-2" />
        </div>
        <div className="flex-column mr-10 text-white font-bold">
          <ul className="hidden md:flex pr-11">
            {EventLinks.map((EventLinks) => (
              <a href={EventLinks.Link}>
                <div className="flex items-center">
                <EventLinks.icon className="h-4 flex-1" />
                <li className="flex-1 p-4">{EventLinks.Event}</li>
                </div>
              </a>
              
            ))}
            <button className="p-2 rounded m-2 uppercase hover:bg-red-500 hover:text-white transition duration-500">
              Register Now
            </button>
          </ul>
        </div>
        <div className="flex md:hidden"><Sidebar/> </div>
      </div>
    </>
  );
}
export default Navbar;
