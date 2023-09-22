import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-slate-950 px-32 py-16">
        <div className="flex items-center justify-center mb-6">
            <h1 className="text-slate-400 text-7xl font-extrabold tracking-widest mx-8">Have a Project?</h1>
            <button className="bg-indigo-900 px-4 py-2 rounded-md mx-8">Let's Talk</button>
        </div>
        <div className="divide-slate-600"></div>
      </div>
    </>
  );
};

export default Footer;
