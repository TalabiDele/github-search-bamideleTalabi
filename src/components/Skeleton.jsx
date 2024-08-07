import React from "react";

const Skeleton = () => {
  return (
    <div
      role="status"
      className=" p-4 grid mx-auto justify-items-center rounded animate-pulse md:p-6 h-[100vh] items-center"
    >
      <div className=" grid justify-items-center w-[100%]">
        <div className="h-4 bg-gray-200 rounded-full w-[60vw] max-md:w-[60vw] mb-4"></div>
        <div className="h-7 bg-gray-200 rounded-full w-[40rem] max-md:w-[80vw] mb-4"></div>
        <div className=" flex items-center gap-2">
          <div className="h-2.5 bg-gray-200 rounded-full w-[20vw] max-md:w-[30vw] mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full w-[20vw] max-md:w-[30vw] mb-4"></div>
        </div>

        <div className="grid justify-items-center items-center mt-4">
          <svg
            className="w-10 h-10 text-gray-200 mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div className=" grid justify-items-center mb-2">
            <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
            <div className="w-[60vw] max-md:w-[80vw] h-2 bg-gray-200 rounded-full"></div>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full w-80 max-md:w-[70vw] mb-2"></div>
          <div className="h-2.5 bg-gray-200 rounded-full w-80 max-md:w-[70vw] mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
