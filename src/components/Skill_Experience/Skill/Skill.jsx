import React from "react";

const Skill = () => {
  return (
    <div className="skill-box lg:w-[65%] md:w-full sm:w-full w-full  h-auto py-2">
      <div className="flex items-start gap-12 flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full bg-green-900/20 shadow lg:p-4 md:p-4 sm:p-8 p-8 rounded-md">
          <h1 className="text-xl font-normal text-gray-400 mb-3">
            Technological Skills
          </h1>
          <div className="mb-4">
            <div className="flex items-center justify-between pr-2 mb-1">
              <h6 className="text-base text-gray-300">ReactJs</h6>
              <p className="text-lg text-gray-400">85%</p>
            </div>
            <div className="progress w-full h-auto bg-slate-400 rounded-full">
              <div className="indicator bg-green-600 w-[85%] h-[0.35rem] rounded-l-full"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between pr-2 mb-1">
              <h6 className="text-base text-gray-300">NodeJs</h6>
              <p className="text-lg text-gray-400">80%</p>
            </div>
            <div className="progress w-full h-auto bg-slate-400 rounded-full">
              <div className="indicator bg-green-600 w-[80%] h-[0.35rem] rounded-l-full"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between pr-2 mb-1">
              <h6 className="text-base text-gray-300">Django</h6>
              <p className="text-lg text-gray-400">92%</p>
            </div>
            <div className="progress w-full h-auto bg-slate-400 rounded-full">
              <div className="indicator bg-green-600 w-[92%] h-[0.35rem] rounded-l-full"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between pr-2 mb-1">
              <h6 className="text-base text-gray-300">Tailwind</h6>
              <p className="text-lg text-gray-400">88%</p>
            </div>
            <div className="progress w-full h-auto bg-slate-400 rounded-full">
              <div className="indicator bg-green-600 w-[88%] h-[0.35rem] rounded-l-full"></div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full bg-green-900/20 shadow lg:p-4 md:p-4 sm:p-8 p-8 rounded-md">
          <h1 className="text-xl font-normal text-gray-400 mb-3">
            Professional Skills
          </h1>
          <div className="mb-4">
            <div className="flex items-center justify-between pr-2 mb-1">
              <h6 className="text-base text-gray-300">Communication</h6>
              <p className="text-lg text-gray-400">90%</p>
            </div>
            <div className="progress w-full h-auto bg-slate-400 rounded-full">
              <div className="indicator bg-green-600 w-[90%] h-[0.35rem] rounded-l-full"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between pr-2 mb-1">
              <h6 className="text-base text-gray-300">Leadership</h6>
              <p className="text-lg text-gray-400">80%</p>
            </div>
            <div className="progress w-full h-auto bg-slate-400 rounded-full">
              <div className="indicator bg-green-600 w-[80%] h-[0.35rem] rounded-l-full"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between pr-2 mb-1">
              <h6 className="text-base text-gray-300">Problem solving</h6>
              <p className="text-lg text-gray-400">78%</p>
            </div>
            <div className="progress w-full h-auto bg-slate-400 rounded-full">
              <div className="indicator bg-green-600 w-[78%] h-[0.35rem] rounded-l-full"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between pr-2 mb-1">
              <h6 className="text-base text-gray-300">Creativity</h6>
              <p className="text-lg text-gray-400">87%</p>
            </div>
            <div className="progress w-full h-auto bg-slate-400 rounded-full">
              <div className="indicator bg-green-600 w-[87%] h-[0.35rem] rounded-l-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
