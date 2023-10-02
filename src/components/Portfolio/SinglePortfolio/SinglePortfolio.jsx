import React from "react";
import { Link } from "react-router-dom";
import { Eye, ArrowRight } from "react-bootstrap-icons";

const SinglePortfolio = () => {
  return (
    <div className="w-full h-auto flex items-start justify-center flex-wrap gap-10 mb-10">
      <div className="lg:w-[31%] md:w-full sm:w-full w-full flex items-start flex-col shadow-md shadow-gray-900 hover:shadow-gray-900/60 border-2 border-gray-700/30 ease-out duration-700 rounded-md p-4">
        <div className="w-full lg:h-[30vh] md:h-[45vh] sm:h-[23vh] h-[23vh] bg-green-900/20 rounded-md mb-5 overflow-hidden">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt="Portfolio Image"
            className="w-full h-full object-cover object-center hover:rotate-6 hover:scale-125 ease-out duration-700"
          />
        </div>
        <div className="w-full h-auto flex items-center justify-between mb-5 px-1">
          <h6 className="text-green-600 text-sm">web development</h6>
          <div className="flex items-center gap-1 cursor-pointer">
            <Eye className="text-gray-300 text-base" />
            <p className="text-gray-300 text-sm">10k</p>
          </div>
        </div>
        <h1 className="text-gray-100/60 lg:text-2xl md:text-2xl sm:text-[1.3rem] text-[1.3rem] font-medium tracking-wide mb-4">
          Multi-Vendor Shoes Store Website
        </h1>
        <Link className="text-green-400 text-[1.1rem] flex items-center gap-1 mb-3">
          Read more <ArrowRight />
        </Link>
      </div>
      <div className="lg:w-[31%] md:w-full sm:w-full w-full flex items-start flex-col shadow-md shadow-gray-900 hover:shadow-gray-900/60 border-2 border-gray-700/30 ease-out duration-700 rounded-md p-4">
        <div className="w-full lg:h-[30vh] md:h-[45vh] sm:h-[40vh] h-[25vh] bg-green-900/20 rounded-md mb-5 overflow-hidden">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt="Portfolio Image"
            className="w-full h-full object-cover object-center hover:rotate-6 hover:scale-125 ease-out duration-700"
          />
        </div>
        <div className="w-full h-auto flex items-center justify-between mb-5 px-1">
          <h6 className="text-green-600 text-sm">web development</h6>
          <div className="flex items-center gap-1 cursor-pointer">
            <Eye className="text-gray-300 text-base" />
            <p className="text-gray-300 text-sm">10k</p>
          </div>
        </div>
        <h1 className="text-gray-100/60 lg:text-2xl md:text-2xl sm:text-[1.3rem] text-[1.3rem] font-medium tracking-wide mb-4">
          PS5 Gaming Controller Store Website
        </h1>
        <Link className="text-green-400 text-[1.1rem] flex items-center gap-1 mb-3">
          Read more <ArrowRight />
        </Link>
      </div>
      <div className="lg:w-[31%] md:w-full sm:w-full w-full flex items-start flex-col shadow-md shadow-gray-900 hover:shadow-gray-900/60 border-2 border-gray-700/30 ease-out duration-700 rounded-md p-4">
        <div className="w-full lg:h-[30vh] md:h-[45vh] sm:h-[35vh] h-[25vh] bg-green-900/20 rounded-md mb-5 overflow-hidden">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt="Portfolio Image"
            className="w-full h-full object-cover object-center hover:rotate-6 hover:scale-125 ease-out duration-700"
          />
        </div>
        <div className="w-full h-auto flex items-center justify-between mb-5 px-1">
          <h6 className="text-green-600 text-sm">web development</h6>
          <div className="flex items-center gap-1 cursor-pointer">
            <Eye className="text-gray-300 text-base" />
            <p className="text-gray-300 text-sm">10k</p>
          </div>
        </div>
        <h1 className="text-gray-100/60 lg:text-2xl md:text-2xl sm:text-[1.3rem] text-[1.3rem] font-medium tracking-wide mb-4">
          Multi-Vendor Shoes Store Website
        </h1>
        <Link className="text-green-400 text-[1.1rem] flex items-center gap-1 mb-3">
          Read more <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SinglePortfolio;
