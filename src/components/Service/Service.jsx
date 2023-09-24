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
      <div className="px-32 py-16">
        <h1 className="text-slate-100 text-5xl text-center font-extrabold tracking-wider mb-12">
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
