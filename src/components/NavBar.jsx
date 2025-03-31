import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about-us" },
  ];

  // Check if user is logged in (this would typically use a more robust auth system)
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(userLoggedIn);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    navigate("/");
  };

  const handleProfileClick = () => {
    setShowProfileMenu(false);
    navigate("/profile");
  };

  return (
    <nav className="absolute z-50 w-full top-12">
      <div className="flex items-center justify-around gap-75 h-10.5 w-full px-4 md:px-0">
        <div className="text-4xl text-amber-500 font-light">
          Table<span className="font-bold">Booking</span>
        </div>

        <button
          className="md:hidden text-gray-600 hover:text-amber-500"
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>

        <div className="hidden md:flex items-center gap-7.5">
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
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                >
                  <User size={20} />
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={handleProfileClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className="px-5 py-2.5 cursor-pointer text-amber-500 border border-amber-300 rounded-md hover:bg-amber-500 hover:text-white transition duration-300"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/login"
                  className="px-5 py-2.5 cursor-pointer bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300"
                >
                  Book Now
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col gap-2 z-50">
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
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/profile"
                  className="px-5 py-2.5 text-center cursor-pointer text-amber-500 border border-amber-300 rounded-md hover:bg-amber-500 hover:text-white transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="px-5 py-2.5 text-center cursor-pointer bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className="px-5 py-2.5 text-center cursor-pointer text-amber-500 border border-amber-300 rounded-md hover:bg-amber-500 hover:text-white transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/login"
                  className="px-5 py-2.5 text-center cursor-pointer bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
