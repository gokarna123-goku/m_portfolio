import React from "react";
import { PersonFill, EnvelopePaperFill } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div className="px-32 p-16">
      <h1 className="text-slate-100 text-5xl text-center font-extrabold tracking-wider mb-12">
        Contact Me
      </h1>
      <div className="w-full h-auto flex items-start justify-between gap-10">
        <div className="w-[40%] h-auto bg-green-600/10">Hello data</div>
        <div className="w-[50%] h-auto bg-green-700/20 p-5 rounded-md shadow">
          <h2 className="text-gray-300 text-2xl font-medium mb-4">Write a message</h2>
          <div className="w-full h-full flex items-center gap-8 mb-1">
            <div className="flex items-center bg-slate-700/40 rounded w-full h-[45px] overflow-hidden mb-6">
              <div className="w-[14%] h-full p-2 bg-green-400/10">
                <PersonFill className="w-full h-full" />
              </div>
              <input
                type="text"
                className="w-[85%] h-full bg-transparent border-none outline-none px-4 text-base text-gray-500 placeholder:text-gray-500"
                placeholder="Enter your fullname"
              />
            </div>
            <div className="flex items-center bg-slate-700/40 rounded w-full h-[45px] overflow-hidden mb-6">
              <div className="w-[14%] h-full p-2 bg-green-400/10">
                <EnvelopePaperFill className="w-full h-full" />
              </div>
              <input
                type="text"
                className="w-[85%] h-full bg-transparent border-none outline-none px-4 text-base text-gray-500 placeholder:text-gray-500"
                placeholder="Enter your email id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
