import React from "react";

import html from "../assets/img-experiencia/html.png";
// import html from "../assets"

const Experiencia = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "TECNOLOGO EN SISTEMAS - SENA",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: html,
      title: "INGENIERO DE SISTEMAS - UNICLARETIANA",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: html,
      title: "DIPLOMADO {REACT} - FUNDACION MARIA LUISA DE MORENO",
      style: "shadow-orange-500",
    },
  ];

  const Expe = [
    {
      id: 1,
      src: html,
      title: "CAMARA DE COMERCIO - 2020",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: html,
      title: "SOLARISSOFT 2019 ",
      style: "shadow-orange-500",
    },
  ];

  //   const portafolio =[
  //     {
  //         id: 1,
  //         // src: img,
  //         despcipcion: 'Página de Galería ',
  //     },
  //     {
  //         id: 2,
  //         // src: img,
  //         despcipcion: 'App De Tareas ToDoList',
  //     },
  //     {
  //         id: 3,
  //         // src: img,
  //         despcipcion: 'Página de Galería',
  //     },
  //     {
  //         id: 4,
  //         // src: img,
  //         despcipcion: 'App Rick and Morty',
  //     },
  //     {
  //         id: 5,
  //         // src: img,
  //         despcipcion: 'App PokeApi',
  //     },
  //     {
  //         id: 6,
  //         // src: img,
  //         despcipcion: 'Página de Galería',
  //     },{
  //       id: 1,
  //       // src: img,
  //       despcipcion: 'Página de Galería ',
  //   },
  //   {
  //       id: 2,
  //       // src: img,
  //       despcipcion: 'App De Tareas ToDoList',
  //   },
  //   // {
  //   //     id: 3,
  //   //     // src: img,
  //   //     despcipcion: 'Página de Galería',
  //   // },
  //   // {
  //   //     id: 4,
  //   //     // src: img,
  //   //     despcipcion: 'App Rick and Morty',
  //   // },
  //   // {
  //   //     id: 5,
  //   //     // src: img,
  //   //     despcipcion: 'App PokeApi',
  //   // },
  //   // {
  //   //     id: 6,
  //   //     // src: img,
  //   //     despcipcion: 'Página de Galería',
  //   // },
  // ]

  return (
    <div name="experiencia">
<div
      
      className="bg-gradient-to-b from-gray-800 to-black  w-full text-white
    md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4  justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Perfil
          </p>
          <p className="py-6">Estudios</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-12 sm:px-0">
          <div className="text-center">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
              Estudios
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  {/* <img src={src} alt="" className="w-20 mx-auto" /> */}
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-center">
              Experiencia
            </p>
            <div className=" grid grid-cols-1 gap-8  text-center py-8 px-12 sm:px-0 ">
              {Expe.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  {/* <img src={src} alt="" className="w-20 mx-auto" /> */}
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className='grid grid-cols- sm:grid-cols-2 '>
      <p  className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-center">Estudios</p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0">
    
    </div>
    </div> */}
      </div>
    </div>
    </div>
    
  );
};

export default Experiencia;
