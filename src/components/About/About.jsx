import React from "react";
import AboutImg from "../../assets/about.png";
import { Check } from "react-bootstrap-icons";

const About = () => {
  return (
    <>
      <div className="lg:p-32 md:p-10 sm:p-10 p-10" id="about">
        <div className="flex items-center justify-between gap-10 lg:flex-row md:flex-row sm:flex-col flex-col">
          <div className="lg:w-[43%] md:w-[43%] sm:w-full w-full lg:h-[34rem] md:h-[34rem] sm:h-[22rem] h-[20rem]  bg-green-800/10 rounded-md">
            <img
              class="h-full w-full rounded-lg object-cover object-center rgba(34 197 94 / 0.5)"
              src={AboutImg}
              alt=""
            />
          </div>
          <div className="w-[45%] h-auto">
            <h1 className="text-slate-100 text-5xl font-extrabold tracking-wider mb-7">
              About me
            </h1>
            <p className="text-gray-400 text-[1.08rem] font-light mb-7">
              I'm a Nepal based web designer & front-end developer focused on
              crafting clean & user-friendly experiences. I am passionate about
              building excellent software that imporoves the lives of those
              around me.
            </p>
            <h1 className="text-green-500 text-[1.2rem] font-medium mb-2">
              Why you hire me for your next project?
            </h1>
            <div className="flex items-center mb-4">
              <div className="w-[20px] h-[20px] flex items-center justify-center bg-green-600 rounded-sm mr-2">
                <Check className="text-4xl text-gray-950" />
              </div>
              <h6 className="text-gray-200 text-lg font-normal tracking-wide">
                I am good at problem solving,
              </h6>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-[20px] h-[20px] flex items-center justify-center bg-green-600 rounded-sm mr-2">
                <Check className="text-4xl text-gray-950" />
              </div>
              <h6 className="text-gray-200 text-lg font-normal tracking-wide">
                I have a good leader capacity,
              </h6>
            </div>
            <div className="flex items-center mb-10">
              <div className="w-[20px] h-[20px] flex items-center justify-center bg-green-600 rounded-sm mr-2">
                <Check className="text-4xl text-gray-950" />
              </div>
              <h6 className="text-gray-200 text-lg font-normal tracking-wide">
                I have over 1 years of experience
              </h6>
            </div>
            <button className="bg-green-600 px-7 py-2 rounded text-lg text-gray-950 mr-10">
              Download CV
            </button>
            <button className="bg-transparent border-2 border-green-600 px-7 py-1 rounded text-lg text-gray-300">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
