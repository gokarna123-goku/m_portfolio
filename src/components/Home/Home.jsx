import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { ArrowUpRight } from "react-bootstrap-icons";

const Home = () => {
  return (
    <>
      <div className="hero_img lg:px-32 md:px-16 sm:px-10 px-10 relative">
        {/* <div className="animate-ping h-16 w-16 rounded-full absolute top-80 left-10 bg-sky-400 duration-1000 ease-out delay-1000 opacity-5"></div> */}
        <div className="lg:w-2/4 md:w-2/3 sm:w-full mt-8">
          {/* <h6 className="text-slate-400 mb-2 text-xl">Hey 👋 There, It's</h6> */}
          <p className="text-gray-400  lg:text-2xl md:text-xl sm:text-xl text-xl font-medium tracking-[0.05rem] mb-4">
            Meet a Front~End Developer💻,
          </p>
          <h1 className="text-slate-100 lg:text-8xl md:text-6xl sm:text-6xl text-5xl font-black lg:leading-[7.3rem] tracking-[0.12rem] mb-8">
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
