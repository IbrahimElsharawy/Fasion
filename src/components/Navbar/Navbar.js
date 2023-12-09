import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { AiTwotoneShopping } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleClose = () => {
    setClick(false); // Close the mobile menu
  };

  const navlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#E65540" : "black",
    };
  };

  const borderBottoms = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#E65540" : "black",
      borderBottom: isActive ? "2px solid #E65540" : "none",
    };
  };
  return (
    <div className="w-screen h-[80px]  top-0 bg-white shadow-md px-4">
      <div className="px-2 flex justify-between items-center w-full h-full max-w-[1240px] mx-auto">
        <NavLink
          to="/"
          className="text-2xl md:text-4xl font-bold  hidden md:flex"
        >
          Fashe <span style={{ color: "#E65540" }}>.</span>
        </NavLink>
        <div className="hidden md:flex ">
          <NavLink
            style={navlinkStyles}
            className="px-4 "
            to="/"
            onClick={handleClose}
          >
            Home
          </NavLink>
          <NavLink
            style={navlinkStyles}
            className="px-4"
            to="/shop"
            onClick={handleClose}
          >
            Shop
          </NavLink>
          <NavLink
            style={navlinkStyles}
            className="px-4"
            to="/features"
            onClick={handleClose}
          >
            Features
          </NavLink>
          <NavLink
            style={navlinkStyles}
            className="px-4"
            to="/blog"
            onClick={handleClose}
          >
            Blog
          </NavLink>
          <NavLink
            style={navlinkStyles}
            className="px-4"
            to="/about"
            onClick={handleClose}
          >
            About
          </NavLink>
          <NavLink
            style={navlinkStyles}
            className="px-4"
            to="/contact"
            onClick={handleClose}
          >
            Contact
          </NavLink>
        </div>

        <div
          className="md:hidden cursor-pointer text-orange-500 "
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <div className="flex justify-center items-center">
          <div className="mr-4 hidden md:flex cursor-pointer ">
            <BiSolidUser size={20} />
          </div>

          {/* Shopping cart */}
          <NavLink
            to="/cart"
            className="rounded-full border-2 px-2 py-2 border-solid  relative"
          >
            <AiTwotoneShopping size={20} />
            <div className="absolute rounded-full px-2 text-white top-[-15px] right-[-10px] bg-black">
              3
            </div>
          </NavLink>
          {/* Shopping cart */}
        </div>
      </div>
      <div
        className={
          click
            ? "absolute left-0 bg-white w-full px-8 flex flex-col"
            : "hidden"
        }
      >
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className=" w-full py-3"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className="py-3  w-full"
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className=" w-full py-3"
          to="/features"
        >
          Features
        </NavLink>
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className="py-3  w-full mb-3"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className="py-3  w-full mb-3"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className="py-3  w-full mb-3"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
