import React from "react";
import {
  PersonFill,
  EnvelopePaperFill,
  TelephoneFill,
  ChatDotsFill,
} from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div className="lg:px-32 md:px-16 sm:px-10 px-10 p-16">
      <h1 className="text-slate-100  lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-center font-extrabold tracking-wider mb-12">
        Contact Me
      </h1>
      <div className="w-full h-auto flex items-center justify-between lg:flex-row md:flex-row sm:flex-col flex-col gap-10">
        <div className="lg:w-[45%] md:w-[45%] sm:w-full w-full h-auto">
          <iframe
            className="w-full aspect-[16/13] rounded-md"
            src="https://maps.google.com/maps?hl=en&amp;q=University of Oxford&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="w-[50%] h-auto bg-green-700/10 py-6 px-8 rounded-md shadow">
          <h2 className="text-gray-300 text-2xl font-medium mb-5">
            Write a message
          </h2>
          <div className="flex items-center bg-slate-700/40 rounded w-full h-[50px] overflow-hidden mb-6">
            <div className="w-[8%] h-full p-3 bg-green-400/10">
              <PersonFill className="w-full h-full text-gray-900 text-[0.6rem]" />
            </div>
            <input
              type="text"
              className="w-[90%] h-full bg-transparent border-none outline-none px-4 text-base text-gray-400/70 placeholder:text-gray-400/70"
              placeholder="Enter your fullname"
            />
          </div>
          <div className="flex items-center bg-slate-700/40 rounded w-full h-[50px] overflow-hidden mb-6">
            <div className="w-[8%] h-full p-3 bg-green-400/10">
              <EnvelopePaperFill className="w-full h-full text-gray-900" />
            </div>
            <input
              type="text"
              className="w-[85%] h-full bg-transparent border-none outline-none px-4 text-base text-gray-400/70 placeholder:text-gray-400/70"
              placeholder="Enter your email id"
            />
          </div>
          <div className="flex items-center bg-slate-700/40 rounded w-full h-[50px] overflow-hidden mb-6">
            <div className="w-[8%] h-full p-3 bg-green-400/10">
              <TelephoneFill className="w-full h-full text-gray-900 text-sm" />
            </div>
            <input
              type="text"
              className="w-[85%] h-full bg-transparent border-none outline-none px-4 text-base text-gray-400/70 placeholder:text-gray-400/70"
              placeholder="Enter your email id"
            />
          </div>
          <div className="flex items-start bg-slate-700/40 rounded w-full h-[120px] overflow-hidden mb-6">
            <div className="w-[8%] h-auto p-3 bg-green-400/10">
              <ChatDotsFill className="w-full h-full text-gray-900 text-sm" />
            </div>
            <textarea
              cols="30"
              rows="4"
              className="w-[90%] h-full outline-none border-none bg-transparent p-4 text-base text-gray-400/70 placeholder:text-gray-400/70 resize-none"
              placeholder="Type a message..."
            ></textarea>
          </div>
          <button className="bg-green-600 px-10 py-2 rounded text-lg text-gray-950">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
