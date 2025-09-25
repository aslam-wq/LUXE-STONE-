import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu after click
    }
  };
  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      // navigate to home, then scroll
      navigate("/");
      setTimeout(() => {
        const heroSection = document.getElementById("hero");
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // small delay for page load
    } else {
      // already on home, just scroll
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={handleHomeClick}
        >
          LUXE STONE
        </h1>


        

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li
            className="hover:text-gray-700 cursor-pointer"
            onClick={handleHomeClick}
          >
            Home
          </li>
          <li
            className="hover:text-gray-700 cursor-pointer"
            onClick={() => handleScroll("services")}
          >
            Services
          </li>
          <li
            className="hover:text-gray-700 cursor-pointer"
            onClick={() => handleScroll("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="hover:text-gray-700 cursor-pointer"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            className=" px-4 py-2 cursor-pointer rounded-xl border-1 border-black text-black font-medium bg-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handleScroll("contact")}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            <li
              className="hover:text-gray-700 cursor-pointer"
              onClick={() => handleScroll("hero")}
            >
              Home
            </li>
            <li
              className="hover:text-gray-700 cursor-pointer"
              onClick={() => handleScroll("services")}
            >
              Services
            </li>
            <li
              className="hover:text-gray-700 cursor-pointer"
              onClick={() => handleScroll("portfolio")}
            >
              Property
            </li>
            <li
              className="hover:text-gray-700 cursor-pointer"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </li>
            <div className="flex space-x-4 pt-4">
              <button className="text-gray-600">Login</button>
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
