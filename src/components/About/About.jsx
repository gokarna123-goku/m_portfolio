import React from "react";
import AboutImg from "../../assets/about.png";

const About = () => {
  return (
    <>
      <div className="p-32 ">
        <div className="flex items-center justify-between">
          <div className="w-[45%] h-[33rem] bg-green-800/10 rounded-md">
            <img
              class="h-full w-full rounded-lg object-cover object-center rgba(34 197 94 / 0.5)"
              src={AboutImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
