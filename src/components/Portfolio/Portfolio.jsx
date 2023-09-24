import React from "react";
import { Eye } from "react-bootstrap-icons";

const Portfolio = () => {
  return (
    <>
      <div className="px-32 p-16">
        <h1 className="text-slate-100 text-5xl text-center font-extrabold tracking-wider mb-12">
          Our Works
        </h1>
        <div className="w-full h-auto">
          <div className="w-[30%] flex items-start flex-col shadow-md shadow-gray-900 hover:shadow-gray-900/60 border-2 border-gray-700/30 ease-out duration-700 rounded-md p-4">
            <div className="w-full h-[30vh] bg-green-900/20 rounded-md mb-5 overflow-hidden">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt="Portfolio Image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full h-auto flex items-center justify-between mb-5 px-1">
              <h6 className="text-green-600 text-sm">web development</h6>
              <div className="flex items-center gap-1">
                <Eye className="text-gray-300 text-sm" />
              </div>
            </div>
            <h1 className="text-green-600 text-2xl font-medium tracking-wide">
              E-Commerce Website
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
