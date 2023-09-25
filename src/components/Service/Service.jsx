import React from "react";
import SingleService from "./SingleService/SingleService";
// import Web from "../../assets/web.png";
// import App from "../../assets/app.png";
// import UxUi from "../../assets/design.png";

// const serviceData = {
//   service: {
//     id: 1,
//     name: "Web Development",
//     img: { Web },
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, eveniet assumenda atque vitae dolorem numquam.",
//   },
//   service: {
//     id: 2,
//     name: "App Development",
//     img: { App },
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, eveniet assumenda atque vitae dolorem numquam.",
//   },
//   service: {
//     id: 3,
//     name: "Ux/Ui Design",
//     img: { UxUi },
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, eveniet assumenda atque vitae dolorem numquam.",
//   },
// };

const Service = () => {
  return (
    <>
      <div className="lg:px-32 md:px-16 sm:px-10 px-10 py-16">
        <h1 className="text-slate-100 lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-center font-extrabold tracking-wider mb-12">
          My Services
        </h1>
        <div className="w-full h-auto">
          <SingleService />
        </div>
      </div>
    </>
  );
};

export default Service;
