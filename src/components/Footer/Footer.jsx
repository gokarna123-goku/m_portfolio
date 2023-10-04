import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Github,
  Youtube,
  Twitch,
  Twitter,
  Linkedin,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-slate-950 lg:px-32 md:px-16 sm:px-10 px-10 py-16">
        <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col flex-col">
          <h1 className="text-slate-400  lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-extrabold tracking-widest lg:mr-16 md:mr-15 sm:mr-0 mr-0 lg:mb-0 md:mb-1 sm:mb-10 mb-10">
            Have a project?
          </h1>
          <button className="bg-green-700 text-lg text-slate-300 hover:bg-green-800 hover:text-slate-200 duration-700 ease-out px-6 py-2 rounded-md lg:ml-16 md:ml-15 sm:ml-0 ml-0 flex items-center">
            Let's talk <ArrowRight className="ml-2" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-5 my-16 flex-wrap">
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Github className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Instagram className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Youtube className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Linkedin className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Facebook className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Twitter className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Twitch className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
        </div>
        <div className="divider lg:my-7 md:my-6 sm:my-4 my-3 w-full h-[0.6px]"></div>
        <div className="flex items-center justify-center text-slate-700 font-2xl font-normal">
            Copyright &copy; 2023 <span className="text-green-400/10">Goku</span>. All right reserved!
        </div>
      </div>
    </>
  );
};

export default Footer;
