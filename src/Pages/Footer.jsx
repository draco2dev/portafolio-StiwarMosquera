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
    <footer className='grid grid-cols-2 md:grid-cols-[180px_1fr_180px]
     border-black border-2 bg-white'>

      {/* <Link to='/' className='flex py-4 align-middle justify-center border-black border-r-2'>
        <img src={Logo} alt='Raddy' width='137' height='15' />
      </Link> */}

      <button  className='md:col-start-3 border-black md:border-l-2 
      flex gap-2 items-center justify-center text-lg
      bg-orange-300  hover:bg-orange-500 ease-in-out duration-75
      '>
        
        Inicio
      </button>

      <div className='col-span-2 md:row-start-1 md:col-start-2
      md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center
      justify-center p-4 text-center'>
        &copy; 2022 Stiwar Mosquera • Realizado con ReactJs • Almacenado en GitHub
      </div>
    </footer>
    
      
    // <div >
    //   <div className=" mx-auto py-16 px-4 gap-8 bg-gradient-to-b from-black via-black to-gray-800">
    //     {/* <h1 className="  w-full text-3xl font-bold text-[#f7fffc]   border-b-4 border-gray-500 text-center">
    //       draco2Dev.
    //     </h1> */}
    //     <div className="pb-8 text-center">
    //         <p className=" text-4xl font-bold inline text-[#f7fffc] border-b-4 border-gray-500">draco2Dev.</p>
    //     </div>
    //     <p className="py-4 text-[#f7fffc] text-center">gracias por ver mi Portafolio.</p>
    //     <div className="flex justify-between md:w-[100%] ">
    //       <FaFacebookSquare size={30} />
    //       <FaInstagram size={30} />
    //       <FaTwitterSquare size={30} />
    //       <FaGithubSquare size={30} />
    //       <FaDribbbleSquare size={30} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
