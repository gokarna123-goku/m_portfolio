import React from "react";
import AboutImg from "../../assets/about.png";

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
            <p className="text-gray-500">
              I'm a Nepal based web designer & front-end developer focused on
              crafting clean & user-friendly experiences. I am passionate about
              building excellent software that imporoves the lives of those
              around me.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
