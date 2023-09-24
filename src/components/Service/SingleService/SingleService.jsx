import React from "react";

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
    <div className="flex items-start justify-center gap-8">
    <div className="w-1/3 flex items-center justify-center flex-col bg-slate-900/60 hover:bg-gray-950/20 ease-out duration-700 shadow rounded py-5 px-4">
        <h1 className="text-slate-300 text-2xl font-bold">Hello Services</h1>
    </div>
    <div className="w-1/3 flex items-center justify-center flex-col bg-slate-900/60 hover:bg-gray-950/20 ease-out duration-700 shadow rounded py-5 px-4">
        <h1 className="text-slate-300 text-2xl font-bold">Hello Services</h1>
    </div>
    <div className="w-1/3 flex items-center justify-center flex-col bg-slate-900/60 hover:bg-gray-950/20 ease-out duration-700 shadow rounded py-5 px-4">
        <h1 className="text-slate-300 text-2xl font-bold">Hello Services</h1>
    </div>
    </div>
  );
};

export default SingleService;
