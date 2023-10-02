import React from "react";
import Skill from "./Skill/Skill";
import Experience from "./Experience/Experience";

const SkillExperience = () => {
  return (
    <>
      <div className="px-32 py-16 bg-slate-950/5">
        <div className="w-full h-auto">
          <h1 className="text-slate-100 text-center text-5xl font-extrabold tracking-wider mb-12">
            Skill & Experience
          </h1>
          <div className="flex items-start gap-12">
            <Skill />
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillExperience;
