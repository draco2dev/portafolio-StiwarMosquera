import React from "react";
import img from "../assets/img-portafolio/img-rick-and-morty.png";
import img2 from "../assets/img-portafolio/img-galeria.png";
import img3 from "../assets/img-portafolio/img-pokeapi.png";
import img4 from "../assets/img-portafolio/img-portafolio.png";
import img5 from "../assets/img-portafolio/img-contador.png";
import img6 from "../assets/img-portafolio/img-tareas.png";

const Portafolio = () => {

    const portafolio =[
        {
            id: 1,
            src: img2,
            despcipcion: 'Página de Galería ',
        },
        {
            id: 2,
            src: img6,
            despcipcion: 'App De Tareas ToDoList',
        },
        {
            id: 3,
            src: img4,
            despcipcion: 'Página de Portafolio',
        },
        {
            id: 4,
            src: img,
            despcipcion: 'App Rick and Morty',
        },
        {
            id: 5,
            src: img3,
            despcipcion: 'App PokeApi',
        },
        {
            id: 6,
            src: img5,
            despcipcion: 'Página de Contador',
        },
    ]
  return (
    <div name="portafolio" className="bg-gradient-to-b from-black to-gray-100 w-full text-white
     md:h-screen">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portafolio</p>
          <p className="py-6">Mi Trabajo</p>
        </div>


        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
            portafolio.map(({id, src, despcipcion}) =>(
                // shadow-orange-500
                // shadow-gray-600
                <div key={id} className="shadow-md shadow-orange-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
    
                    
                    <div className="flex items-center justify-center">
                        {/* <p className="text-4xl font-bold inline border-b-4 border-gray-500"> */}
                        <p className="py-1">
                            {despcipcion}
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="border w-1/2 px-6 py-3 m-4 bg-orange-400  hover:bg-orange-500 ease-in-out duration-75 hover:scale-105">Demo</button>
                        <button className="border w-1/2 px-6 py-3 m-4 bg-orange-400  hover:bg-orange-500 ease-in-out duration-75 hover:scale-105">Github</button>
                    </div>
                </div>
           
            ))}
         </div>

        
      </div>
    </div>
  );
};

export default Portafolio;
