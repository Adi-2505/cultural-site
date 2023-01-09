import React from "react";
import logo from "../images/logo.png";
import Sidebar from "../components/Sidebar";
function Navbar() {
<<<<<<< HEAD
=======
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
>>>>>>> main
  const EventLinks = [
    { Event: "Home", Link: "/" },
    { Event: "ABOUT", Link: "/" },
    { Event: "EVENTS", Link: "/" },
    { Event: "SPONSORS", Link: "/" },
    { Event: "ORGANIZERS", Link: "/" },
<<<<<<< HEAD
    { Event: "GALLERY", Link: "/" },
  ];
=======
    { Event: "GALLERY", Link: "/" }]

>>>>>>> main
  return (
    <>
      <div className="flex justify-between items-center bg-transparent fixed top-0 w-full z-10">
        <div>
          <img src={logo} alt="loading" className="h-14 p-1.5 md:h-20 md:p-2" />
        </div>
        <div className="mr-10 text-white">
          <ul className="hidden md:flex">
<<<<<<< HEAD
            {EventLinks.map(({ Event, Link }) => (
              <a href={Link}>
                <li className="p-4">{Event}</li>
              </a>
            ))}
            <button className="p-2 rounded m-2 uppercase hover:bg-red-500 hover:text-white transition duration-500">
              registration
            </button>
=======
            {EventLinks.map(({ Event, Link }) =>
              <a href={Link}>
                <li className="p-4">
                  {Event}
                </li>
              </a>
            )}
            <button className="p-2 rounded m-2 uppercase hover:bg-red-500 hover:text-white transition duration-500">registration</button>
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
              ? "md:hidden fixed left-0 top-0 w=[60%] h-full border-r bg-black text-white border-r-white-900 ease-in-out duration-500"
              : "fixed hidden"
          }
        >
          <ul className="pt-24 ">
            {EventLinks.map(({ Event, Link }) =>
              <a href={Link}>
                <li className="p-4 border-b border-gray-600">
                  {Event}
                </li>
              </a>
            )}

>>>>>>> main
          </ul>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
export default Navbar;
