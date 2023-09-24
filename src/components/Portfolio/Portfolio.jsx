import React from "react";
import SinglePortfolio from "./SinglePortfolio/SinglePortfolio";

const Portfolio = () => {
  return (
    <>
      <div className="px-32 p-16">
        <h1 className="text-slate-100 text-5xl text-center font-extrabold tracking-wider mb-12">
          Our Works
        </h1>
        <SinglePortfolio />
        <SinglePortfolio />
        <div className="flex items-center justify-center">
        <button className="bg-transparent hover:bg-green-500/10 border-2 border-green-600 ease-out duration-700 px-7 py-2 rounded text-lg text-gray-300">Load more</button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
