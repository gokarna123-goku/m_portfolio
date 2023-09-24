import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import Web from "../../../assets/web.png";

const serviceData = {
  data: {
    id: 1,
    name: "Web Development",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, eveniet assumenda atque vitae dolorem numquam.",
  },
};

const SingleService = () => {
  return (
    <div className="flex items-start justify-center gap-12 flex-wrap">
      <div className="w-[30%] flex items-center justify-center flex-col bg-slate-900/60 hover:bg-gray-950/20 ease-out duration-700 shadow rounded py-12 px-8">
        <div className="w-[60px] h-[60px] flex items-center justify-center gap-1 bg-green-500/40 rounded mb-6">
          <img
            src={Web}
            alt="Web Development"
            className="w-[50px] h-[50px] object-cover object-center"
          />
        </div>
        <h1 className="text-gray-300 text-2xl font-bold tracking-wider mb-3">
          Website Development
        </h1>
        <p className="text-base text-gray-500 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          incidunt voluptatum consectetur iste! Ea, accusantium...
        </p>
      </div>
      <div className="w-[30%] flex items-center justify-center flex-col bg-slate-900/60 hover:bg-gray-950/20 ease-out duration-700 shadow rounded py-12 px-4">
        <h1 className="text-slate-300 text-2xl font-bold">Hello Services</h1>
      </div>
      <div className="w-[30%] flex items-center justify-center flex-col bg-slate-900/60 hover:bg-gray-950/20 ease-out duration-700 shadow rounded py-12 px-4">
        <h1 className="text-slate-300 text-2xl font-bold">Hello Services</h1>
      </div>
    </div>
  );
};

export default SingleService;
