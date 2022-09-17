import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Sobre mi</p>
        </div>
        <p className="text-xl mt-20">
        Desarrollador web especializado en la construccion de aplicaciones y sitios web con conocimientos en los lenguajes HTML, CSS, JavaScrip.
        </p>
        <br/>
        <p className="text-xl ">
        Manejo tecnologias front-end y back-end como ReactJS, MySQL y Laravel entre otros, además de habilidades basicas de diseño y optimizacion de SEO, con otras habilidades nesesarias para construir una aplicacion o sitio web que sea funcional -.
        </p>
      </div>
    </div>
  );
};

export default About;
