import React from "react";
import SingleService from "./SingleService/SingleService";

const Service = () => {
  return (
    <>
      <div className="px-32 py-16">
        <h1 className="text-slate-100 text-5xl text-center font-extrabold tracking-wider mb-12">
          My Services
        </h1>
        <div className="w-full h-auto">
            <SingleService />
        </div>
      </div>
    </>
  );
};

export default Service;
