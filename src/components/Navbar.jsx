import { useState } from "react";
import logo from "../assets/logo.png"; // Import logo image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#4f46e5] text-white font-medium font-Inter">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
           <a href="#" className="hover:underline uppercase">Services</a>
          <a href="#" className="hover:underline uppercase">About Us</a>
          <a href="#" className="hover:underline uppercase">Contact Us</a>
          <a href="#" className="hover:underline uppercase">Careers</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <span className="text-4xl text-black font-bold">&times;</span>
          ) : (
            <span className="text-2xl text-white">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-4 pb-4">
          <a href="#" className="block py-4 uppercase">Home</a>
          <a href="#" className="block py-4 uppercase">Services</a>
          <a href="#" className="block py-4 uppercase">About Us</a>
          <a href="#" className="block py-4 uppercase">Contact Us</a>
          <a href="#" className="block py-4 uppercase">Careers</a>
        </div>
      )}
    </header>
  );
}
