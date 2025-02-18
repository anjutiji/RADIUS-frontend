import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from './images/logo.png';




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
      setIsOpen(!isOpen);
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });
  }, [isOpen]);
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a192f] py-4 z-50">
      <div className="container mx-auto flex justify-between items-center pl-4"> {/* Added padding-left for right shift */}
        <div className="flex items-center">
        
        <Link to="/" className="flex items-center">
  <img src={logo} alt="Radius Logo" className="h-10 w-auto ml-2" /> {/* Added left margin for right shift */}
  <span className="text-white font-bold text-2xl ml-4">Radius</span> {/* Increased left margin for right shift */}
</Link>

        </div>
        <div className="hidden md:flex items-center">
        <Link to="/about" className="text-white hover:text-gray-300 transition duration-200 ease-in-out px-4">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-300 transition duration-200 ease-in-out px-4">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white hover:text-gray-300 transition duration-200 ease-in-out px-4" id="menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden md:hidden" id="mobile-menu">
        <div className="flex flex-col items-center">
          <Link to="/about" className="text-white hover:text-gray-300 transition duration-200 ease-in-out py-4">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition duration-200 ease-in-out py-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;