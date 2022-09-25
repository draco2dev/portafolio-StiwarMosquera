import React, { useState } from "react";
import imgFoto from "../assets/img-logos/logo.png";

// importacion de algunos iconos
import { FaBars, FaTimes } from "react-icons/fa";

// dsplazamiento en la barra de navegacion 
import { Link } from "react-scroll"

// icono menu
// <FaBars />

//arreglo para los link
const links = [
  {
    id: 1,
    link: "Inicio",
    style: "text-blue",
  },
  {
    id: 2,
    link: "Sobre Mi",
    style: "text-black",
  },
  {
    id: 3,
    link: "experiencia",
    style: "text-black",
  },
  {
    id: 4,
    link: "portafolio",
    style: "text-orange",
  },
  {
    id: 5,
    link: "Contacto",
    style: "text-orange",
  },
];

const Navbar = () => {
  // un estado para crear el menu pequeño
  const [nav, setNav] = useState(false);

  return (
    <div
      className="flex justify-between items-center w-full h-20 
    px-4 text-black bg-white fixed"
    >
      <div>
        {/* <h1 className="text-5xl font-signature ml-2">
        </h1> */}
        <img
            src={imgFoto}
            alt="my profile"
            className="rounded-1xl mx-auto w-2/3 md:w-full "
          />
        
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, style }) => (
          <li
            key={id}
            className={`px-10 md:font-bold cursor-pointer capitalize font-medium 
            hover:scale-105 duration-200 ${style}`}
            
          >
            {/* {link} */}
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
        className="flex flex-col items-center justify-center absolute top-0 left-0 w-full
       h-screen bg-gradient-to-b from-black to-gray-800 text-gray-800 "
    
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link onClick={() => setNav(!nav)} 
            to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      ) }

      
    </div>
  );
};

export default Navbar;
