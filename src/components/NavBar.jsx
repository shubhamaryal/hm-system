import React from "react";

const Navbar = () => {
  const navItems = ["Home", "Rooms", "Services", "About Us"];

  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <div className="text-2xl text-amber-500 font-light">
        Table<span className="font-bold">Booking</span>
      </div>
      <div className="flex items-center space-x-6">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            {item}
          </a>
        ))}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300">
            Sign Up
          </button>
          <button className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;