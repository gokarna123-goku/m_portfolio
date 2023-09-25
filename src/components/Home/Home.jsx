import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { ArrowUpRight } from "react-bootstrap-icons";

const Home = () => {
  return (
    <>
      <div className="hero_img px-32 relative">
        {/* <div className="animate-ping h-16 w-16 rounded-full absolute top-80 left-10 bg-sky-400 duration-1000 ease-out delay-1000 opacity-5"></div> */}
        <div className="w-2/4 mt-8">
          {/* <h6 className="text-slate-400 mb-2 text-xl">Hey 👋 There, It's</h6> */}
          <p className="text-gray-400  text-2xl font-medium tracking-[0.05rem] mb-4">
            Meet a Front~End Developer💻,
          </p>
          <h1 className="text-slate-100 text-8xl font-black leading-[7.3rem] tracking-[0.12rem] mb-8">
            Mr. <span className="text-green-400">Gokarna</span> Adhikari!
          </h1>
          <Link className="flex items-center text-xl text-green-500 text-left font-medium px-0 py-2 rounded-md hover:text-green-600 ease-out duration-1000">
            Say Hello <ArrowUpRight className="ms-2 text-lg" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
