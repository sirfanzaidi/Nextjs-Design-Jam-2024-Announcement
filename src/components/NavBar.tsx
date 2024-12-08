import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Top Header */}
      <header className="bg-black shadow-sm border-b">
        <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-4 md:px-8 w-full">
          <div className="text-center flex-1 text-[12px] md:text-[14px]">
            Sign up and get 20% off to your first order.{" "}
            <b>
              <u>Sign Up Now</u>
            </b>
          </div>
          <div className="hidden md:flex space-x-2 items-center px-8 text-white text-lg">X</div>
        </div>
      </header>

      {/* Main Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-4 md:px-8 mt-2">
        {/* Logo */}
        <h1 className="text-[24px] md:text-[32px] font-extrabold text-black font-integral">
          SHOP.CO
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 md:space-x-8 font-Satoshi text-[14px] md:text-[16px] mt-4 md:mt-0">
          <a
            href="#"
            className="text-slate-600 hover:text-black flex items-center gap-1 md:gap-2"
          >
            Shop
            <IoIosArrowDown />
          </a>
          <a href="#" className="text-slate-600 hover:text-black">
            On Sale
          </a>
          <a href="#" className="text-slate-600 hover:text-black">
            New Arrivals
          </a>
          <a href="#" className="text-slate-600 hover:text-black">
            Brands
          </a>
        </nav>

        {/* Search Bar and Icons */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 w-full md:w-auto">
          {/* Search Input */}
          <div className="flex items-center bg-slate-100 rounded-full px-4 md:px-10 py-2 space-x-2 w-full md:w-[577px] h-[48px]">
            <CiSearch />
            <input
              type="text"
              placeholder="Search for products?"
              className="bg-slate-100 outline-none text-sm w-full"
            />
          </div>

          {/* Cart and Profile Icons */}
          <div className="flex space-x-4">
            <IoCartOutline className="text-[25px] md:text-[30px]" />
            <IoPersonCircleOutline className="text-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
