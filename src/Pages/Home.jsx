import React from "react";
import imgFondo from "../assets/img-home/fondo.png";
import imgFoto from "../assets/img-logos/foto-logo.png";
import imgFoto1 from "../assets/img-logos/logo-nom.png";

import axios from 'axios'
import fileDownload from 'js-file-download'

import { Link } from "react-scroll";

import pdf from '../PDFdowload/CV-STIWAR-MOSQUERA.pdf';

// importar icono
// import {  } from "react-icons/md";
// se llmaa <BiArrowFromBottom />

{
  /* <img src={imgFondo} alt="" /> */
}

const Home = () => {

  const handleLink = function(event){
    window.location.href = "https://github.com/draco2dev/";
  }

  const handleClick = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }

  return (
    <div
      name="Inicio"
      // bg-gradient-to-b from-black via-black to-gray-800
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 fondoHome"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* md:flex-row text-white */}

        <div className="flex flex-col justify-center md:h-full">
          {/* <h3 className="text-2xl sm:text-5xl font-bold text-white"> Hola, Soy</h3> */}
          {/* <h2 className="text-4xl sm:text-7xl font-bold text-white">Hola icono,ssss sossss
           sssssss  ssssssssy </h2> */}
          <p className=" pt-20 text-2xl sm:text-4xl sm:pb-4 font-bold text-white text-center">
            Hola, Soy
          </p>

          <img
            src={imgFoto1}
            alt="my profile"
            className="rounded-2xl mx-auto  w-full"
          />

          {/* <h1> Stiwar Mosquera </h1> 
          
          max-w-md 
          */}
          {/* <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            adipisci iusto tempora, 
          </p> */}
          <p className="text-gray-500 py-4 max-w-md ">
            Desarrollador, Apasionado por los proyectos que emprende.
          </p>

          <div className=" grid grid-cols-2 sm:grid-cols-3 items-center">
            <button
            onClick={() => {() => handleClick('https://avatars.githubusercontent.com/u/9919?s=280&v=4', 'sample')}}
              className="group text-white w-fit px-6 py-3 my-2 flex 
            items-center rounded-md bg-gradient-to-r from-[#f79729] to-orange-500 cursor-pointer"

            
            >
              {/* <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV-STIWAR-MOSQUERA.pdf"></a> */}

              {/* shadow-md shadow-orange-600 */}
              Descarga CV
              
            </button>
            <button onClick={handleLink}
              className="group text-white w-fit px-6 py-3 my-2 flex 
            items-center rounded-md bg-gradient-to-r from-[#f79729] to-orange-500 cursor-pointer"
            >
              GitHub
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={imgFoto}
            alt="my profile"
            className="rounded-2xl py-2 mx-auto w-5/3 md:w-full"
          />
        </div>
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=+573136590568"
          class=""
          target="_blank"
        >
          {/* <i class="fa fa-whatsapp icono"></i> */}
          <svg
            class=" btn-wsp w-5 h-5 text-green-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
