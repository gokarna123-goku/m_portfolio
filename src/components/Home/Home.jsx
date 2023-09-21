import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="hero_img px-32">
        <div className="w-2/4">
          <h6 className="text-slate-400 mb-2 text-xl">Hey 👋 There, It's</h6>
          <h1 className="text-slate-100 text-8xl font-black leading-[7.3rem] tracking-[0.12rem] mb-3">
            Mr. <span className="text-green-500">Gokarna</span> Adhikari!
          </h1>
          <p className="text-slate-500 uppercase text-3xl font-medium tracking-[0.1rem]">
            A Front-End Developer💻
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
