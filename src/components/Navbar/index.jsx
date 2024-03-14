import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHouseDoorFill, BsTelephoneFill } from 'react-icons/bs';
import SearchBar from '../SearchBar/index'; // Import the SearchBar component


function Navbar({ jobs, setFilteredJobs }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar fixed top-0 left-0 w-full h-10 flex items-center justify-between text-gray-500 bg-slate-300 z-50'>
      <div className='flex items-center'>
        {/* Logo */}
        <div className='text-3xl pl-4 md:pl-8 font-bold'>
          <Link to="/" className="flex items-center">
          
            <BsHouseDoorFill className="mr-2" /> 
          </Link>
        </div>
        {/* Navbar items */}
        <div className={`hidden md:flex items-center space-x-6 ml-8`}>
          <Link to="/contact" className="flex items-center">
            <BsTelephoneFill className="mr-2" /> Contact
          </Link>
          {/* Add other navbar items here */}
        </div>
      </div>
      {/* SearchBar and Toggle button */}
      <div className='flex items-center mr-4'>
        <SearchBar jobs={jobs} setFilteredJobs={setFilteredJobs} />
        {/* Toggle button for mobile */}
        <div className="md:hidden ml-4">
          <button onClick={toggleNavbar}>
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Responsive Navbar items */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/contact" className="flex items-center my-2">
          <BsTelephoneFill className="mr-2" /> Contact
        </Link>
        {/* Add other responsive navbar items here */}
      </div>
    </div>
  );
}

export default Navbar;
