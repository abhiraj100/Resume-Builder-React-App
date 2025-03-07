import React from "react";
import { FaFilePdf } from "react-icons/fa6";
// import { FaSquarePhone } from "react-icons/fa6";
import CreateResume from "./CreateResume";
import ViewResume from "./ViewResume";

const Resume = () => {
  return (
    <div>
      <div className="bg-slate-100 flex flex-col gap-4 items-center py-6">
        <h1 className="text-4xl font-bold">Online Resume</h1>
        <button className="flex gap-1 hover:bg-green-950 bg-green-400 px-4 py-2 rounded-md font-medium text-white">
          <FaFilePdf className="mt-1" />
          <span>Download PDF Version</span>{" "}
        </button>
      </div>

      {/* Resume */}
      {/* <div>
        <div className="flex ">
          <div className="w-4/5 flex flex-col">
            <h1 className="font-bold tracking-[6px] text-5xl text-green-700">
              Simon Doe
            </h1>
            <p className="text-xl">Senior Software Engineer</p>
          </div>
          <div className="w-1/5 border-l border-gray-300"></div>
        </div>
      </div> */}

      <div className="flex gap-10">
        <CreateResume />
        <ViewResume />
      </div>
    </div>
  );
};

export default Resume;
