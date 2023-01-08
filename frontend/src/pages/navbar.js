import React, { useState } from "react";
import logo from "../images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-between items-center bg-transparent">
        <div>
          <img src={logo} alt="loading" className="h-14 p-1.5 md:h-20 md:p-2" />
        </div>
        <div className="mr-10">
          <ul className="hidden md:flex">
            <a href="/" className="">
              {" "}
              <li className="p-4">HOME</li>
            </a>
            <a href="/" className="">
              {" "}
              <li className="p-4">ABOUT</li>
            </a>
            <a href="/" className="">
              {" "}
              <li className="p-4">EVENTS</li>
            </a>
            <a href="/" className="">
              {" "}
              <li className="p-4">SPONSORS</li>
            </a>
            <a href="/" className="">
              {" "}
              <li className="p-4">ORGANIZERS</li>
            </a>
            <a href="/" className="">
              {" "}
              <li className="p-4">GALLERY</li>
            </a>
          </ul>
        </div>
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
              ? "fixed left-0 top-0 w=[60%] h-full border-r bg-black text-white border-r-white-900 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-24">
            <a href="/">
              {" "}
              <li className="p-4 border-b border-gray-600">HOME</li>{" "}
            </a>
            <a href="/">
              {" "}
              <li className="p-4 border-b border-gray-600">ABOUT</li>{" "}
            </a>
            <a href="/">
              {" "}
              <li className="p-4 border-b border-gray-600">EVENTS</li>{" "}
            </a>
            <a href="/">
              {" "}
              <li className="p-4 border-b border-gray-600">SPONSORS</li>{" "}
            </a>
            <a href="/">
              {" "}
              <li className="p-4 border-b border-gray-600">ORGANIZERS</li>{" "}
            </a>
            <a href="/">
              {" "}
              <li className="p-4 border-b border-gray-600">GALLERY</li>{" "}
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
