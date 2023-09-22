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
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-slate-950 px-32 py-16">
        <div className="flex items-center justify-between">
          <h1 className="text-slate-400 text-7xl font-extrabold tracking-widest ml-32">
            Have a Project?
          </h1>
          <button className="bg-green-700 text-lg text-slate-300 px-6 py-2 rounded-md mr-32 flex items-center">
            Let's talk <ArrowRight className="ml-2" />
          </button>
        </div>
        <div className="divide-slate-600 my-12 w-full h-[0.3px] bg-slate-800"></div>
        <div className="flex items-center justify-center">
          <Link className="p-3 rounded-full  text-2xl"> <Facebook className="text-xl text-slate-100" /> </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
