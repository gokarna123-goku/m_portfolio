import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { HouseFill, House, PersonVcardFill, PersonVcard, Sliders, Briefcase, BriefcaseFill, PersonRolodex } from "react-bootstrap-icons";

const Header = () => {
  return (
    <>
      <div className="w-full h-auto relative flex items-center justify-center">
        {/* For Smaller Devices */}
        <nav className="w-1/3 bg-slate-950/30 backdrop-blur-[6px] py-6 px-10 shadow flex items-center justify-between fixed bottom-10 rounded-full">
          <ul className="w-full h-auto list-none flex items-center justify-between">
            <li>
              <Link
                to="/"
                className="text-green-400 text-xl font-medium hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                <House />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-green-400 text-xl font-medium hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                <PersonVcard />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-green-400 text-xl font-medium hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                <Sliders />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-green-400 text-xl font-medium hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                <Briefcase />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-green-400 text-xl font-medium hover:text-green-400 active:text-green-400 focus:outline-none"
              >
                <PersonRolodex />
              </Link>
            </li>
          </ul>
        </nav>

        {/* For Larger Devices */}
        {/* <nav className="w-full bg-slate-950/30 backdrop-blur-[6px] py-6 px-32 shadow flex items-center justify-between fixed top-0">
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
        </nav> */}
      </div>
    </>
  );
};

export default Header;
