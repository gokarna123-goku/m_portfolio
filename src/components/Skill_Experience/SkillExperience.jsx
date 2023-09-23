import React from "react";

const SkillExperience = () => {
  return (
    <>
      <div className="px-32 py-16 bg-slate-950/5">
        <div className="w-full h-auto">
          <h1 className="text-slate-100 text-center text-5xl font-extrabold tracking-wider mb-12">
            Explore Skill & Experience
          </h1>
          <div className="flex items-start gap-10">
            <div className="skill-box w-[65%] h-auto py-2">
              <div className="flex items-start gap-16">
                <div className="w-1/2 bg-green-900/20 shadow px-3 py-4 rounded-md">
                  <h1 className="text-xl font-normal text-gray-400 mb-3">
                    Technological Skills
                  </h1>
                  <div className="flex items-center justify-between pr-2 mb-1">
                    <h6 className="text-base text-gray-300">HTML</h6>
                    <p className="text-lg text-gray-400">90%</p>
                  </div>
                  <div className="progress w-full h-auto bg-slate-400 rounded-full">
                    <div className="indicator bg-green-600 w-[90%] h-[0.35rem] rounded-l-full"></div>
                  </div>
                </div>
                <div className="w-1/2 bg-slate-800 p-2 rounded-md">
                  <h1 className="text-xl font-normal text-gray-400">
                    Professional Skills
                  </h1>
                </div>
              </div>
            </div>
            <div className="experience-box w-[35%] h-auto bg-indigo-700 rounded">
              <h1 className="text-xl font-normal text-slate-300 mb-5">
                My Experience
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillExperience;
