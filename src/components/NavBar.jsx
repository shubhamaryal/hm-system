import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="absolute z-50 flex items-center justify-around gap-75 h-10.5 w-full top-12">
      <div className="text-4xl text-amber-500 font-light">
        Table<span className="font-bold">Booking</span>
      </div>
      <div className="flex items-center gap-7.5">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `font-bold text-[16px] px-5 py-2.5 transition duration-300 ${
                isActive
                  ? "text-amber-500"
                  : "text-gray-600 hover:text-gray-900"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
        <div className="flex items-center gap-3.25 text-[16px] font-bold">
          <button className="px-5 py-2.5 cursor-pointer text-amber-500 border border-amber-300 rounded-md hover:bg-gray-100 transition duration-300">
            Sign Up
          </button>
          <button className="px-5 py-2.5 cursor-pointer bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
