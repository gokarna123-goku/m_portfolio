import React from "react";

const SkillExperience = () => {
  return (
    <>
      <div className="px-32 py-16 bg-slate-950/5">
        <div className="flex w-full h-auto items-start justify-center gap-10">
          <div className="skill-box w-[65%] h-auto py-2">
            <h1 className="text-xl font-normal text-slate-300 mb-5">
              My Skill
            </h1>
            <div className="flex items-start gap-16">
              <div className="w-1/2 bg-slate-800 p-2 rounded-md">
                <h1 className="text-xl font-normal text-slate-300 mb-3">
                  Technological Skills
                </h1>
                <div className="progress w-full h-auto bg-slate-400 rounded-full">
                    <div className="indicator bg-green-600 w-[87%] h-[0.3rem]"></div>
                </div>
              </div>
              <div className="w-1/2 bg-slate-800 p-2 rounded-md">
                <h1 className="text-xl font-normal text-slate-300">
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
    </>
  );
};

export default SkillExperience;
