import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mx-auto py-16 px-4 gap-8 bg-gradient-to-b from-black via-black to-gray-800">
      <div>
        {/* <h1 className="  w-full text-3xl font-bold text-[#f7fffc]   border-b-4 border-gray-500 text-center">
          draco2Dev.
        </h1> */}
        <div className="pb-8 text-center">
            <p className=" text-4xl font-bold inline text-[#f7fffc] border-b-4 border-gray-500">draco2Dev.</p>
        </div>
        <p className="py-4 text-[#f7fffc] text-center">gracias por ver mi Portafolio.</p>
        <div className="flex justify-between md:w-[100%] ">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
