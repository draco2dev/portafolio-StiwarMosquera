import React from "react";
import img from "../assets/img-portafolio/img-rick-and-morty.png";

const Portafolio = () => {

    const portafolio =[
        {
            id: 1,
            src: img,
            despcipcion: 'Timbeke',
        },
        {
            id: 2,
            src: img,
            despcipcion: 'stiwar uno',
        },
        {
            id: 3,
            src: img,
            despcipcion: 'stiwar dos',
        },
        {
            id: 4,
            src: img,
            despcipcion: 'stiwar tres',
        },
    ]
  return (
    <div name="portafolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white
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
                        <button className="border w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="border w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Github</button>
                    </div>
                </div>
           
            ))}
         </div>

        
      </div>
    </div>
  );
};

export default Portafolio;
