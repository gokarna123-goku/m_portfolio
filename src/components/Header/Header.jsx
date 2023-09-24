import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="w-full bg-slate-950/30 backdrop-blur-[6px] py-6 px-32 shadow flex items-center justify-between fixed top-0">
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
  );
};

export default Header;
