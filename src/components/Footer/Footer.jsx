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
      <div className="w-full bg-slate-950 px-32 py-16">
        <div className="flex items-center justify-center">
          <h1 className="text-slate-400 text-7xl font-extrabold tracking-widest mr-16">
            Have a project?
          </h1>
          <button className="bg-green-700 text-lg text-slate-300 hover:bg-green-800 hover:text-slate-200 duration-700 ease-out px-6 py-2 rounded-md ml-16 flex items-center">
            Let's talk <ArrowRight className="ml-2" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-5 my-16">
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Github className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Instagram className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Youtube className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Linkedin className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Facebook className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Twitter className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
          <Link className="p-3 rounded bg-slate-900 hover:shadow-sm text-2xl"> <Twitch className="text-2xl text-slate-500 hover:text-green-500 duration-700 ease-out" /> </Link>
        </div>
        <div className="divider my-7 w-full h-[0.6px]"></div>
        <div className="flex items-center justify-center text-slate-700 font-2xl font-normal">
            Copyright &copy; 2023 Goku. All right reserved!
        </div>
      </div>
    </>
  );
};

export default Footer;
