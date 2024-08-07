import React from "react";
import { MdError } from "react-icons/md";

const Error = ({ message }) => {
  return (
    <div className=" text-[#F70E0E] flex items-center gap-2 text-center justify-center mt-[3rem] text-2xl">
      <MdError />
      <p className="">{message}</p>
    </div>
  );
};

export default Error;
