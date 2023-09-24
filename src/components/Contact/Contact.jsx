import React from "react";
import { UpcScan } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div className="px-32 p-16">
      <h1 className="text-slate-100 text-5xl text-center font-extrabold tracking-wider mb-12">
        Contact Me
      </h1>
      <div className="w-full h-auto flex items-start justify-between gap-10">
        <div className="w-[40%] h-auto bg-green-600/10">Hello data</div>
        <div className="w-[50%] h-auto">
          <div className="flex items-center bg-slate-700/40 rounded w-full h-[42px] overflow-hidden">
            <div className="w-[8%] h-full p-2 bg-green-400/10">
                <UpcScan className="w-full h-full"/>
            </div>
            <input
              type="text"
              className="w-[90%] h-full bg-transparent border-none outline-none px-4 text-base text-gray-500 placeholder:text-gray-500"
              placeholder="Enter your fullname"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
