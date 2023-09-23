import React from "react";

const SkillExperience = () => {
  return (
    <>
      <div className="px-32 py-16 bg-slate-950/5">
        <div className="w-full h-auto">
          <h1 className="text-slate-100 text-center text-5xl font-extrabold tracking-wider mb-12">
            Explore Skill & Experience
          </h1>
          <div className="flex items-start gap-12">
            <div className="skill-box w-[65%] h-auto py-2">
              <div className="flex items-start gap-12">
                <div className="w-1/2 bg-green-900/20 shadow p-4 rounded-md">
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
                <div className="w-1/2 bg-green-900/20 shadow p-4 rounded-md">
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
                      <h6 className="text-base text-gray-300">Leasership</h6>
                      <p className="text-lg text-gray-400">80%</p>
                    </div>
                    <div className="progress w-full h-auto bg-slate-400 rounded-full">
                      <div className="indicator bg-green-600 w-[80%] h-[0.35rem] rounded-l-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-box w-[35%] h-auto rounded">
              <h1 className="text-xl font-normal text-gray-400 mb-5">
                My Experience
              </h1>
              <div className="snap-mandatory snap-x">
                <div className="w-full bg-green-900/20 shadow p-4 rounded-md">
                  <h1 className="text-[1.35rem] text-gray-300 font-medium tracking-wider mb-1">
                    Sr. Front-End Developer
                  </h1>
                  <h6 className="text-base text-gray-400 italic mb-1">
                    Full Time / Office
                  </h6>
                  <p className="text-base text-gray-300 mb-5">2021 - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillExperience;
