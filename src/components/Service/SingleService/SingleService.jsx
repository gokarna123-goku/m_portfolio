import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import Web from "../../../assets/web.png";
import App from "../../../assets/app.png";
import UxUi from "../../../assets/design.png";

const serviceData = {
  service: {
    id: 1,
    name: "Web Development",
    img: {Web},
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, eveniet assumenda atque vitae dolorem numquam.",
  },
  service: {
    id: 2,
    name: "App Development",
    img: {App},
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, eveniet assumenda atque vitae dolorem numquam.",
  },
  service: {
    id: 3,
    name: "Ux/Ui Design",
    img: {UxUi},
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
        <h1 className="text-gray-300 text-2xl font-medium tracking-wider mb-3">
          Website Development
        </h1>
        <p className="text-base text-gray-500 text-center mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          incidunt voluptatum consectetur iste! Ea, accusantium...
        </p>
        <Link className="text-green-400 text-[1.1rem] flex items-center gap-1">Read more <ArrowRight /></Link>
      </div>
      <div className="w-[30%] flex items-center justify-center flex-col bg-slate-900/60 hover:bg-gray-950/20 ease-out duration-700 shadow rounded py-12 px-8">
        <div className="w-[60px] h-[60px] flex items-center justify-center gap-1 bg-green-500/40 rounded mb-6">
          <img
            src={App}
            alt="App Development"
            className="w-[50px] h-[50px] object-cover object-center"
          />
        </div>
        <h1 className="text-gray-300 text-2xl font-medium tracking-wider mb-3">
          Mobile App Development
        </h1>
        <p className="text-base text-gray-500 text-center mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          incidunt voluptatum consectetur iste! Ea, accusantium...
        </p>
        <Link className="text-green-400 text-[1.1rem] flex items-center gap-1">Read more <ArrowRight /></Link>
      </div>
      <div className="w-[30%] flex items-center justify-center flex-col bg-slate-900/60 hover:bg-gray-950/20 ease-out duration-700 shadow rounded py-12 px-8">
        <div className="w-[60px] h-[60px] flex items-center justify-center gap-1 bg-green-500/40 rounded mb-6">
          <img
            src={UxUi}
            alt="Ux/Ui Design"
            className="w-[50px] h-[50px] object-cover object-center"
          />
        </div>
        <h1 className="text-gray-300 text-2xl font-medium tracking-wider mb-3">
          Ux/Ui Design
        </h1>
        <p className="text-base text-gray-500 text-center mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          incidunt voluptatum consectetur iste! Ea, accusantium...
        </p>
        <Link className="text-green-400 text-[1.1rem] flex items-center gap-1">Read more <ArrowRight /></Link>
      </div>
    </div>
  );
};

export default SingleService;
