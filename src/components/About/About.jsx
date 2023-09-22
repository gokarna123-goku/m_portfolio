import React from "react";
import AboutImg from "../../assets/about.png";
import { Check } from "react-bootstrap-icons";

const About = () => {
  return (
    <>
      <div className="p-32 ">
        <div className="flex items-center justify-between gap-10">
          <div className="w-[43%] h-[34rem] bg-green-800/10 rounded-md">
            <img
              class="h-full w-full rounded-lg object-cover object-center rgba(34 197 94 / 0.5)"
              src={AboutImg}
              alt=""
            />
          </div>
          <div className="w-[45%] h-auto">
            <h1 className="text-slate-100 text-5xl font-extrabold tracking-wider mb-5">
              About me
            </h1>
            <p className="text-gray-400 text-[1.08rem] font-light mb-6">
              I'm a Nepal based web designer & front-end developer focused on
              crafting clean & user-friendly experiences. I am passionate about
              building excellent software that imporoves the lives of those
              around me.
            </p>
            <div className="flex items-center mb-4">
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-green-600 rounded-sm mr-2">
                    <Check className="text-4xl text-gray-950"/>
                </div>
                <h6 className="text-gray-200 text-lg font-normal tracking-wide">I am good at problem solving,</h6>
            </div>
            <button className="bg-green-600 px-7 py-2 rounded text-lg text-gray-950 mr-10">Download CV</button>
            <button className="bg-transparent border-2 border-green-600 px-7 py-1 rounded text-lg text-gray-300">Hire me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
