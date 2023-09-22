import React from "react";
import AboutImg from "../../assets/about.png";

const About = () => {
  return (
    <>
      <div className="p-32 ">
        <div className="flex items-center justify-between gap-10">
          <div className="w-[45%] h-[33rem] bg-green-800/10 rounded-md">
            <img
              class="h-full w-full rounded-lg object-cover object-center rgba(34 197 94 / 0.5)"
              src={AboutImg}
              alt=""
            />
          </div>
          <div className="w-[45%] h-auto">
            <h1 className="text-slate-100 text-5xl font-extrabold tracking-wider mb-5">About me</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
