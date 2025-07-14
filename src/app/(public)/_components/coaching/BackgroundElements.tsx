import React from "react";

const BackgroundElements = () => {
  return (
    <>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-transparent -z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-50 to-transparent -z-10"></div>

      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(80,70,230,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(80,70,230,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10"
        aria-hidden="true"
      ></div>

      <div className="absolute top-40 right-[10%] w-[500px] h-[500px] rounded-full bg-blue-50/50 mix-blend-multiply blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-50/50 mix-blend-multiply blur-3xl -z-10"></div>
    </>
  );
};

export default BackgroundElements;