import React from "react";
import { Link } from "react-router-dom";
import { Eye, ArrowRight } from "react-bootstrap-icons";

const SingleBlog = () => {
  return (
    <div className="w-full h-auto flex items-start justify-center flex-wrap gap-11 mb-11">
      <div className="w-[30%] flex items-start flex-col bg-green-800/20 shadow-md shadow-gray-900 hover:shadow-gray-900/60 ease-out duration-700 rounded-md  overflow-hidden">
        <div className="w-full h-[30vh] bg-green-900/20 mb-5 overflow-hidden">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt="Portfolio Image"
            className="w-full h-full object-cover object-center hover:rotate-6 hover:scale-125 ease-out duration-700"
          />
        </div>
        <div className="p-4">
          <div className="w-full h-auto flex items-center justify-between mb-5 px-1">
            <h6 className="text-green-600 text-sm">by: Admin</h6>
            <div className="flex items-center gap-1 cursor-pointer">
              <Eye className="text-gray-300 text-base" />
              <p className="text-gray-300 text-sm">4 min. read</p>
            </div>
          </div>
          <Link className="text-gray-100/70 text-2xl font-medium tracking-wide block mb-4">
            Multi-Vendor Shoes Store Website
          </Link>
          <p className="text-gray-500 text-base mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            enim. Id fugit quo praesentium utamet consectetur...
          </p>
        </div>
      </div>
      <div className="w-[30%] flex items-start flex-col bg-green-800/20 shadow-md shadow-gray-900 hover:shadow-gray-900/60 ease-out duration-700 rounded-md  overflow-hidden">
        <div className="w-full h-[30vh] bg-green-900/20 mb-5 overflow-hidden">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt="Portfolio Image"
            className="w-full h-full object-cover object-center hover:rotate-6 hover:scale-125 ease-out duration-700"
          />
        </div>
        <div className="p-4">
          <div className="w-full h-auto flex items-center justify-between mb-5 px-1">
            <h6 className="text-green-600 text-sm">web development</h6>
            <div className="flex items-center gap-1 cursor-pointer">
              <Eye className="text-gray-300 text-base" />
              <p className="text-gray-300 text-sm">10k</p>
            </div>
          </div>
          <Link className="text-gray-100/70 text-2xl font-medium tracking-wide block mb-4">
            Multi-Vendor Shoes Store Website
          </Link>
          <p className="text-gray-500 text-base mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            enim. Id fugit quo praesentium utamet consectetur...
          </p>
        </div>
      </div>
      <div className="w-[30%] flex items-start flex-col bg-green-800/20 shadow-md shadow-gray-900 hover:shadow-gray-900/60 ease-out duration-700 rounded-md  overflow-hidden">
        <div className="w-full h-[30vh] bg-green-900/20 mb-5 overflow-hidden">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt="Portfolio Image"
            className="w-full h-full object-cover object-center hover:rotate-6 hover:scale-125 ease-out duration-700"
          />
        </div>
        <div className="p-4">
          <div className="w-full h-auto flex items-center justify-between mb-5 px-1">
            <h6 className="text-green-600 text-sm">by: Admin</h6>
            <div className="flex items-center gap-1 cursor-pointer">
              <Eye className="text-gray-300 text-base" />
              <p className="text-gray-300 text-sm">4 min. read</p>
            </div>
          </div>
          <Link className="text-gray-100/70 text-2xl font-medium tracking-wide block mb-4">
            Multi-Vendor Shoes Store Website
          </Link>
          <p className="text-gray-500 text-base mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            enim. Id fugit quo praesentium utamet consectetur...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
