import React from "react";

const Experience = () => {
  return (
    <div className="experience-box w-[35%] h-auto rounded">
      <h1 className="text-xl font-normal text-gray-400 mb-5">My Experience</h1>
      <div className="w-full bg-green-900/20 shadow p-4 rounded-md">
        <h1 className="text-[1.35rem] text-green-400 font-medium tracking-wider mb-1">
          Sr. Front-End Developer
        </h1>
        <h6 className="text-base text-gray-400 italic mb-1">
          Full Time / Office
        </h6>
        <p className="text-base text-gray-300 mb-5">2021 - 2023</p>
        <hr className="my-5 h-0.5 border-t-0 bg-green-200/40 opacity-100 dark:opacity-50" />
        <p className="text-[0.95rem] text-gray-500 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, iste?
          Lorem ipsum dolor sit amet...
        </p>
        <div className="flex items-center gap-4 mb-3">
          <div className="bg-slate-700/50 text-green-300 py-[0.15rem] px-2 rounded text-[0.8rem] cursor-pointer">
            Django
          </div>
          <div className="bg-slate-700/50 text-green-300 py-[0.15rem] px-2 rounded text-[0.8rem] cursor-pointer">
            MySQL
          </div>
          <div className="bg-slate-700/50 text-green-300 py-[0.15rem] px-2 rounded text-[0.8rem] cursor-pointer">
            Ajax
          </div>
          <div className="bg-slate-700/50 text-green-300 py-[0.15rem] px-2 rounded text-[0.8rem] cursor-pointer">
            Tailwind
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
