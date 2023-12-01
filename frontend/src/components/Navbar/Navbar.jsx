import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navbar section */}
      <div className="bg-white fixed top-10 left-0 right-0 w-full z-50">
        <div className="container mx-auto">
          <div className="shadow-lg px-4 py-2 flex justify-end">
            <ul className="flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-10 font-Poppins text-lg font-semibold">
              {/* Navbar Section items */}
              <div className="flex gap-20 items-center ">
                <NavLink to="/form">
                  <li>Form</li>
                </NavLink>
                <NavLink to="/blog">
                  <li>Blog</li>
                </NavLink>
                <NavLink to="/contact">
                  <li>Contact</li>
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Navbar;
