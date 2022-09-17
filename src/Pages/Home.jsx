import React from "react";
import imgFondo from "../assets/img-home/fondo.png";
import imgFoto from "../assets/img-logos/foto-logo.png";
import imgFoto1 from "../assets/img-logos/logo-nom.png";

import { Link } from "react-scroll"

// importar icono
// import {  } from "react-icons/md";
// se llmaa <BiArrowFromBottom />

{
  /* <img src={imgFondo} alt="" /> */
}

const Home = () => {
  return (
    <div
      name="home"
      // bg-gradient-to-b from-black via-black to-gray-800
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        {/* md:flex-row text-white */}

        <div className="flex flex-col justify-center h-full">
            {/* <h3 className="text-2xl sm:text-5xl font-bold text-white"> Hola, Soy</h3> */}
          {/* <h2 className="text-4xl sm:text-7xl font-bold text-white">Hola icono,ssss sossss
           sssssss  ssssssssy </h2> */}
           <p className=" pt-20 text-2xl sm:text-4xl sm:pb-4 font-bold text-white text-center">
           Hola, Soy 
          </p>
          
          <img
            src={imgFoto1}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
          
          {/* <h1> Stiwar Mosquera </h1> 
          
          max-w-md 
          */}
          {/* <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            adipisci iusto tempora, 
          </p> */}
          <p className="text-gray-500 py-4 max-w-md">
            Desarrollador, 
            Apasionado por los proyectos que emprende.
          </p>

          <div className="items-center grid grid-cols-3 sm:grid-cols-3">
            <button className="group text-white w-fit px-6 py-3 my-2 flex 
            items-center rounded-md bg-gradient-to-r from-[#f79729] to-orange-500 cursor-pointer">
              {/* shadow-md shadow-orange-600 */}
              Descarga CV
              {/* <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span> */}
            </button>
            <button className="group text-white w-fit px-6 py-3 my-2 flex 
            items-center rounded-md bg-gradient-to-r from-[#f79729] to-orange-500 cursor-pointer">
              GitHub
            </button>
          </div>
        </div>
        <div>
          <img
            src={imgFoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div> 
      </div>
    </div>
  );
};

export default Home;
