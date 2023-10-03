import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { HouseFill, House, PersonVcardFill, PersonVcard, Sliders, Briefcase, BriefcaseFill, PersonRolodex } from "react-bootstrap-icons";

const Header = () => {
  return (
    <>
      <div className="w-full h-auto relative flex items-center justify-center">
        {/* For Smaller Devices */}
        <nav className="md:w-[70%] sm:w-[50%] w-[90%] bg-slate-900/60 border border-green-400/10 backdrop-blur-[6px] md:py-5 sm:py-4 py-4 md:px-10 sm:px-7 px-5 shadow-lg shadow-gray-800 lg:hidden md:flex sm:flex flex items-center justify-between fixed bottom-10 rounded-full">
          <ul className="w-full h-auto list-none flex items-center justify-between">
            <li>
              <Link
                to="/"
                className="text-green-400 bg-green-400/10  text-xl rounded-xl block font-medium py-1 px-2  hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"
              >
                <House className="md:text-2xl sm:text-xl text-xl"/>
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                className="text-green-400  text-xl rounded-xl block font-medium py-1 px-2 hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"
              >
                <PersonVcard className="md:text-2xl sm:text-xl text-xl" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-green-400  text-xl rounded-xl block font-medium py-1 px-2  hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"
              >
                <Sliders className="md:text-2xl sm:text-xl text-xl" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-green-400  text-xl rounded-xl block font-medium py-1 px-2  hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"
              >
                <Briefcase className="md:text-2xl sm:text-xl text-xl" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-green-400  text-xl rounded-xl block font-medium py-1 px-2  hover:bg-green-400/10 active:bg-green-400/10 focus:outline-none ease-out duration-700"
              >
                <PersonRolodex className="md:text-2xl sm:text-xl text-xl" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* For Larger Devices */}
        <nav className="w-full bg-slate-950/30 backdrop-blur-[6px] py-6 px-32 shadow lg:flex md:hidden sm:hidden hidden items-center justify-between fixed top-0">
          <Link className="text-green-500 text-2xl font-medium tracking-wider">
            Port<span className="text-green-600">folio</span>
          </Link>
          <ul className="list-none flex items-center gap-7">
            <li>
              <Link
                to="/"
                className="text-green-400 text-xl font-medium hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                className="text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#service"
                className="text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#portfolio"
                className="text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="#blog"
                className="text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
