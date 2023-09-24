import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="px-32 p-16">
        <h1 className="text-slate-100 text-5xl text-center font-extrabold tracking-wider mb-12">
          Our Works
        </h1>
        <div className="w-full h-auto">
          <div className="w-[30%] flex items-start flex-col shadow border-2 border-gray-700/30 ease-out duration-700 rounded-md p-3">
            <div className="w-full h-[25vh] bg-green-900/20 rounded-md mb-4 overflow-hidden">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt="Portfolio Image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h1 className="text-green-600 text-2xl font-medium tracking-wide">E-Commerce Website</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
