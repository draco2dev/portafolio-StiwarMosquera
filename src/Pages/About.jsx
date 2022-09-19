import React from "react";

const About = () => {
  return (
    <div
      name="SobreMi"
      className="w-full h-screen bg-gradient-to-b from-white to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 ">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre mi
          </p>
        </div>
        <p className="text-xl mt-20">
          Soy desarrollador con dos de experiencia, mi enfoque esta sobre el
          desarrollo front-end aunque ya he tenido la oportunidad de interactuar
          con tecnologías de back-end como java, php, también estoy
          familiarizado con metodologías agiles como SCRUM.{" "}
        </p>
        <br />
        {/* <p className="text-xl ">
        Manejo tecnologias front-end y back-end como ReactJS, MySQL y Laravel entre otros, además de habilidades basicas de diseño y optimizacion de SEO, con otras habilidades nesesarias para construir una aplicacion o sitio web que sea funcional -.
        </p> */}
      </div>
    </div>
  );
};

export default About;
